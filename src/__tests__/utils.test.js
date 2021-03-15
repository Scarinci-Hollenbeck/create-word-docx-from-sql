const { describe, it } = require('mocha');
const { expect } = require('chai');
const {
  createDocTitle,
  extractSubTitle,
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
