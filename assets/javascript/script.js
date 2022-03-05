//global variables
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var special = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '}', '|', '~']

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//generate password function
var generatePassword = function () {
  //length prompt
  var promptLength = window.prompt('How long would you like your password to be? Please select a number between 8 and 128.')
  //if statement to handle non-valid length answers
  if (promptLength < 8 || promptLength > 128) {
    window.alert('You did not select a valid length. Please try again.');
    return;
  };
  //do you want to include upper?
  var confirmUpper = window.confirm('Would you like your password to include UPPERCASE letters? Click "OK" for "yes" or "cancel" for "no".');
  //do you want to include lower?
  var confirmLower = window.confirm('Would you like your password to include lowercase letters? Click "OK" for "yes" or "cancel" for "no".');
  //do you want to include numbers?
  var confirmNumber = window.confirm('Would you like your password to include numbers? Click "OK" for "yes" or "cancel" for "no".');
  //do you want to include special characters?
  var confirmSpecial = window.confirm('Would you like your password to include special characters? Click "OK" for "yes" or "cancel" for "no".');

  //create a variable to contain all possible characters
  var char = []

  //handle answers;add to char array
  if (confirmUpper) {
    //use array.concat to push uppercase characters into the char variable
    char = char.concat(upper)
  };
  if (confirmLower) {
    //use array.concat to push lowercase characters into the char variable
    char = char.concat(lower)
  };
  if (confirmNumber) {
    //use array.concat to push number characters into the char variable
    char = char.concat(num)
  };
  if (confirmSpecial) {
    //use array.concat to push special characters into the char variable
    char = char.concat(special)
  };

  //what to do with it
  var pword = [];
  for (var i = 0; i < promptLength; i++) {
    //loop over the char array and grab a random character and push it into the pword array
    var randomEl = char[Math.floor(Math.random() * char.length)];
    //push randomy generated characters into pword array
    pword.push(randomEl);
  }
  //turn pword into a string
  return pword.join('');
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);