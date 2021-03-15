const jsdom = require('jsdom');

const { JSDOM } = jsdom;

// extract subtitle from text
const extractSubTitle = (body) => {
  const doc = new JSDOM(body);

  return doc.window.document.querySelector('h2');
};

const createDocTitle = (post, date) => `${post.replace(/\s+/g, '-').toLowerCase()}-${date}`;

module.exports = {
  createDocTitle,
  extractSubTitle,
};
