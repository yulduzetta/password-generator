// Assignment code here
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialChars = `!"#$%&'()*+,-./:;<=>?@[\]^_\`{|}~`;

// Set password length
function setPasswordLength() {
  const regex = /^\d+$/;
  const min = 8;
  const max = 128;

  var passwordLength = 0;

  var userInput = prompt(
    `Choose how long should your password be between ${min}-${max} or press 'OK' to default to a random password length`
  );

  if (userInput === null || typeof userInput === "undefined") {
    alert("Sorry to see you go!");
    return;
  } else if (userInput === "") {
    passwordLength = Math.floor(
      Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + min
    );
    alert(
      `Your password length has been set to random number: ${passwordLength}`
    );
    return passwordLength;
  } else {
    if (userInput.match(regex)) {
      userInput = parseInt(userInput);
      if (userInput < min || userInput > max) {
        alert(
          `The provided length of ${userInput} is not within the expected range ${min}-${max}. Let's try again!`
        );
        return setPasswordLength();
      } else {
        passwordLength = userInput;
        return passwordLength;
      }
    } else {
      alert(
        `The provided input "${userInput}" does not meet the criteria: ${min}-${max}. Let's try again!`
      );
      return setPasswordLength();
    }
  }
}
// Set password rules based on user preferences.
function setPasswordRules() {
  var userInput;
  var passwordRules = [];

  userInput = confirm("Should password contain LOWERCASE letters?");
  if (userInput) {
    passwordRules.push(lowerCaseLetters);
  }
  userInput = confirm("Should password contain UPPERCASE letters?");
  if (userInput) {
    passwordRules.push(upperCaseLetters);
  }
  userInput = confirm("Should password contain NUMBERS?");
  if (userInput) {
    passwordRules.push(numbers);
  }
  userInput = confirm("Should password contain SPECIAL CHARACTERS?");
  if (userInput) {
    passwordRules.push(specialChars);
  }
  if (passwordRules.length === 0) {
    alert(
      "At least one rule needs to be applied, please try again from the beginning"
    );
    return;
  }
  return passwordRules;
}
// Generate random password based on the criteria defined by a user
function generatePassword(passwordLength, passwordRules) {
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomRuleIndex = Math.floor(Math.random() * passwordRules.length);
    password += passwordRules[randomRuleIndex].charAt(
      Math.floor(Math.random() * passwordRules[randomRuleIndex].length)
    );
  }
  return password;
}
// Write generated password to the #password input
function writePassword() {
  var passwordLength;
  var passwordRules = [];
  var passwordTextInputField = document.querySelector("#password");

  alert("Welcome! Let's generate your password!");
  passwordLength = setPasswordLength();
  console.log(passwordLength);

  if (passwordLength === 0 || typeof passwordLength === "undefined") {
    return;
  } else {
    passwordRules = setPasswordRules();
    var password = generatePassword(passwordLength, passwordRules);
    passwordTextInputField.value = password;
  }
}
// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
