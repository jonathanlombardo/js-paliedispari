function isPalind(string) {
  string = string.toLowerCase().trim();
  const length = string.length;

  for (let i = 0; i < length / 2; i++) {
    if (string[i] != string[length - i - 1]) {
      return false;
    }
  }

  return true;
}

const runButton = document.querySelector(".btn");
const input = document.querySelector("#palInput");
const resultEl = document.querySelector("#js_result");

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    runButton.click();
  }
});

runButton.addEventListener("click", function () {
  if (isPalind(input.value)) {
    resultEl.innerText = "Hai inserito un palindromo";
  } else {
    resultEl.innerText = "Non hai inserito un palindromo";
  }
});
