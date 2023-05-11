  var cart = [];
$(document).ready(function() {
  // Fetch products data from JSON file
  $.getJSON("products.json", function(data) {
    // Display all products on page load
    displayProducts(data.products);

    // Add event listener to filter button
    $("#filterBtn").click(function() {
      // Get filter criteria
      var category = $("#category").val();
      var brand = $("#brand").val();
      var price = $("#price").val();
      var discounts = $("#mySwitch").is(":checked");

      console.log("category: " + category);
      console.log("brand: " + brand);
      console.log("price: " + price);
      console.log("discounts: " + discounts);
      // Filter products based on criteria
      var filteredProducts = data.products.filter(function(product) {
        var passCategory = (category === "") || (product.category.toLowerCase() === category.toLowerCase());
        var passBrand = (brand === "") || (product.brand.toLowerCase() === brand.toLowerCase());
        var passPrice = (price === "") || (Number(product.new_price) < parseInt(price));
        var passDiscount = (!discounts) || (product.discount_val > 0);
        return passCategory && passBrand && passPrice && passDiscount;
      });
      console.log(filteredProducts);
      // Display the filtered products
      displayProducts(filteredProducts);
    });

    $(document).on("click", ".add_to_cart", function(e) {
      e.preventDefault();
      // Get product ID and type
      var productId = $(this).data("id");
      var product = getProductById(productId,data);
      // Add product to cart
      addToCart(product);
    });
  });
});
// Get product from JSON data by id
function getProductById(productId,data) {
  var products = data.products;
  for (var i = 0; i < products.length; i++) {
    if (products[i].key === productId) {
      return products[i];
    }
  }
  return null;
}
// Function to add product to cart
function addToCart(product) {
  // Check if product already exists in cart
  var alreadyInCart = false;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].key === product.key) {
      alreadyInCart = true;
      cart[i].quantity++;
      break;
    }
  }

  // If product is not already in cart, add it with quantity of 1
  if (!alreadyInCart) {
    product.quantity = 1;
    cart.push(product);
  } else{
    var newCartItem = Object.assign({},product);
    newCartItem.quantity=1;
    cart.push(newCartItem);
  }
  $("#cartCount").text(cart.length);
  // Save cart to local storage
  saveCart();
  // Display success message to user
  alert(product.name + " added to cart.");
}

// Function to save cart to local storage
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}
function displayProducts(products) {
  
    // Initialize empty product list
    var productCards = [];
    // Iterate through each product
    $.each(products, function(key,product) {
      // Create product card HTML
      
      var card = '<div class="col-sm-3 col-md-4 mt-2">';
      card += '<div class ="container">';
      card += '<div class="container product bg-dark rounded" >';
      card += '<div class="row">';
      card += '<div class="img-container d-flex justify-content-center mt-2">';
      card += '<img src="' + product.image + '" class="img-fluid">';
      card += '</div></div>';
      card += '<div class="row mt-2"><h5 class="prod-name">'+product.name+'</h5></div>';
      card += '<div class="row mt-2"><p class="prod-desc">'+product.description+'</p></div>';
      card += '<div class="row bottom-wrap">';
      card += '<div class="price-wrap  h5 d-flex m-0 flex-fill bottom-wrap ">';
      card += '<div class="old-diff mb-2 "><span class="last-price">'+product.old_price+'$</span></div>';
      card += '<div class="htag-min p-0 mb-2"><span class="difprice aclas ">-'+product.discount_val+'$</span></div>';
      card += '<span class="price-new ">'+product.new_price+'$</span>';
      card += '</div></div>';
      card += '<div class="row mt-2">';
      card += ' <a class="add_to_cart" data-id="' + product.key + '" data-type="' + product.category + '" href="#" title="buy now" id="buyBtn-' + product.key + '">';
      card += '<span class="icon-shopping-cart"><center>Buy now</center></span></a></div>';
      card += '</div></div></div>';

      // Add product card to product list
      productCards.push(card);
    });

    // Display products in products container
    $("#productsContainer").html('<div class="d-flex flex-wrap">'+productCards.join("")+ '</div>');
  
}

