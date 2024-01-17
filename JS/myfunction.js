/**
 *
 * @param {number} stringLenght alphanumeric string lenght (default 10)
 * @returns {string | false} returns a random alphanumeric string (false in error)
 */
function getAlphaNumString(stringLenght = 10) {
  stringLenght = parseInt(stringLenght);
  let string = "";

  if (isNaN(stringLenght) || stringLenght <= 0) {
    console.error("param must be a number bigger than zero");
    return false;
  }

  for (i = 0; i < stringLenght; i++) {
    string += `${Math.random().toString(36).slice(2, 3)}`;
  }

  return string;
}

/**
 *
 * @param {number} max maximum number (default 10)
 * @param {number} min minimum number (default 1)
 * @returns {number | false} returns a random number between min and max (included)
 */
function getRandomNumber(max = 10, min = 1) {
  min = parseInt(min);
  max = parseInt(max);

  if (isNaN(min) || isNaN(max) || max < min) {
    console.error("params must be numbers and max must be equal or bigger than min");
    return false;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 *
 * @returns {string} returns a random letter from a to z
 */
function getRandomLetter() {
  return getRandomNumber(35, 10).toString(36);
}

/**
 *
 * @returns {boolean} returns true if number is even
 */
function isEven(number) {
  number = parseInt(number);

  if (isNaN(number)) {
    console.error("param must be a number");
    return NaN;
  }

  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

/**
 *
 * @returns {boolean} returns true if number is odd
 */
function isOdd(number) {
  number = parseInt(number);

  if (isNaN(number)) {
    console.error("param must be a number");
    return NaN;
  }

  if (number % 2 == 0) {
    return false;
  } else {
    return true;
  }
}