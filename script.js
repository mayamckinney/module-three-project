// Assignment code here

// creating arrays to use to generate passwords

var alphaLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "."];

// function to create the random password

function generatePassword() {

  // create variables so the user can decide how to customise their password

  var yesLowercase;
  var yesUppercase;
  var yesNumbers;
  var yesSpecialCharacters;
  var characterLength;

  // user will enter how long they want the password and variable will be stored
  // unfortunately, this will not stop the user from entering a non-integer value
  // function will not produce password if user does not enter integer value

  var characterLength = window.prompt("How many characters would you like your password to have?");

  // while loop in order to force the user to enter an amount between 8-128.
  // this loop will continue until the user enters a valid integer

  while (characterLength <= 7 || characterLength >= 129) {
    window.alert("Your password must be between 8-128 characters.");
    var characterLength = window.prompt("How many characters would you like your password to have?");
  }

  // prompts user to decide how they want to customize password

  var yesLowercase = window.confirm("Click 'OK' if you would like your password to contain lowercase letters.");
  var yesUppercase = window.confirm("Click 'OK' if you would like your password to contain uppercase letters.");
  var yesNumbers = window.confirm("Click 'OK' if you would like your password to contain numbers.");
  var yesSpecialCharacters = window.confirm("Click 'OK' if you would like your password to contain special characters.");

  // if the user clicks cancel on all all options, this loop will tell them they need to pick yes to one and will continue until the user does so

  while ((yesLowercase === false && yesUppercase === false && yesNumbers === false && yesSpecialCharacters === false)) {
    window.alert("You must agree to at least one option!");
    var yesLowercase = window.confirm("Click 'OK' if you would like your password to contain lowercase letters.");
    var yesUppercase = window.confirm("Click 'OK' if you would like your password to contain uppercase letters.");
    var yesNumbers = window.confirm("Click 'OK' if you would like your password to contain numbers.");
    var yesSpecialCharacters = window.confirm("Click 'OK' if you would like your password to contain special characters.");
  }

  // creates a blank array to store password

  var userPassword = [];

  // based on the options selected to customize password, this will add the original arrays to the blank one created

  if (yesLowercase) {
    userPassword = userPassword.concat(alphaLowercase);
  }

  if (yesUppercase) {
    userPassword = userPassword.concat(alphaUppercase);
  }

  if (yesNumbers) {
    userPassword = userPassword.concat(numbers);
  }

  if (yesSpecialCharacters) {
    userPassword = userPassword.concat(specialCharacters);
  }

  // creates blank string value to store the random password

  var randomPassword = "";

  // based on how long the user selected the password to be, for loop will run to randomize the contents of the string value
  // this provides a different password everytime with different values

  for (var i = 0; i < characterLength; i++) {
    randomPassword = randomPassword + userPassword[Math.floor(Math.random() * userPassword.length)];
  }

  // spits out the string value

  return randomPassword;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
