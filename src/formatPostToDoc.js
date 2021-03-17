const { Paragraph, TextRun } = require('docx');
const convertPostToDoc = require('./writeBlogToDoc');
const { formatDate } = require('./utils');

const formatPostToDoc = (post) => {
  try {
    const content = post.body.map((paragraph) => new Paragraph({
      spacing: {
        after: 200,
        before: 200,
        line: 200,
      },
      children: [
        new TextRun({
          text: paragraph,
          size: 24,
          pageBreak: true,
          spacing: {
            after: 1000,
            before: 1000,
            line: 1000,
          },
        }),
      ],
    }));

    const formatedPostObj = {
      properties: {},
      children: [
        new Paragraph({
          spacing: {
            after: 200,
            before: 200,
            line: 200,
          },
          children: [
            new TextRun({
              text: 'Title: ',
              bold: true,
              size: 26,
            }),
            new TextRun({
              text: post.title || '',
              size: 24,
              spacing: {
                after: 1000,
                before: 1000,
                line: 1000,
              },
            }),
          ],
        }),
        new Paragraph({
          spacing: {
            after: 200,
            before: 200,
            line: 200,
          },
          children: [
            new TextRun({
              text: 'Subtitle: ',
              bold: true,
              size: 26,
            }),
            new TextRun({
              text: post.subTitle || '',
              size: 24,
            }),
          ],
        }),
        new Paragraph({
          spacing: {
            after: 200,
            before: 200,
            line: 200,
          },
          children: [
            new TextRun({
              text: 'Meta Description: ',
              bold: true,
              size: 26,
            }),
            new TextRun({
              text: post.metaDescription || '',
              size: 24,
            }),
          ],
        }),
        new Paragraph({
          spacing: {
            after: 200,
            before: 200,
            line: 200,
          },
          children: [
            new TextRun({
              text: 'Date: ',
              bold: true,
              size: 26,
            }),
            new TextRun({
              text: formatDate(post.date) || '',
              size: 24,
            }),
          ],
        }),
        new Paragraph({
          spacing: {
            after: 200,
            before: 200,
            line: 200,
          },
          children: [
            new TextRun({
              text: 'Categories: ',
              bold: true,
              size: 26,
            }),
            new TextRun({
              text: post.categories || '',
              size: 24,
            }),
          ],
        }),
        new Paragraph({
          spacing: {
            after: 200,
            before: 200,
            line: 200,
          },
          children: [
            new TextRun({
              text: 'Author: ',
              bold: true,
              size: 26,
            }),
            new TextRun({
              text: post.author || '',
              size: 24,
            }),
          ],
        }),
        new Paragraph({
          spacing: {
            after: 200,
            before: 200,
            line: 200,
          },
          children: [
            new TextRun({
              text: 'Formatted Content: ',
              bold: true,
              size: 26,
            }),
          ],
        }),
        ...content,
        new Paragraph({
          spacing: {
            after: 200,
            before: 200,
            line: 200,
          },
          children: [
            new TextRun({
              text: 'Raw Content: ',
              bold: true,
              size: 26,
            }),
            new TextRun({
              text: post.additionalData || '',
              size: 24,
              spacing: {
                after: 1000,
                before: 1000,
                line: 1000,
              },
            }),
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
