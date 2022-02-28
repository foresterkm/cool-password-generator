//variables
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lower = 'abcdefjhijklmnopqrstuvwxyz'
var num = '0123456789'
// start with an empty character variable, add to it later
var char = ''
//generate a random password length between 8 & 128
var length = Math.floor((Math.random() * 17) + 8);
//do you want to include upper?
var promptUpper = window.prompt('Would you like your password to include UPPERCASE letters? Enter "yes" or "no"');
//do you want to include lower?
var promptLower = window.prompt('Would you like your password to include lowercase letters? Enter "yes" or "no"');
//do you want to include numbers?
var promptNumber = window.prompt('Would you like your password to include numbers? Enter "yes" or "no"');

//generate the password
var generatePassword = function () {

  promptUpper = promptUpper.toLowerCase();
  promptLower = promptLower.toLowerCase();
  promptNumber = promptNumber.toLowerCase();

  if ((promptUpper === 'yes') && (promptLower === 'yes') && (promptNumber === 'yes')) {
    ///how to add strings?
    char = upper.concat(lower,num)
  } else if ((promptUpper === 'yes') && (promptLower === 'yes')) {
    char = upper.concat(lower,num)
  } else if ((promptUpper === 'yes') && (promptNumber === 'yes')) {
    char = upper.concat(num)
  } else if ((promptLower === 'yes') && (promptNumber === 'yes')) {
    char = lower.concat(num)
  } else if (promptUpper === 'yes') {
    char = upper
  } else if (promptLower === 'yes') {
    char = lower
  } else if (promptNumber === 'yes') {
    var char = num
  }
  //what to do with it
  var pword = '';
  for (var i = 0; i < length; i++) {
    pword += char.charAt(Math.floor(Math.random() * length));
  }
  return pword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

generatePassword();