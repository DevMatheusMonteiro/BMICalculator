// Pegando elemento da DOM
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");
const calculateButton = document.querySelector("#calculateButton");
const BMIResult = document.querySelector(".BMIResult");
const closeButton = document.querySelector("#close");
const error = document.querySelector(".error");
// Criando variáveis auxiliares
let weight = inputWeight.value;
let height = inputHeight.value;
let BMI;

//Adicionando eventos
calculateButton.addEventListener("click", handleClickCalculateBMI);
closeButton.addEventListener("click", handleClickClose);
document.addEventListener("keydown", keydownEscape);

//Funções auxiliares
function calculateBMI() {
  BMI = Number(weight) / Number(height) ** 2;
  let formatBMI = BMI.toFixed(2).replace(".", ",");

  if (BMI < 18.5) {
    return `Seu IMC é ${formatBMI}<br><span style="font-size: 1.6rem">Abaixo do peso normal<span>`;
  } else if (BMI >= 18.5 && BMI < 25.0) {
    return `Seu IMC é ${formatBMI}<br><span style="font-size: 1.6rem">Peso normal</span>`;
  } else if (BMI >= 25.0 && BMI < 30.0) {
    return `Seu IMC é ${formatBMI}<br><span style="font-size: 1.6rem">Excesso de peso</span>`;
  } else if (BMI >= 30.0 && BMI < 35.0) {
    return `Seu IMC é ${formatBMI}<br><span style="font-size: 1.6rem">Obesidade classe I</span>`;
  } else if (BMI >= 35.0 && BMI < 40.0) {
    return `Seu IMC é ${formatBMI}<br><span style="font-size: 1.6rem">Obesidade classe II</span>`;
  } else {
    return `Seu IMC é ${formatBMI}<br><span style="font-size: 1.6rem">Obesidade classe III</span>`;
  }
}

function formatWeightAndHeight() {
  weight = inputWeight.value.replace(",", ".");
  height = inputHeight.value.replace(",", ".");
  console.log(inputHeight.value + " " + inputWeight.value);
}

function animateError() {
  if (!error.classList.contains("hide")) {
    error.animate(
      [{ transform: "translateY(-100%)" }, { transform: "translateY(0%)" }],
      {
        duration: 1000,
        easing: "ease-in",
      }
    );
  } else {
    error.classList.toggle("hide");
  }
}

function changeDisabled() {
  if (
    inputHeight.disabled == true &&
    inputWeight.disabled == true &&
    calculateButton.disabled == true
  ) {
    inputHeight.disabled = false;
    inputWeight.disabled = false;
    calculateButton.disabled = false;
  } else {
    inputHeight.disabled = true;
    inputWeight.disabled = true;
    calculateButton.disabled = true;
  }
}

// Funções callback
function keydownEscape(e) {
  if (e.key == "Escape" && !BMIResult.classList.contains("hide")) {
    handleClickClose();
  }
}

function handleClickCalculateBMI(e) {
  e.preventDefault();
  formatWeightAndHeight();

  if (isNaN(Number(weight)) || isNaN(Number(height))) {
    animateError();

    error.innerHTML = "<p>Digite somente números</p>";
  } else if (inputHeight.value == "" || inputWeight.value == "") {
    animateError();

    error.innerHTML = "<p>Preencha todos os campos</p>";
  } else if (inputHeight.value <= 0 || inputWeight.value < 0) {
    if (inputHeight.value <= 0 && inputWeight.value < 0) {
      animateError();

      error.innerHTML =
        "<p>Peso não deve ser menor que 0 e altura não deve ser menor ou igual a 0</p>";
    } else if (inputHeight.value <= 0) {
      animateError();

      error.innerHTML = "<p>Altura não deve ser menor ou igual a 0</p>";
    } else {
      animateError();

      error.innerHTML = "<p>Peso não deve ser menor que 0</p>";
    }
  } else {
    changeDisabled();

    if (!error.classList.contains("hide")) {
      error.classList.add("hide");
    }
    BMIResult.classList.toggle("hide");
    BMIResult.querySelector("h2").innerHTML = calculateBMI();
  }
  inputHeight.value = "";
  inputWeight.value = "";
}

function handleClickClose() {
  changeDisabled();
  BMIResult.classList.toggle("hide");
}
