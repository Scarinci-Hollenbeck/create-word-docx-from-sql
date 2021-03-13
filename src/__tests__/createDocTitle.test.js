const { describe, it } = require('mocha');
const { expect } = require('chai');
const createDocTitle = require('../docTitle');

describe('Blog Post Title to Word Doc Title', () => {
  it('changes Blog Post Test to blog-post-test', () => {
    const title = 'Blog Post Test';
    const modTitle = createDocTitle(title);

    expect(modTitle).to.equal('blog-post-test');
  });
});
