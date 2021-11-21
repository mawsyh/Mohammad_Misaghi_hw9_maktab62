function getName(cb) {
  //how to take the name by user
  //   const firstName = prompt("Please enter your first name:")
  //   const lastName = prompt("Please enter your last name:")
  // just testing
  const firstName = "Ali";
  const lastName = "Ahmadi";
  cb(firstName, lastName);
}

//the callback function

getName(function typeName(firstName, lastName) {
  console.log(`${firstName} ${lastName}`);
});
