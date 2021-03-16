const docx = require('docx');
const fs = require('fs');
const { createDocTitle } = require('./utils');

const convertPostToDoc = async (formatedPostObj, title, date) => {
  try {
    const doc = new docx.Document();

    await doc.addSection(formatedPostObj);

    return docx.Packer.toBuffer(doc).then(async (buffer) => {
      const postTitle = await createDocTitle(title, date);

      fs.writeFileSync(`docs/${postTitle}.docx`, buffer);
    });
  } catch (err) {
    console.log(new Error(err));
  }

  return true;
};

module.exports = convertPostToDoc;
