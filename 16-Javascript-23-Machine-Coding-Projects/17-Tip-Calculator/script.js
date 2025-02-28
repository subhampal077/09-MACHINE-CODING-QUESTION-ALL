const billAmount = document.querySelector("#bill");
const discountPercent = document.querySelector("#discount");
const discountText = document.querySelector(".discount-value");
const tipPercent = document.querySelector("#tip");
const tipText = document.querySelector(".tip-value");
const totalCustomer = document.querySelector("#customers");
const customersText = document.querySelector(".customers-value");
const generateBill = document.querySelector(".generate-bill");
const totalTip = document.querySelector(".total-tip");
const totalAmount = document.querySelector(".total-amount");
const eachCustomer = document.querySelector(".each-customer");

function generateBillAmount() {
  discountText.innerText = discountPercent.value;
  tipText.innerText = tipPercent.value;
  customersText.textContent = totalCustomer.value;

  const billAmountAfterDiscount =
    +billAmount.value - (+billAmount.value * +discountPercent.value) / 100;

  const getTip = (billAmountAfterDiscount * +tipPercent.value) / 100;

  const getTotalBill = billAmountAfterDiscount + getTip;

  const eachOnePay = getTotalBill / +totalCustomer.value;

  totalTip.textContent = getTip;
  totalAmount.textContent = getTotalBill;
  eachCustomer.innerText = eachOnePay;
}

generateBill.addEventListener("click", generateBillAmount);
