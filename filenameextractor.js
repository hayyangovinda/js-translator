const fs = require("fs");

const folderPath = "C:/Users/hayya/OneDrive/Desktop/shabbir/aqeedah";

// Create an array to store file names
let fileNames = [];

// Read the contents of the folder
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Error reading folder:", err);
    return;
  }

  // Push file names into the array
  files.forEach((file) => {
    const name = file.slice(0, -4);
    fileNames.push(name);
  });

  // Write the array as a constant in a JS file
  const jsContent = `const fileNames = ${JSON.stringify(
    fileNames
  )};\nmodule.exports = fileNames;`;
  fs.writeFile("./fileNames.js", jsContent, (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log("File names written to fileNames.js");
  });
});
