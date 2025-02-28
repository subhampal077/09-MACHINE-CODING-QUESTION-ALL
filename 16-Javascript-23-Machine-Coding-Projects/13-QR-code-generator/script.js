const qrContainer = document.querySelector(".qr-container");
const qrTextInput = document.querySelector("input");
const generateQRBtn = document.querySelector("button");
const errorText = document.querySelector(".error-text");

generateQRBtn.addEventListener("click", () => {
  validateInputText();
});

function validateInputText() {
  //   console.log(qrTextInput.value);
  if (qrTextInput.value.trim().length > 0) {
    generateQRCode();
  } else {
    errorText.textContent = "Enter text and use some URL to generate QR Code";
    setTimeout(() => {
      errorText.textContent = "";
    }, 3000);
  }
}

function generateQRCode() {
  qrContainer.innerHTML = "";

  new QRCode(qrContainer, {
    text: qrTextInput.value,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
  });

  qrTextInput.value = "";
}
