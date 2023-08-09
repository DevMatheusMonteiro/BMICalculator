import BMICalculator from "./main.js";

const BMIModal = {
  result: document.querySelector(".BMIResult"),
  message: document.querySelector(".BMIResult h2"),
  closeButton: document.querySelector("#close"),
  open() {
    this.result.classList.remove("hide");
  },
  close() {
    this.result.classList.add("hide");
  },
  handleClickClose() {
    BMIModal.close();
  },
  keydownEscape(e) {
    if (
      e.key == "Escape" &&
      BMIModal.result.classList.contains("hide") == false
    ) {
      BMIModal.handleClickClose();
      BMICalculator.changeDisabled();
    }
  },
};

BMIModal.closeButton.onclick = (e) => {
  BMICalculator.changeDisabled();
  BMIModal.handleClickClose();
};

window.addEventListener("keydown", BMIModal.keydownEscape);

export default BMIModal;
