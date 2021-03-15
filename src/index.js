/* eslint-disable camelcase */
require('dotenv').config();
const mysql = require('mysql');
const Post = require('./Post');
const { extractSubTitle } = require('./utils');
const { formatPostToDoc } = require('./formatPostToDoc');

// store posts in mysql database
const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
});

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }

  console.log(`connected as id ${connection.threadId}`);
});

const query = `SELECT DISTINCT
p.ID AS id,
p.post_title AS title,
p.post_date AS date,
p.post_content AS content,
(
  SELECT group_concat(t.name SEPARATOR ', ')
  FROM wp_terms t
  LEFT JOIN wp_term_taxonomy tt ON t.term_id = tt.term_id
  LEFT JOIN wp_term_relationships tr ON tr.term_taxonomy_id = tt.term_taxonomy_id
  WHERE tt.taxonomy = 'category' AND p.ID = tr.object_id
) AS category,
(
SELECT display_name
  FROM wp_users
  RIGHT JOIN wp_posts ON p.post_author = wp_users.ID
  LIMIT 1
) AS author,
(
SELECT meta_value
  FROM wp_postmeta m
  RIGHT JOIN wp_posts ON p.ID = m.post_id
  WHERE m.meta_key='_yoast_wpseo_metadesc'
  LIMIT 1
) AS meta_description
FROM wp_posts p
WHERE p.post_type = 'post'
AND p.post_status = 'publish'
AND p.post_date < "2015-01-01"
LIMIT 10;
`;

// describe
connection.query(query, (err, data) => {
  if (err) {
    console.error(err);
  }

  // iterater through query results
  data.forEach((post) => {
    // extract subtitle from post content
    let subTitle = '';
    const postToDomElm = extractSubTitle(post.content);

    if (postToDomElm) {
      subTitle += postToDomElm.innerHTML;
    }

    const postObj = new Post(
      post.title,
      subTitle,
      post.content,
      post.meta_description,
      post.date,
      post.author,
      post.category,
    );

    // now we need to pass the postObj to the Word Doc format function
    formatPostToDoc(postObj);
  });
});

connection.end();
