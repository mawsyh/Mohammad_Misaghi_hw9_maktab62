// Include fs module
const fs = require("fs");
// SYNC version of reading and writing data
let dataFromFromTxt;
// using try/catch method for error handling
try {
  // Use fs.readFileSync() method to read the file
  dataFromFromTxt = fs.readFileSync("./from.txt", "UTF-8");
} catch (err) {
  //display the error message
  console.log("Error:", err);
}
// using try/catch method for error handling
try {
  // Use fs.writeFileSync() method write the file content in "to.txt"
  fs.writeFileSync("./to.txt", dataFromFromTxt);
} catch (err) {
  //display the error message
  console.log("Error:", err);
}
