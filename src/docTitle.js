// change this to a utils files
// to extract images and paragraphs from content
// extract subtitle from text

// also modify this func to take in post date too and attach it to title
// so its name-of-post-01-01-2015 or something like that
const createDocTitle = (post) => post.replace(/\s+/g, '-').toLowerCase();

module.exports = createDocTitle;
