const docx = require('docx');
const fs = require('fs');
const createDocTitle = require('./docTitle');

const convertPostToDoc = async (post, title) => {
  const doc = new docx.Document();

  await doc.addSection(post);

  return docx.Packer.toBuffer(doc).then(async (buffer) => {
    const postTitle = await createDocTitle(title);

    fs.writeFileSync(`../docs/${postTitle}.docx`, buffer);
  });
};

module.exports = convertPostToDoc;
