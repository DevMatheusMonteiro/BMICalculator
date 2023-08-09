import BMIModal from "./BMIModal.js";
import AlertError from "./alertError.js";
import { calculateBMI, messageError } from "./utils.js";

const BMICalculator = {
  form: document.querySelector("form"),
  inputWeight: document.querySelector("#weight"),
  inputHeight: document.querySelector("#height"),
  calculateButton: document.querySelector("#calculateButton"),
  changeDisabled() {
    if (
      this.inputHeight.disabled == true &&
      this.inputWeight.disabled == true &&
      this.calculateButton.disabled == true
    ) {
      this.inputHeight.disabled = false;
      this.inputWeight.disabled = false;
      this.calculateButton.disabled = false;
    } else {
      this.inputHeight.disabled = true;
      this.inputWeight.disabled = true;
      this.calculateButton.disabled = true;
    }
  },
  handleClickCalculateBMI(e) {
    e.preventDefault();

    let weight = BMICalculator.inputWeight.value.replace(",", ".");
    let height = BMICalculator.inputHeight.value.replace(",", ".");
    let BMI = Number(weight) / Number(height) ** 2;

    if (messageError(AlertError.error, weight, height)) {
      AlertError.animateErrorOpen();
    } else {
      AlertError.animateErrorClose();
      BMICalculator.changeDisabled();
      BMIModal.open();
      BMIModal.message.innerHTML = calculateBMI(BMI);
    }

    BMICalculator.inputHeight.value = "";
    BMICalculator.inputWeight.value = "";
  },
};

BMICalculator.form.onsubmit = BMICalculator.handleClickCalculateBMI;

BMICalculator.inputHeight.oninput = () => AlertError.animateErrorClose();

BMICalculator.inputWeight.oninput = () => AlertError.animateErrorClose();

export default BMICalculator;
