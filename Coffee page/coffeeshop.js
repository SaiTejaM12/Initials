var removeCartItemButtons = document.getElementsByClassName("btn-remove");
for (var i = 0; i < removeCartItemButtons.length; i++) {
  var button = removeCartItemButtons[i];
  button.addEventListener("click", removeCartItem);
}

var quantityInputs = document.getElementsByClassName("cart-quantity-input");
for (var i = 0; i < quantityInputs.length; i++) {
  var input = quantityInputs[i];
  input.addEventListener("change", quantityChanged);
}

var addToCartButtons = document.getElementsByClassName("shop-item-button");
for (var i = 0; i < addToCartButtons.length; i++) {
  var button = addToCartButtons[i];
  button.addEventListener("click", addToCartClicked);
}

document
  .getElementsByClassName("btn-purchase")[0]
  .addEventListener("click", purchaseClicked);

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  } else if (input.value > 50) input.value = 50;
  updateCartTotal();
}

function addToCartClicked(event) {
  var button = event.target;
  var shopItem = button.parentElement.parentElement;
  var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
  var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;
  var imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].img;
  var itemTotal = updateItemTotal();
  addItemToCart(title, price, itemTotal);
  updateCartTotal();
}

function addItemToCart(title, price, itemTotal) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  var cartItemNames = cartItems.getElementsByClassName("cart-item-title");
  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      this.parentElement.input.value++;
      return;
    }
  }
  var cartRowContents = `<div class="cart-item "><span class="cart-item-title">${title}</span></div>
    <span class="cart-price ">${price}</span>
    <div class="cart-quantity "><input class="cart-quantity-input" type="number" value="1"><button class="btn btn-remove" type="button">REMOVE</button>
   <span class="item-total-price">${itemTotal}</span>
    </div>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  cartRow
    .getElementsByClassName("btn-remove")[0]
    .addEventListener("click", removeCartItem);
  cartRow
    .getElementsByClassName("cart-quantity-input")[0]
    .addEventListener("change", quantityChanged);
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;

    total = total + price * quantity;
  }

  document.getElementsByClassName("cart-total-price")[0].innerText =
    "$" + total;
}

function updateItemTotal() {
  var cartItemContainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;

    total = price * quantity;
  }

  document.getElementsByClassName("item-total-price")[0].innerText =
    "$" + total;
}
