// Include fs module
const fs = require("fs");
// SYNC version of making a file and checking it existence
// using try/catch method for error handling
try {
  // Use fs.writeFileSync() method write the file content in "to.txt"
  fs.writeFileSync("./newFile.txt", "This is a new file");
} catch (err) {
  //display the error message
  console.log("Error while writing:", err);
}

//for checking we use 2 methods
const path = "./newFile.txt";
//METHOD 1: fs.exists
//since this method is deprecated I recommend using method 2 instead
if (fs.existsSync(path)) {
  console.log("METHOD1:", path, "exists.");
} else {
  console.log("METHOD1:", path, "does NOT exists.");
}

//METHOD 2: fs.exists
try {
  fs.accessSync(path);
  console.log("METHOD2:", path, "exists.");
} catch (err) {
  console.log("METHOD2:", path, "does NOT exists.");
  console.error(err);
}
