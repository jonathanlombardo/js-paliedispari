const runButton = document.querySelector("#run-button");
const choiseWrapper = document.querySelector("#choise-wrapper");
const numberWrapper = document.querySelector("#number-wrapper");
const resultEl = document.querySelector("#js_result");

document.addEventListener("click", function () {
  const element = event.target;

  if (element.className.includes("btn")) {
    setActiveBtn(element);
  }
});

runButton.addEventListener("click", function () {
  const activeChoiseEl = document.querySelector(".btn-primary");
  const activeNumberChoiseEl = document.querySelector(".btn-success");

  unSetInvalidField(choiseWrapper);
  unSetInvalidField(numberWrapper);

  if (!activeChoiseEl) {
    setInvalidField(choiseWrapper);
    resultEl.innerText = `Seleziona "Pari" oppure "Dispari!"`;
    return;
  } else if (!numberWrapper) {
    setInvalidField(numberWrapper);
    resultEl.innerText = `Seleziona un numero!`;
    return;
  }

  const userChoise = activeChoiseEl.innerText.toLowerCase();
  const userNumber = parseInt(activeNumberChoiseEl.innerText);
  const cpuNumber = getRandomNumber(5);
  let msg = `CPU: ${cpuNumber}<br/>La somma è: ${userNumber + cpuNumber}<br/>`;

  if (userChoise == "pari") {
    msg += isEven(userNumber + cpuNumber) ? "Hai Vinto!" : "Hai perso, babbo!";
  } else {
    msg += isOdd(userNumber + cpuNumber) ? "Hai Vinto!" : "Hai perso, babbo!";
  }

  resultEl.innerHTML = msg;
});
