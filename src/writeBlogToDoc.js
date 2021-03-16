const {
  AlignmentType,
  convertInchesToTwip,
  Document,
  LevelFormat,
  Packer,
  UnderlineType,
} = require('docx');
const fs = require('fs');
const { createDocTitle } = require('./utils');

const convertPostToDoc = async (formatedPostObj, title, date) => {
  try {
    const doc = new Document({
      styles: {
        paragraphStyles: [
          {
            id: 'aside',
            name: 'Aside',
            basedOn: 'Normal',
            next: 'Normal',
            size: 28,
            run: {
              color: '000',
              italics: true,
            },
            paragraph: {
              indent: {
                left: convertInchesToTwip(0.5),
              },
              spacing: {
                line: 276,
              },
            },
          },
        ],
      },
      numbering: {
        config: [
          {
            reference: 'my-crazy-numbering',
            levels: [
              {
                level: 0,
                format: LevelFormat.LOWER_LETTER,
                text: '%1)',
                alignment: AlignmentType.LEFT,
              },
            ],
          },
        ],
      },
    });

    await doc.addSection(formatedPostObj);

    return Packer.toBuffer(doc).then(async (buffer) => {
      const postTitle = await createDocTitle(title, date);

      fs.writeFileSync(`docs/${postTitle}.docx`, buffer);
    });
  } catch (err) {
    console.log(new Error(err));
  }

  return true;
};

module.exports = convertPostToDoc;
