let inputWeight = document.querySelector("#weight");
let inputHeight = document.querySelector("#height");
let weight = inputWeight.value;
let height = inputHeight.value;
let BMI;
const calculateButton = document.querySelector("#calculateButton");

const BMIResult = document.querySelector(".BMIResult");
const closeButton = document.querySelector("#close");

const error = document.querySelector(".error");

calculateButton.addEventListener("click", handleClickCalculateBMI);

closeButton.addEventListener("click", handleClickClose);

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape" && !BMIResult.classList.contains("hide")) {
    handleClickClose();
  }
});

function calculateBMI() {
  BMI = Number(weight) / Number(height) ** 2;
  let formatBMI = BMI.toFixed(2).replace(".", ",");

  if (BMI < 18.5) {
    return `Seu IMC é ${formatBMI}\nAbaixo do peso normal`;
  } else if (BMI >= 18.5 && BMI < 25.0) {
    return `Seu IMC é ${formatBMI}\nPeso normal`;
  } else if (BMI >= 25.0 && BMI < 30.0) {
    return `Seu IMC é ${formatBMI}\nExcesso de peso`;
  } else if (BMI >= 30.0 && BMI < 35.0) {
    return `Seu IMC é ${formatBMI}\nObesidade classe I`;
  } else if (BMI >= 35.0 && BMI < 40.0) {
    return `Seu IMC é ${formatBMI}\nObesidade classe II`;
  } else {
    return `Seu IMC é ${formatBMI}\nObesidade classe III`;
  }
}

function formatWeightAndHeight() {
  weight = inputWeight.value.replace(",", ".");
  height = inputHeight.value.replace(",", ".");
}

function handleClickCalculateBMI(e) {
  e.preventDefault();
  formatWeightAndHeight();

  if (isNaN(Number(weight)) || isNaN(Number(height))) {
    if (!error.classList.contains("hide")) {
      error.animate(
        [{ transform: "translateY(-100%)" }, { transform: "translateY(0%)" }],
        {
          duration: 1000,
        }
      );
    }

    error.classList.remove("hide");

    error.innerHTML = "<p>Digite somente números</p>";
  } else if (inputHeight.value == "" || inputWeight.value == "") {
    if (!error.classList.contains("hide")) {
      error.animate(
        [{ transform: "translateY(-100%)" }, { transform: "translateY(0%)" }],
        {
          duration: 1000,
        }
      );
    }

    error.classList.remove("hide");
    error.innerHTML = "<p>Preencha todos os campos</p>";
  } else if (inputHeight.value <= 0 || inputWeight.value < 0) {
    if (inputHeight.value <= 0) {
      if (!error.classList.contains("hide")) {
        error.animate(
          [{ transform: "translateY(-100%)" }, { transform: "translateY(0%)" }],
          {
            duration: 1000,
          }
        );
      }

      error.classList.remove("hide");
      error.innerHTML = "<p>Altura não deve ser menor ou igual a 0</p>";
    } else {
      if (!error.classList.contains("hide")) {
        error.animate(
          [{ transform: "translateY(-100%)" }, { transform: "translateY(0%)" }],
          {
            duration: 1000,
          }
        );
      }

      error.classList.remove("hide");
      error.innerHTML = "<p>Peso não deve ser menor que 0</p>";
    }
  } else {
    error.style.visibility = "hidden";
    BMIResult.classList.remove("hide");

    BMIResult.querySelector("h2").innerText = calculateBMI();
  }
  inputHeight.value = "";
  inputWeight.value = "";
}

function handleClickClose() {
  error.classList.add("hide");
  BMIResult.classList.add("hide");
  inputHeight.value = "";
  inputWeight.value = "";
  error.style.visibility = "visible";
}
