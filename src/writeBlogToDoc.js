const { Document, Packer } = require('docx');
const fs = require('fs');
const { createDocTitle } = require('./utils');

const convertPostToDoc = async (formatedPostObj, title, date) => {
  try {
    const doc = new Document({});

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
