// Assignment Code
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// Add variables
let password = [];
let charset = {
  lowerCase: [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ],
  upperCase: [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ],
  numerical: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  specialCharacters: [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.',
  ]
};

//Add function//
function generatePassword() {
  //Reset//
  password = [];
  //Convert string into number
  input = Number(
    prompt("How many characters are in your password? (8-128 characters)")
  );
  if (!input) {
    alert("Please try again and specify your password length.");
  } else if (input < 8 || input > 128) {
    alert("Your password isn't quiiiite the right length.")
  } else {
    hasLowerCase = confirm("Would you like lowercase letters?");
    hasUpperCase = confirm("Would you like uppercase letters?");
    hasNumerical = confirm("Would you like numbers?");
    hasSpecialCharacters = confirm("Would you like special characters?")
    // Has 4 positives //
    if (hasLowerCase && hasUpperCase && hasNumerical && hasSpecialCharacters) {
      choices = charset.lowerCase.concat(
        charset.upperCase,
        charset.numerical,
        charset.specialCharacters
      );
    } // Has 3 positives & 1 negative //
    else if (
      hasLowerCase &&
      hasUpperCase &&
      hasNumerical &&
      !hasSpecialCharacters) {
      choices = charset.lowerCase.concat(
        charset.upperCase,
        charset.numerical
      );
    } else if (
      hasLowerCase &&
      hasUpperCase &&
      !hasNumerical &&
      hasSpecialCharacters) {
      choices = charset.lowerCase.concat(
        charset.upperCase,
        charset.specialCharacters
      );
    } else if (
      hasLowerCase &&
      !hasUpperCase &&
      hasNumerical &&
      hasSpecialCharacters) {
      choices = charset.lowerCase.concat(
        charset.numerical,
        charset.specialCharacters
      );
    } else if (
      !hasLowerCase &&
      hasUpperCase &&
      hasNumerical &&
      hasSpecialCharacters) {
      choices = charset.upperCase.concat(
        charset.numerical,
        charset.specialCharacters
      );
    } // Has 2 positives & 2 negatives // 
    else if (
      hasLowerCase &&
      hasUpperCase &&
      !hasNumerical &&
      !hasSpecialCharacters) {
      choices = charset.lowerCase.concat(charset.upperCase);
    } else if (
      hasLowerCase &&
      !hasUpperCase &&
      hasNumerical &&
      !hasSpecialCharacters) {
      choices = charset.lowerCase.concat(charset.numerical);
    } else if (
      !hasLowerCase &&
      hasUpperCase &&
      hasNumerical &&
      !hasSpecialCharacters) {
      choices = charset.upperCase.concat(charset.numerical);
    } else if (
      !hasLowerCase &&
      !hasUpperCase &&
      hasNumerical &&
      hasSpecialCharacters) {
      choices = charset.numerical.concat(charset.specialCharacters);
    } else if (
      !hasLowerCase &&
      hasUpperCase &&
      !hasNumerical &&
      hasSpecialCharacters) {
      choices = charset.upperCase.concat(charset.specialCharacters);
    } else if (
      hasLowerCase &&
      !hasUpperCase &&
      !hasNumerical &&
      hasSpecialCharacters) {
      choices = charset.lowerCase.concat(charset.specialCharacters);
    }
    // Has 1 positive & 3 negatives //
    else if (
      hasLowerCase &&
      !hasUpperCase &&
      !hasNumerical &&
      !hasSpecialCharacters) {
      choices = charset.lowerCase
    } else if (
      !hasLowerCase &&
      !hasUpperCase &&
      !hasNumerical &&
      hasSpecialCharacters) {
      choices = charset.specialCharacters
    } else if (
      !hasLowerCase &&
      !hasUpperCase &&
      hasNumerical &&
      !hasSpecialCharacters) {
      choices = charset.numerical
    }
    else if (
      !hasLowerCase &&
      hasUpperCase &&
      !hasNumerical &&
      !hasSpecialCharacters) {
      choices = charset.upperCase
    }
    // Has 4 negatives //
    else if (
      !hasLowerCase &&
      !hasUpperCase &&
      !hasNumerical &&
      !hasSpecialCharacters)
      alert("Your password needs some work. Choose a criteria to start.")
  }

  //Create "for" loop to repeatedly push random password 
  for (let i = 0; i < input; i++) {
    let finalChoice = choices[Math.floor(Math.random() * choices.length)];
    password.push(finalChoice);
  }

  //Convert to String
  let passwordString = password.join("");
  document.querySelector("#password").textContent = passwordString;

}