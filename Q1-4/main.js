// Include fs module
const fs = require("fs");

//getting the names from names.txt with error handling
let names;
try {
  names = fs.readFileSync("./names.txt", "UTF-8");
} catch (e) {
  console.log("Error while reading names.txt:", e);
}

//getting the numbers from names.txt with error handling
let numbers;
try {
  numbers = fs.readFileSync("./numbers.txt", "UTF-8");
} catch (e) {
  console.log("Error while reading names.txt:", e);
}

// making the names and numbers into standard arrays
let namesArray = names.replaceAll("\n", " ").replace(/\s-\s/g, " ").split(" ");
let numbersArray = numbers
  .replaceAll("\n", " ")
  .replace(/\s-\s/g, " ")
  .split(" ");

//making an object out of the infos
let idObject = new Object();
for (let i = 1; i <= namesArray.length; i++) {
  if (isOdd(i)) idObject[namesArray[i - 1].toString()] = [namesArray[i]];
}
// this option seprate indexes to even and odd
function isOdd(num) {
  return num % 2;
}

for (let i = 0; i < numbersArray.length; i++) {
  if (Object.keys(idObject).includes(numbersArray[i]))
    idObject[numbersArray[i]].push(numbersArray[i + 1]);
}

console.log(idObject);

//making the info string in a standard way
let info;
for (let index of Object.values(idObject)) {
  if (index.length === 2) info = `${index[0]}'s phone number is ${index[1]}\n`;
  else if (index.length > 2) {
    info += `${index[0]}'s phone numbers are `;
    for (let i = 1; i < index.length; i++) {
      info += `${index[i]} `;
    }
  } else {
    info += `\n${index} hasn't any phone number.`;
  }
}

//writing the new file
try {
  fs.writeFileSync("contact-info.txt", info);
} catch (e) {
  console.log("Error while writing Contact-info.txt:", e);
}
