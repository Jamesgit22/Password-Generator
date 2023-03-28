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
    let result = "";

    let passwordLength = prompt("How many characters would you like your password to be?");
    let passwordContent = "";

    if (passwordLength < 8) {
      alert("Please enter try again and enter a number that is 8 or greater.");
      return;

    } else {
      (confirm("Press ok if you would like your password to contain special characters. Press cancel to continue without special characters."));
        passwordContent = "!@#$%^&*()?";
    } 
    
    if (confirm("Press ok if you would like your password to contain number. Press cancel to continue without numbers.")) {
        passwordContent = `${passwordContent}${numChar}`;
        
    } 
    
    if (confirm("Press ok if you would like your password to contain Upper case letters. Press cancel to continue without Upper case letters.")) {
        passwordContent = `${passwordContent}${upperChar}`;
        
    } 
      
    if (confirm("Press ok if you would like your password to contain lower case letters. Press cancel to continue without lower case letters.")) {
      passwordContent = `${[passwordContent]}${lowerChar}`;
    }

    if (passwordContent == "") {
      alert("Please include a type of character selection for your new password and try again.");
      return;
    }

    for (i = 0; i < passwordContent.length; i++) {
      result += passwordContent.charAt(Math.floor(Math.random() * passwordLength));
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