// Assignment Code
let generateBtn = document.querySelector("#generate");
let stringLength;
let lowerCaseList = 'abcdefghijklmnopqrstuvwxyz';
let lowerCaseArr = lowerCaseList.split("");
let upperCaseList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let upperCaseArr = upperCaseList.split("");
let numbersList = '0123456789';
let numbersArr = numbersList.split("");
let specialChar = '!"#$%&()*+,-./:;<=>?@[^_`{|}~';
let specialCharArr = specialChar.split("");
let multiArr = [];
let passwordArr = [];
let passwordString;

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generates password and prompts how many characters the user wants
function generatePassword() {
  let numOfCharacters = prompt('How many characters do you want? (Must be between 8-128 characters)', '0');
  if (numOfCharacters < 8 || numOfCharacters > 128) {
      alert('Input must be between 8-128 characters');
  } else if (numOfCharacters >= 8 || numOfCharacters <= 128) {
      stringLength = parseInt(numOfCharacters)
      confirmLowerCase(stringLength);
      confirmUpperCase(stringLength);
      confirmNumeric(stringLength);
      confirmSpecial(stringLength);
  }
  passwordString = mixedArr();
  return passwordString;
}

// Creates prompts for criteria of password
function confirmLowerCase() {
  if (confirm('Do you want lowercase letters?')) {
      randomLowerCase(stringLength);
  } else {
      return;
  }
}

function confirmUpperCase() {
  if (confirm('Do you want uppercase letters?')) {
      randomUpperCase(stringLength);
  } else {
      return;
  }
}

function confirmNumeric() {
  if (confirm('Do you want numeric characters?')) {
      randomNumbers(stringLength);
  } else {
      return;
  }
}

function confirmSpecial() {
  if (confirm('Do you want special characters?')) {
      randomSpecial(stringLength);
  } else {
      return;
  }
}

// Creates array of random characters based on desired criteria
function randomLowerCase(stringLength) {
  let lowerCase;
  for (let i = 0; i < stringLength; i++) {
    lowerCase = lowerCaseArr[Math.floor(Math.random() * 26)];
    multiArr.push(lowerCase);
  }
}

function randomUpperCase(stringLength) {
  let upperCase;
  for (let i = 0; i < stringLength; i++) {
    upperCase = upperCaseArr[Math.floor(Math.random() * 26)];
    multiArr.push(upperCase);
  }
}

function randomNumbers(stringLength) {
  let numbers;
  for (let i = 0; i < stringLength; i++) {
    numbers = numbersArr[Math.floor(Math.random() * 10)];
    multiArr.push(numbers);
  }
}

function randomSpecial(stringLength) {
  let special;
  for (let i = 0; i < stringLength; i++) {
    special = specialCharArr[Math.floor(Math.random() * 29)];
    multiArr.push(special);
  }
}

// Creates password string using mixed array
function mixedArr() {
  let mixed;
  for (let i = 0; i < stringLength; i++) {
    mixed = multiArr[Math.floor(Math.random() * multiArr.length)];
    passwordArr.push(mixed);
  }
  return passwordArr.join('');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
