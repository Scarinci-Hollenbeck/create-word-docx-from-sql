const convertPostToDoc = require('./writeBlogToDoc');

// run through all the formatting from docx npm
const formatPostToDoc = (post) => convertPostToDoc(post);

module.exports = formatPostToDoc;
