const { Paragraph, TextRun } = require('docx');
const convertPostToDoc = require('./writeBlogToDoc');
const { formatDate } = require('./utils');

const formatPostToDoc = (post) => {
  try {
    const content = post.body.map((paragraph) => new Paragraph({ text: paragraph || '' }));

    const formatedPostObj = {
      properties: {},
      children: [
        new Paragraph({
          children: [
            new TextRun({
              text: 'Title: ',
              bold: true,
            }),
            new TextRun(post.title || ''),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: 'Subtitle: ',
              bold: true,
            }),
            new TextRun(post.subTitle || ''),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: 'Meta Description: ',
              bold: true,
            }),
            new TextRun(post.metaDescription || ''),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: 'Date: ',
              bold: true,
            }),
            new TextRun(formatDate(post.date) || ''),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: 'Categories: ',
              bold: true,
            }),
            new TextRun(post.categories || ''),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: 'Author: ',
              bold: true,
            }),
            new TextRun(post.author || ''),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: 'Formatted Content: ',
              bold: true,
            }),
          ],
        }),
        ...content,
        new Paragraph({
          children: [
            new TextRun({
              text: 'Raw Content: ',
              bold: true,
            }),
            new TextRun(post.additionalData || ''),
          ],
        }),
      ],
    };

    return convertPostToDoc(formatedPostObj, post.title, post.date);
  } catch (err) {
    console.error(err);

    return new Error(err);
  }
};

module.exports = formatPostToDoc;
