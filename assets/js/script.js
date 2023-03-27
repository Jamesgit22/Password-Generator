// Assignment Code
var generateBtn = document.querySelector("#generate");

// I need to make a password generator that accepts passwords of a length of 8 character or more.
// It also needs to ask if the user would like to include special characters, numbers, upper and lower case numbers.
// It also needs to handle any erros like a password request that is less than 8 characters in length.


function generatePassword() {
    let allChar = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()?ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerChar = "abcdefghijklmnopqrstuvwxyz";
    let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numChar = "1234567890";

    let passwordLength = prompt("How many characters would you like your password to be?");
    let passwordContent = "";

    if (passwordLength < 8) {
      alert("Please enter try again and enter a number that is 8 or greater.");
      return;
      console.log(passwordLength);

    } else if (confirm("Press ok if you would like your password to contain special characters. Press cancel to continue without special characters.")) {
        passwordContent = "!@#$%^&*()?";
        console.log(passwordContent);
    
    } if (confirm("Press ok if you would like your password to contain number. Press cancel to continue without numbers.")) {
        passwordContent = `${passwordContent}${numChar}`;
        console.log(passwordContent);

    } //if (confirm("Press ok if you would like your password to contain number. Press cancel to continue without numbers.")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);