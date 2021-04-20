// Make an array with numbers, letters, and special characters
// Have a prompt when generate is pressed to query the number of characters in the password
  // Attempt to make it so that a minimum of numbers and letters are used, and only a small amount of special characters
  // Have the prompt specify the range
// Use math.random to randomize the array to generate the password with the correct number of characters
// Have a "click to copy" text pop up only when a password has been generated
// Add CSS styling and a footer if there is time

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
