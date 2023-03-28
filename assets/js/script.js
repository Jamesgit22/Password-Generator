// Assignment Code
var generateBtn = document.querySelector("#generate");

// I need to make a password generator that accepts passwords of a length of 8 character or more.
// It also needs to ask if the user would like to include special characters, numbers, upper and lower case numbers.
// It also needs to handle any erros like a password request that is less than 8 characters in length.


function generatePassword() {
    let lowerChar = "abcdefghijklmnopqrstuvwxyz";
    let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numChar = "1234567890";
    let result = "";

    let passwordLength = prompt("How many characters would you like your password to be?");
    let passwordContent = "";

    if (passwordLength < 8 || passwordLength > 128) {
      alert("Please enter try again and enter a number 8 through 128");
      return(`Please try again.`);

    } else if (confirm("Press ok if you would like your password to contain special characters. Press cancel to continue without special characters.")) {
        passwordContent = "!@#$%^&*()?";
    } 
    
    if (confirm("Press ok if you would like your password to contain number. Press cancel to continue without numbers.")) {
        passwordContent = `${passwordContent}${numChar}`;      
    } 
    
    if (confirm("Press ok if you would like your password to contain Upper case letters. Press cancel to continue without Upper case letters.")) {
        passwordContent = `${passwordContent}${upperChar}`;
    } 
      
    if (confirm("Press ok if you would like your password to contain lower case letters. Press cancel to continue without lower case letters.")) {
      passwordContent = `${passwordContent}${lowerChar}`;
    }

    if (passwordContent == "") {
      alert("Please include a type of character selection for your new password and try again.");
      return(`Please try again.`);
    }

    for (i = 0; i <= passwordLength; i++) {
      result += passwordContent.charAt(Math.floor(Math.random() * passwordContent.length));
    }
   
    return(result);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);