var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

var priceRange = document.getElementById("price");
var priceRangeValue = document.getElementById("priceRangeValue");
priceRange.addEventListener("input", function() {
  var price = priceRange.value;
  priceRangeValue.innerHTML = "Price:   $" + price;
  priceRange.setAttribute("title",price);
  priceRangeValue.style.color = "white";
});
// function hideLoginButton() {
//   const loginBtn = document.getElementById("login-btn");
//   loginBtn.style.display = "none";
// }

// if (loggedIn) {
//   hideLoginButton();
// }