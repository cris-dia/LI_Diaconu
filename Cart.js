function getCart() {
    var cart = localStorage.getItem('cart');
    if (cart) {
      return JSON.parse(cart);
    } else {
      return [];
    }
  }
 
  function displayCartItems() {
    var cart = getCart();
    var cartItems = "";
    for (var i = 0; i < cart.length; i++) {
      var item = cart[i];
      cartItems += "<div class='cart-item'>" +
        "<div class='col-sm-3 col-md-2 item-image'><img src='" + item.image + "' class='img-fluid'></div>" +
        "<div class='col-sm-9 col-md-5 item-about'>" +
        "<h1 class='item-title'>" + item.name + "</h1>" +
        "<h3 class='item-subtitle'>Brand: " + item.brand + "</h3></div>" +
        "<div class='col-sm-6 col-md-2 item-counter'>" +
        "<div class='item-btn'>+</div>"+
        "<div class='item-count'>"+item.quantity+"</div>"+
        "<div class='item-btn'>-</div></div>"+
        "<div class='col-sm-6 col-md-3 item-prices'>" +
        "<div class='item-amount'>" + item.new_price + "$</div>" +
        "<div class='item-remove'><u>Remove</u></div></div>" +
        "</div>" +
        "</div>";
    }
    $("#cartItems").html(cartItems);
  }
  $(document).ready(function() {
    displayCartItems();
  });
    