const { Paragraph, TextRun } = require('docx');
const convertPostToDoc = require('./writeBlogToDoc');

const formatPostToDoc = (post) => {
  const formatedPostObj = {
    properties: {},
    children: [
      new Paragraph({
        children: [
          new TextRun({
            title: 'Blog Post Title',
            bold: true,
          }),
          new TextRun(post.body),
        ],
      }),
      new Paragraph({
        children: [
          new TextRun({
            title: 'Sub title',
            bold: true,
          }),
          new TextRun(post.subTitle),
        ],
      }),
      new Paragraph({
        children: [
          new TextRun({
            title: 'Meta Description',
            bold: true,
          }),
          new TextRun(post.metaDescription),
        ],
      }),
      new Paragraph({
        children: [
          new TextRun({
            title: 'Date',
            bold: true,
          }),
          new TextRun(post.date),
        ],
      }),
      new Paragraph({
        children: [
          new TextRun({
            title: 'Author',
            bold: true,
          }),
          new TextRun(post.author),
        ],
      }),
      new Paragraph({
        children: [
          new TextRun({
            title: 'Categories',
            bold: true,
          }),
          new TextRun(post.author),
        ],
      }),
      new Paragraph({
        children: post.body.map((paragraph) => new TextRun(paragraph)),
      }),
    ],
  };

  return convertPostToDoc(formatedPostObj, post.title, post.date);
};

module.exports = formatPostToDoc;
