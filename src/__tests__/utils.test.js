// const describe = require('mocha').describe();
// const it = require('mocha').it();
const { expect } = require('chai');

const {
  createDocTitle,
  extractSubTitle,
  createArrofParagraphs,
  formatDate
} = require('../utils');

// tests for createDocTitle util function
describe('Blog Post Title to Word Doc Title', () => {
  it('changes Blog Post Test to blog-post-test', () => {
    const title = 'Blog Post Test';
    const dateExample = '2011-11-02T17:13:02.000Z';
    const dateObj = new Date(dateExample);
    const modTitle = createDocTitle(title, dateObj);

    expect(modTitle).to.equal('blog-post-test-10-3-2011');
  });
});

// tests for extractSubTitle util function
describe('Extract text between h2 tags', () => {
  const testStr = '<div><h2 class="hello-world">Hello I am the subtitle from this post</h2><p>And I am the content for that post.</div>';
  const strToDomElm = extractSubTitle(testStr);

  it('should parse string and return DOM object', () => {
    expect(typeof strToDomElm).to.equal('object');
  });

  it('the DOM element should contain H2', () => {
    const testStrTwo = '<p>Testing...</p>';
    const secondStrToDomElm = extractSubTitle(testStrTwo);

    expect(secondStrToDomElm).to.equal(null);
    expect(strToDomElm.textContent).to.equal('Hello I am the subtitle from this post');
  });
});

// check if p tags are split into an array
describe('should return an array from a string of p tags', () => {
  const testPTags = '<p>Test one...</p><p>Test two...</p><p>Test three...</p>';
  it('there should be an array of 3 p tags', () => {
    const strToArr = createArrofParagraphs(testPTags);

    expect(strToArr.length).to.equal(3);
  });

  it('the type of strToArr should be an array', () => {
    const strToArr = createArrofParagraphs(testPTags);
    expect(typeof strToArr).to.equal('object');
  });
});

// format date utility
describe('format date utlity function', () => {
  it('check if date obj returns date in 01-01-2021', () => {
    const dateExample = '2011-11-02T17:13:02.000Z';
    const dateObj = new Date(dateExample);
    const fDate = formatDate(dateObj);
    console.log(fDate);

    expect(fDate).to.equal('10-3-2011');
  });
});
