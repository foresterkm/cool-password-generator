// Assignment code here
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lower = 'abcdefjhijklmnopqrstuvwxyz'
var num = '0123456789'
var char = ''
//generate a random password length
var length = Math.floor((Math.random() * 17) + 8);
var promptUpper = window.prompt('Would you like your password to include UPPERCASE letters? Enter "yes" or "no"');



var generatePassword = function () {
  //ask user if they'd like to include uppercase
  var promptUpper = window.prompt('Would you like your password to include UPPERCASE letters? Enter "yes" or "no"');

  promptUpper = promptUpper.toLowerCase();

  //if yes, add uppercase letters to char variable
  if (promptUpper === 'yes') {
    char = char + upper;
  } else if (promptUpper === 'no') {
    //if not, don't add uppercase letters
    char = char
  } 
  //anything other than yes or no, return error
  else {
    window.alert("You did not make a valid selection.")
  }
  return selector();
};


  // var promptLower = window.prompt('Would you like your password to include lowercase letters? Enter "yes" or "no"');
  // switch(promptLower.toLowerCase()) {
  //   case 'yes':
  //     char = char + lower
  //     break;
  //   case 'no':
  //     console.log(false);
  //   break;
  //   default:
  //     console.error("You did not make a valid selection.")
  //     return promptLower();
  // }
  // var promptNumber = window.prompt('Would you like your password to include numbers? Enter "yes" or "no"');
  // switch(promptNumber.toLowerCase()) {
  //   case 'yes':
  //     char = char + num
  //     break;
  //   case 'no':
  //     console.log(false);
  //   break;
  //   default:
  //     console.error("You did not make a valid selection.")
  //     return promptNumber();
  // }
  // var lenString = window.prompt("How many characters should your password be? Enter number between 8 and 28");
  // const len = Number.parseInt(lenString);
  // switch(len) {
  //   case 'yes':
  //     char = char + num
  //     break;
  //   case 'no':
  //     console.log(false);
  //   break;
  //   default:
  //     alert("You did not make a valid selection.")
  //     return promptNumber();
  // }

//   if ((useUpper) && (useLower) && (useNum)) {
//       var char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//   } else if ((useUpper) && (useLower)) {
//     var char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
//   } else if ((useUpper) && (useNum)) {
//     var char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
//   } else if ((useLower) && (useNum)) {
//     var char = 'abcdefghijklmnopqrstuvwxyz0123456789'
//   } else if (useUpper) {
//     var char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//   } else if (useLower) {
//     var char = 'abcdefghijklmnopqrstuvwxyz'
//   } else if (useNum) {
//       var char = '0123456789'
//   } else {window.alert('You need to provide a valid answer! Please try again.');
//   return promptNum();
//   };

// // var generatePassword = function () {
// //   for (var I=0; i<password_length; i++) {
// //       var rnum = Math.floor(Math.random() * char.length);
// //       randomstring += char.substring(rnum,rnum+1);
// //   };
// // };

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

selector();