// selecting HTML element
const primaryScreen = document.querySelector(".primary-screen");
const secondaryScreen = document.querySelector(".secondary-screen");
const numKeys = document.querySelectorAll(".num-key");
const operatorKeys = document.querySelectorAll(".operator-key");
const clearKey = document.querySelector(".clear-key");
const ansKey = document.querySelector(".ans-key");
const delKey = document.querySelector(".del-key");
let numClicked = true;
// adding event on clearKey
clearKey.addEventListener("click", () => {
  primaryScreen.innerHTML = 0;
  secondaryScreen.innerHTML = "";
  numClicked = true;
});
// adding event on delKey
delKey.addEventListener("click", () => {
  let delCharacter = primaryScreen.innerHTML.slice(0, -1);
  primaryScreen.innerHTML = delCharacter;
});
ansKey.addEventListener("click", () => {
  let valueForCalacution = primaryScreen.innerHTML;
  let lastchar = valueForCalacution[valueForCalacution.length - 1];
  if (
    lastchar == "+" ||
    lastchar == "-" ||
    lastchar == "*" ||
    lastchar == "/"
  ) {
    valueForCalacution = valueForCalacution;
  } else {
    secondaryScreen.innerHTML = eval(valueForCalacution);
    primaryScreen.innerHTML = 0;
    numClicked = true;
  }
});
// adding event on numKeys
numKeys.forEach((numkey) => {
  numkey.addEventListener("click", (e) => {
    if (numClicked === true) {
      let num = e.target.textContent;
      Number((primaryScreen.innerHTML = num));
      numClicked = false;
    } else {
      let num = e.target.textContent;
      let dot = primaryScreen.innerHTML.includes(".");
      if (dot) {
        if (num == ".") {
          Number((primaryScreen.innerHTML = primaryScreen.innerHTML));
        } else {
          Number((primaryScreen.innerHTML = primaryScreen.innerHTML + num));
        }
      } else {
        Number((primaryScreen.innerHTML = primaryScreen.innerHTML + num));
      }
    }
  });
});
// adding event on operatorKeys
operatorKeys.forEach((operatorkey) => {
  operatorkey.addEventListener("click", (e) => {
    let operator = e.target.innerHTML;
    let value = primaryScreen.innerHTML.slice(
      primaryScreen.innerHTML.length - 1
    );
    if (value.includes(operator)) {
      return;
    } else {
      Number((primaryScreen.innerHTML = primaryScreen.innerHTML + operator));
    }
  });
});
