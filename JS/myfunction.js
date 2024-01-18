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
 * @param {number} number number to check
 * @returns {boolean} returns true if number is even
 */
function isEven(number) {
  number = parseInt(number);

  if (isNaN(number)) {
    console.error("param must be a number");
    return NaN;
  }

  return number % 2 == 0;
}

/**
 *
 * @param {number} number number to check
 * @returns {boolean} returns true if number is odd
 */
function isOdd(number) {
  number = parseInt(number);

  if (isNaN(number)) {
    console.error("param must be a number");
    return NaN;
  }

  return !(number % 2 == 0);
}

function setInvalidField(element) {
  element.classList.add("border", "border-danger");
}

function unSetInvalidField(element) {
  element.classList.remove("border", "border-danger");
}

function setActiveBtn(element) {
  if (element.className.includes("primary")) {
    const activeChoiseEl = document.querySelector(".btn-primary");

    if (activeChoiseEl) {
      activeChoiseEl.classList.remove("btn-primary");
      activeChoiseEl.classList.add("btn-outline-primary");
    }

    element.classList.remove("btn-outline-primary");
    element.classList.add("btn-primary");
  } else if (element.className.includes("success")) {
    const activeNumberChoiseEl = document.querySelector(".btn-success");

    if (activeNumberChoiseEl) {
      activeNumberChoiseEl.classList.remove("btn-success");
      activeNumberChoiseEl.classList.add("btn-outline-success");
    }

    element.classList.remove("btn-outline-success");
    element.classList.add("btn-success");
  }
}
