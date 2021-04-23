// Make an array with numbers, letters, and special characters
// Have a prompt when generate is pressed to query the number of characters in the password
//   Attempt to make it so that a minimum of numbers and letters are used, and only a small amount of special characters
//   Have the prompt specify the range
// Use math.random to randomize the array to generate the password with the correct number of characters
// Have a "click to copy" text pop up only when a password has been generated
// Add CSS styling and a footer if there is time

// Letter, Number, & Special Character Arrays
  var letterBank = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","t","u","v","w","x","y","z"];
  var numberBank = ["0","1","2","3","4","5","6","7","8","9"];
  var speCharBank = ["!","#","$","%","&","*","?","@","-","_"];
// Make a function for the user to specify how long and what kind of characters are to be used in the password
function passwordFeatures() {
  // Asking how many characters they want the password to be
  var characters = parseInt(prompt("How long would you like your password to be? The range is 8-48 characters."));
  // Conditional statements for inputting password length
  if (characters < 8) {
    alert("Please provide a larger number, password requires a minimum of 8 characters.");
    return;
  };
  if (characters > 48) {
    alert("Please provide a smaller number, password has a maximum output of 48 characters.");
    return;
  };
  if (isNaN(characters) === true) {
    alert("Please provide a numeral for the password generator to work correctly.");
  };
  // Variable boolean statements for types of characters used in the password
  var includeLetters = confirm("If you would like to include letters in your password, click OK.");
  var includeNumerals = confirm("If you would like to include numerals in your password, click OK.");
  var includeSpeChars = confirm("If you would like to include special characters in your password, click OK.");
  // Conditional statement if the user clicks cancel for all three
  if (includeLetters === false &&
      includeNumerals === false &&
      includeSpeChars === false) {
        alert("At least one type of character must be provided to generate a password.");
        return;
      };
  // Object to store inputs
  var inputs = {
    characters: characters, includeLetters: includeLetters, includeNumerals: includeNumerals, includeSpeChars: includeSpeChars
  };
  return inputs;
};
// Random element function to call later
function randomizer(bank) {
  var index = Math.floor(Math.random()*bank.length);
  var randomizedBank = bank[index];
  return randomizedBank;
};
//  Function creation & randomization of password once user has inputted data
function craftPassword() {
  var features = passwordFeatures();
  // Variable to store the password during concatenation
  var passwordText = [];
  // Variable to store a minimum amount of each character type the user inputted
  var minCharacters = [];
  // Variable to store the various types of characters the user inputted
  var typeCharacters = [];
  // Conditional statements that concatenate arrays and push random characters
  if (features.includeLetters) {
    minCharacters.push(randomizer(letterBank));
    typeCharacters = typeCharacters.concat(letterBank);
  }
  if (features.includeNumerals) {
    minCharacters.push(randomizer(numberBank));
    typeCharacters = typeCharacters.concat(numberBank);
  }
  if (features.includeSpeChars) {
    minCharacters.push(randomizer(speCharBank));
    typeCharacters = typeCharacters.concat(speCharBank);
  }
};
// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = craftPassword();
  var passwordText = document.querySelector("#password");

  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
