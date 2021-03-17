const jsdom = require('jsdom');

const { JSDOM } = jsdom;

// extract subtitle from text
const extractSubTitle = (body) => {
  const doc = new JSDOM(body);

  return doc.window.document.querySelector('h2');
};

const formatDate = (date) => {
  const dateObj = new Date(date);

  return `${parseInt(dateObj.getMonth(), 10) + 1}-${dateObj.getDate()}-${dateObj.getFullYear()}`;
};

// create a doc file title
const createDocTitle = (post, date) => `${formatDate(date)}-${post.replace(/[^\w\s]/gi, '').replace(/\s+/g, '-').toLowerCase()}`;

// create an array of paragraphs based on string
const createArrofParagraphs = (body) => {
  const doc = new JSDOM(body);
  const allPTags = doc.window.document.querySelectorAll('p');

  return Array.from(allPTags).map((item) => item.textContent);
};

module.exports = {
  createDocTitle,
  extractSubTitle,
  createArrofParagraphs,
  formatDate,
};
