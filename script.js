let input = document.querySelector("#inpBox");
let btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerHTML;
    handleInput(value);
  });
});

document.addEventListener("keydown", (e) => {
  const key = e.key;
  switch (key) {
    case "Enter":
      handleInput("=");
      break;
    case "Backspace":
      handleInput("Del");
      break;
    case "Escape":
      handleInput("AC");
      break;
    case "%":
    case "/":
    case "*":
    case "-":
    case "+":
      handleInput(key);
      break;
    case ".":
      handleInput(".");
      break;
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      handleInput(key);
      break;
  }
});

function handleInput(value) {
  switch (value) {
    case "=":
      evaluateExpression();
      break;
    case "AC":
      clearInput();
      break;
    case "Del":
      deleteLastCharacter();
      break;
    default:
      input.value += value;
  }
}

function evaluateExpression() {
  try {
    let result = eval(input.value);
    input.value = result;
  } catch {
    input.value = "Error";
  }
}

function clearInput() {
  input.value = "";
}

function deleteLastCharacter() {
  input.value = input.value.slice(0, -1);
}
