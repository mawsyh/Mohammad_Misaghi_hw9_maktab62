// Include fs module
const fs = require("fs");
// reading 2 files and writing them into another file in asynchronous way
// Use fs.readFile() method to read the file
let resultData;
// using try/catch method for error handling
try {
  // Use fs.readFileSync() method to read the file
  resultData = fs.readFileSync("./from.txt", "UTF-8");
} catch (err) {
  //display the error message
  console.log("Reading from.txt Errors:", err);
}
// using try/catch method for error handling
try {
  // Use fs.readFileSync() method to read the file
  //and adding the result to resultData
  resultData += "\n" + fs.readFileSync("./append.txt", "UTF-8");
} catch (err) {
  //display the error message
  console.log("Reading append.txt Errors:", err);
}

// using try/catch method for error handling
try {
  // Use fs.writeFileSync() method write the file content in "to.txt"
  fs.writeFileSync("./to.txt", resultData);
} catch (err) {
  //display the error message
  console.log("Writing Errors:", err);
}
