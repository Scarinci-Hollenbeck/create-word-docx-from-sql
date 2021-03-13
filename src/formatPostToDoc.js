const convertPostToDoc = require('./writeBlogToDoc');

const formatPostToDoc = (post) => {
    // run through all the formatting from docx npm
    return convertPostToDoc(post);
};

module.exports = formatPostToDoc;
