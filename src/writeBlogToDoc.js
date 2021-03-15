const docx = require('docx');
const fs = require('fs');
const createDocTitle = require('./utils');

const convertPostToDoc = async (post, title, date) => {
  const doc = new docx.Document();

  await doc.addSection(post);

  return docx.Packer.toBuffer(doc).then(async (buffer) => {
    const postTitle = await createDocTitle(title, date);

    fs.writeFileSync(`../docs/${postTitle}.docx`, buffer);
  });
};

module.exports = convertPostToDoc;
