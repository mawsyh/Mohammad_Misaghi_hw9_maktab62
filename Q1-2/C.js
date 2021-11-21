// Include fs module
const fs = require("fs");
// reading 2 files and writing them into another file in synchronous way
// Use fs.readFile() method to read the file
fs.readFile("./from.txt", "UTF-8", (err, fromTxtData) => {
  // if the we had a problem this will display the error
  if (err) {
    console.log("This error accured when trying to read from.txt: ", err);
  } else {
    // Use fs.writeFile() method write the file content in "to.txt"
    fs.readFile("./append.txt", "UTF-8", (err, appendTxtData) => {
      if (err) {
        //display the error message
        console.log(
          "This error accured when trying to append append.txt: ",
          err
        );
      } else {
        let resulatData = fromTxtData + "\n" + appendTxtData;
        fs.writeFile("./to.txt", resulatData, (err) => {
          //display the error message
          if (err) {
            console.log("This error accured when trying to write files: ", err);
          } else console.log("Done");
        });
      }
    });
  }
});
