const docx = require('docx');
const fs = require('fs');
const { createDocTitle } = require('./utils');

const convertPostToDoc = async (formatedPostObj, title, date) => {
  const doc = new docx.Document();

  await doc.addSection(formatedPostObj);

  return docx.Packer.toBuffer(doc).then(async (buffer) => {
    const postTitle = await createDocTitle(title, date);

    fs.writeFileSync(`../docs/${postTitle}.docx`, buffer);
  });
};

module.exports = convertPostToDoc;
