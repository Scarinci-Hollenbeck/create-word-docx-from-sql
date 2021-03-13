/* eslint-disable camelcase */
require('dotenv').config();
const mysql = require('mysql');
const Post = require('./Post');
const formatPostToDoc = require('./formatPostToDoc');

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

connection.query('SELECT post_title, post_date, post_author, post_content FROM wp_posts WHERE post_date < "2015-01-01" ORDER BY post_date DESC LIMIT 3', (error, results) => {
  if (error) throw error;

  // post_author only gets an id
  // so we need to upload author posts too
  results.forEach((post) => {
    const {
      post_title, post_date, post_author, post_content,
    } = post;

    const queryToPost = new Post({
      title: post_title,
      date: post_date,
      author: post_author,
      content: post_content,
    });

    return formatPostToDoc(queryToPost);
  });

  // use mysql to query the database
  // then we convert the results into new Post objects

// then we convert each Post object to new a word document
});

connection.end();
