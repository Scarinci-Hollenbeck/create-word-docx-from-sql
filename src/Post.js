/* eslint-disable max-len */
class Post {
  constructor(title, subTitle, body, metaDescription, date, author, categories) {
    this.title = title;
    this.subTitle = subTitle;
    this.body = body;
    this.metaDescription = metaDescription;
    this.date = date;
    this.author = author;
    this.categories = categories;
  }
}

module.exports = Post;
