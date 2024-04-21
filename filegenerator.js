const fs = require("fs");

// Function to create file with template content
function createFile(filename) {
  const name = filename.slice(0, -3);
  const templateContent = `const ${name} = \`\`;

module.exports = ${name};
`;

  fs.writeFile(filename, templateContent, (err) => {
    if (err) throw err;
    console.log(`${filename} created successfully.`);
  });
}

// Function to create files from array of filenames
function createFiles(filenames) {
  filenames.forEach((filename) => {
    createFile(filename + ".js"); // Add .js extension dynamically
  });
}

// Example usage
const filenames = [
  "duaashirk",
  "ibaadah",
  "kitabtawheed",
  "istiaanah",
  "zaatullaah",
  "nomsallaahdetail",
  "aqeedahallaahtwo",
  "cotallaah",
  "allaahcause",
]; // Provide your array of filenames here
createFiles(filenames);
