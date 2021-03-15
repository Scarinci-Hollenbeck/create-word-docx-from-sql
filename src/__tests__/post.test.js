const { describe, it } = require('mocha');
const { expect } = require('chai');
const Post = require('../Post');

describe('Post', () => {
  const dummiePost = {
    title: 'Temp Post title',
    subTitle: 'Temp Post sub title',
    body: 'Temp post post body content',
    metaDescription: 'Temp post meta description',
    metaTitle: 'Temp post meta title',
    date: 'January 2, 2021',
    author: ['Ronald McDonald', 'Tommy Tuna'],
    categories: ['Firm Insights', 'Business Law'],
  };
  const newPost = new Post(
    dummiePost.title,
    dummiePost.subTitle,
    dummiePost.body,
    dummiePost.metaDescription,
    dummiePost.date,
    dummiePost.author,
    dummiePost.categories,
  );

  it('should create a new post', () => {
    expect(Object.keys(newPost).length).to.equal(7);
  });

  it('newPost.title should equal Temp Post title', () => {
    expect(newPost.title).to.equal('Temp Post title');
  });

  it('newPost should be an object', () => {
    expect(typeof newPost).to.equal('object');
  });
});
