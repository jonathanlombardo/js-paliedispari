function isPalind(string) {
  const length = string.length;
  let result = true;

  for (let i = 0; i < length; i++) {
    if (string[i] != string[length - i - 1]) {
      result = false;
    }
  }

  return result;
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
