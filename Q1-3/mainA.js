// Include fs module
const fs = require("fs");
// ASYNC version of making a file and checking it existence
fs.writeFile("./newFile.txt", "This is a new file", (err) => {
  if (err) cosnole.log(`This error happened while writing: `, err);
});

//for checking we use 2 methods
const path = "./newFile.txt";
//METHOD 1: fs.exists
//since this method is deprecated I recommend using method 2 instead
fs.exists(path, function (isExist) {
  if (isExist) {
    console.log("METHOD1:", path, "exists.");
  } else {
    console.log("METHOD1:", path, "does NOT exists.");
  }
});

//METHOD 2: fs.exists
fs.access(path, function (error) {
  if (error) {
    console.log("METHOD2:", path, "does NOT exists.");
    console.log(error);
  } else {
    console.log("METHOD2:", path, "exists.");
  }
});
