// function items(name, price, quantity) {
//   this.name = name;
//   this.price = price;
//   this.quantity = $(quantity).value;
// }
// var item = [];
// item.push(new items(Hot_coffee, 2, "#quantity1"));
// item.push(new items(Espresso, 5, "#quantity2"));
// item.push(new items(Iced_coffee, 4, "#quantity3"));
// item.push(new items(cappuchino, 4, "#qunatity4"));

// var item_total = [];
// for (i = 0; i < 4; i++) {
//   item_total[i].push(item[i].price * item[i].quantity);
// }
// console.log(item_total);

// // while (1) {
// //   return (document.getElementById("item_price1").innerHTML = item_total[0]);
// // }

var quantityInputs = document.getElementsByClassName("quantity");
for (var i = 0; i < quantityInputs.length; i++) {
  var input = quantityInputs[i];
  input.addEventListener("change", quantityChanged);
}

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  } else if (input.value > 20) input.value = 20;
  updateCartTotal();
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName("order_page")[0];
  var cartRows = cartItemContainer.getElementsByClassName("order_item");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsById("item_price")[0];
    var quantityElement = cartRow.getElementsByClassName("quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }

  document.getElementsByClassName("item_total")[0].innerText = total;
}
