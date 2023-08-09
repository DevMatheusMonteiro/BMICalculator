function calculateBMI(BMI) {
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

function messageError(AlertError, weight, height) {
  if (isNaN(Number(weight)) || isNaN(Number(height))) {
    AlertError.innerHTML = "<p>Digite somente números</p>";
    return true;
  } else if (height == "" || weight == "") {
    AlertError.innerHTML = "<p>Preencha todos os campos</p>";
    return true;
  } else if (height <= 0 || weight < 0) {
    if (height <= 0 && weight < 0) {
      AlertError.innerHTML =
        "<p>Peso não deve ser menor que 0 <br> Altura não deve ser menor ou igual a 0</p>";
    } else if (height <= 0) {
      AlertError.innerHTML = "<p>Altura não deve ser menor ou igual a 0</p>";
    } else {
      AlertError.innerHTML = "<p>Peso não deve ser menor que 0</p>";
    }
    return true;
  } else {
    return false;
  }
}

export { calculateBMI, messageError };
