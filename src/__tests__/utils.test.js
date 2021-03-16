const { describe, it } = require('mocha');
const { expect } = require('chai');
const {
  createDocTitle,
  extractSubTitle,
  createArrofParagraphs,
} = require('../utils');

// tests for createDocTitle util function
describe('Blog Post Title to Word Doc Title', () => {
  it('changes Blog Post Test to blog-post-test', () => {
    const title = 'Blog Post Test';
    const modTitle = createDocTitle(title, '01-01-2021');

    expect(modTitle).to.equal('blog-post-test-01-01-2021');
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
