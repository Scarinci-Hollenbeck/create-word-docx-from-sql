const createDocTitle = (post) => post.replace(/\s+/g, '-').toLowerCase();

module.exports = createDocTitle;
