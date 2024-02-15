let pricingbox = document.querySelector("input[type='checkbox']");
let prices = document.querySelectorAll(".price");
if (pricingbox) {
  pricingbox.addEventListener("change", () => {
    if (pricingbox.checked) {
      prices[1].innerHTML =
        prices[1].innerHTML * 12 - prices[1].innerHTML * 12 * 0.25;
      prices[2].innerHTML =
        prices[2].innerHTML * 12 - prices[2].innerHTML * 12 * 0.25;
    } else {
      prices[1].innerHTML = 25;
      prices[2].innerHTML = 100;
    }
  });
}
