require('dotenv').config();
const mysql = require('mysql');
const Post = require('./Post');
const convertPostToDoc = require('./conversion');

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

connection.query('SELECT post_title FROM wp_posts WHERE date < "2015-01-01" ORDER BY post_date DESC ', (error, results, fields) => {
  if (error) throw error;
  console.log(results);
  connection.end();
});

// use mysql to query the database
// then we convert the results into new Post objects

// then we convert each Post object to new a word document
