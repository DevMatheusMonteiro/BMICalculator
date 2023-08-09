const AlertError = {
  error: document.querySelector(".error"),
  animateErrorOpen() {
    this.error.animate([{ transform: "translateY(0%)" }], {
      duration: 300,
      easing: "ease-in",
      fill: "forwards",
    });
  },
  animateErrorClose() {
    this.error.animate([{ transform: "translateY(-100%)" }], {
      duration: 300,
      easing: "ease-in",
      fill: "forwards",
    });
  },
};

export default AlertError;
