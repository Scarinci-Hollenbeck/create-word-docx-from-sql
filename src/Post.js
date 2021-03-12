/* eslint-disable max-len */
class Post {
  constructor(title, subTitle, body, featuredImage, bodyImage, metaDescription, metaTitle, date, author, categories) {
    this.title = title;
    this.subTitle = subTitle;
    this.body = body;
    this.featuredImage = featuredImage;
    this.bodyImage = bodyImage;
    this.metaDescription = metaDescription;
    this.metaTitle = metaTitle;
    this.date = date;
    this.author = author;
    this.categories = categories;
  }
}

module.exports = Post;
