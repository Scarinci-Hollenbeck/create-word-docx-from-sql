const convertPostToDoc = require('./writeBlogToDoc');

// run through all the formatting from docx npm
const formatPostToDoc = (post, title) => convertPostToDoc(post, title);

module.exports = formatPostToDoc;
