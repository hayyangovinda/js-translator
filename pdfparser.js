// Read the PDF file

const fs = require("fs");
const PDFParser = require("pdf-parse");
const fileNames = require("./fileNames.js");

function getPdfPathArray(fileNames) {
  const filePaths = [];
  for (let fileName of fileNames) {
    const filePath = `C:/Users/hayya/OneDrive/Desktop/shabbir/aqeedah/${fileName}.pdf`;
    filePaths.push(filePath);
  }

  return filePaths;
}

function processPDF(pdfPath) {
  const pdfName = pdfPath.split("/").pop().split(".")[0];
  const pdfData = fs.readFileSync(pdfPath);

  // Parse the PDF data
  PDFParser(pdfData)
    .then((data) => {
      // Extracted text from the PDF
      const text = data.text;

      // Write the extracted text to a JavaScript file
      fs.writeFile(
        `${pdfName}.js`,
        `const ${pdfName} = \`${text}\`;
    
      module.exports = ${pdfName};
    `,
        (err) => {
          if (err) {
            console.error("Error writing file:", err);
            return;
          }
        }
      );
    })
    .catch((err) => {
      // Handle errors
      console.error("Error:", err);
    });
}

const filePaths = getPdfPathArray(fileNames);
for (let filePath of filePaths) {
  processPDF(filePath);
}
