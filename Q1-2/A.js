// Include fs module
const fs = require("fs");
// ASYNC version of reading and writing data
// Use fs.readFile() method to read the file
fs.readFile("./from.txt", "UTF-8", (err, data) => {
  // if the we had a problem this will display the error
  if (err) console.log(err);
  else {
    // Use fs.writeFile() method write the file content in "to.txt"
    fs.writeFile("./to.txt", data, (err) => {
      //display the error message
      if (err) console.log(err);
    });
  }
});
