// Make an array with numbers, letters, and special characters
// Have a prompt when generate is pressed to query the number of characters in the password
//   Attempt to make it so that a minimum of numbers and letters are used, and only a small amount of special characters
//   Have the prompt specify the range
// Use math.random to randomize the array to generate the password with the correct number of characters
// Have a "click to copy" text pop up only when a password has been generated
// Add CSS styling and a footer if there is time

// Letter, Number, & Special Character Arrays
var letterBankUpperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var letterBankLowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numberBank = ["0","1","2","3","4","5","6","7","8","9"];
var speCharBank = ["!","#","$","%","&","*","?","@","-","_"];

// Random element function to call later
function randomizer(arr) {
  var index = Math.floor(Math.random() * arr.length);
  var randomizedBank = arr[index];
  return randomizedBank;
};

// Make a function for the user to specify how long and what kind of characters are to be used in the password
function passwordFeatures() {

  // Asking how many characters they want the password to be
  var length = prompt("How long would you like your password to be? 8-128 characters");
         
  // Conditional statements for inputting password length
  // Alert if they input something other than a number
  if (isNaN(length) === true) {
    alert("Please provide a number for the password generator to work correctly.");
    return;
  };
  if(length > 128 || length < 8){
    alert("Please provide a number between 8 and 128.");
    return false;
  }
  else {
    // Assign variables to the choices - make them boolean
    var includeUpperCaseLetters = confirm("If you would like to include uppercase letters in your password, click OK.");
    var includeLowerCaseLetters = confirm("If you would like to include lowercase letters in your password, click OK.");
    var includeNumerals = confirm("If you would like to include numbers in your password, click OK.");
    var includeSpeChars = confirm("If you would like to include special characters in your password, click OK.");
    // Conditional statement inception to make sure a character type is picked
    if(includeUpperCaseLetters === false && 
      includeLowerCaseLetters === false && 
      includeNumerals === false && 
      includeSpeChars === false) {
      alert("At least one type of character must be provided to generate a password.");
      return false;
    }
    else {
      // Create an object to store choices & return it
      var choices = {
        length: length,
        includeUpperCaseLetters: includeUpperCaseLetters,
        includeLowerCaseLetters: includeLowerCaseLetters,
        includeNumerals: includeNumerals,
        includeSpeChars: includeSpeChars
      }
    return choices;
    }
  }
};
//  Function creation & randomization of password once user has inputted data
function craftPassword() {

  // Call feature choices function for later use
  var features = passwordFeatures();
  // Variable to store the password during concatenation
  var passwordText = [];
  // Array to store the possible features the user selected
  var possibleCharacters = [];
  // Array to store a minimum amount of each character type the user inputted
  var minCharacters = [];

  // Conditional statements that concatenate the bank arrays with the empty character arrays and push random characters
  if (features.includeUpperCaseLetters) {
    possibleCharacters = possibleCharacters.concat(letterBankUpperCase);
    minCharacters.push(randomizer(letterBankUpperCase));
  };
  if (features.includeLowerCaseLetters) {
    possibleCharacters = possibleCharacters.concat(letterBankLowerCase);
    minCharacters.push(randomizer(letterBankLowerCase));
  };
  if (features.includeNumerals) {
    possibleCharacters = possibleCharacters.concat(numberBank);
    minCharacters.push(randomizer(numberBank));
  };
  if (features.includeSpeChars) {
    possibleCharacters = possibleCharacters.concat(speCharBank);
    minCharacters.push(randomizer(speCharBank));
  };

  // Iterate the length data minus minCharacters to get the correct length
  for (var i = 0; i < (features.length - minCharacters.length); i++) {
    passwordText.push(randomizer(possibleCharacters));
  };
  // Push the data into passwordText
  for (var i = 0; i < minCharacters.length; i++) {
    passwordText.push(minCharacters[i]);
  };
  return passwordText.join("");
};

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = craftPassword();
  var generatedPassword = document.querySelector("#password");

  generatedPassword.value = password;
}

// Add a button to click to copy the password once its created 
function copyFunction() {
  var copyPass = document.getElementById("password");

  copyPass.select();
  copyPass.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
