const jsdom = require('jsdom');

const { JSDOM } = jsdom;

// extract subtitle from text
const extractSubTitle = (body) => {
  const doc = new JSDOM(body);

  return doc.window.document.querySelector('h2');
};

const formatDate = (date) => {
  const dateObj = new Date(date);

  return `${dateObj.getMonth()}-${dateObj.getDay()}-${dateObj.getFullYear()}`;
};

// create a doc file title
const createDocTitle = (post, date) => `${post.replace(/\s+/g, '-').toLowerCase()}-${formatDate(date)}`;

// create an array of paragraphs based on string
const createArrofParagraphs = (body) => {
  const doc = new JSDOM(body);
  const allPTags = doc.window.document.querySelectorAll('p');

  return Array.from(allPTags).map((item) => item.innerHTML);
};

module.exports = {
  createDocTitle,
  extractSubTitle,
  createArrofParagraphs,
  formatDate,
};
