

/*
const order = JSON.parse(localStorage.getItem('lastOrder'));

const container = document.querySelector('.order-details');
const totalDisplay = document.getElementById('order-total');

if (!order) {
  container.innerHTML = "<p>No recent order found.</p>";
} else {

    let  total = 0;

  container.innerHTML = `<h3>Order Number: ${order.id}</h3>`;

  order.items.forEach(item => {
    const div = document.createElement('div');

    div.innerHTML = `
      <p>${item.name} × ${item.quantity}</p>
      <p>UGX ${(item.price * item.quantity).toLocaleString()}</p>
    `;

    container.appendChild(div);
  });

  totalDisplay.textContent = "UGX " + order.total.toLocaleString();
}

*/





/*
const order = JSON.parse(localStorage.getItem('lastOrder'));

const container = document.querySelector('.order-details');
const totalDisplay = document.getElementById('order-total');

if (!order) {
  container.innerHTML = "<p>No order found.</p>";
} else {

  let total = 0;

  order.items.forEach(item => {

    const div = document.createElement('div');

    div.innerHTML = `
      <p>${item.name} × ${item.quantity}</p>
      <p>UGX ${(item.price * item.quantity).toLocaleString()}</p>
    `;

    container.appendChild(div);

    total += item.price * item.quantity;
  });

  totalDisplay.textContent = "UGX " + total.toLocaleString();
}



const order = JSON.parse(localStorage.getItem('lastOrder'));

const orderNumber = document.getElementById('order-number');
const orderTotal = document.getElementById('order-total');
const container = document.querySelector('.order-details');

if (!order) {

  container.innerHTML = "<p>No order found.</p>";

} else {

  // show order ID
  orderNumber.textContent = order.id;

  // show items
  order.items.forEach(item => {

    const div = document.createElement('div');

    div.innerHTML = `
      <p>${item.name} × ${item.quantity}</p>
      <p>UGX ${(item.price * item.quantity).toLocaleString()}</p>
      <hr>
    `;

    container.appendChild(div);
  });

  // show total
  orderTotal.textContent = "UGX " + order.total.toLocaleString();
}
*/



/*
const order = JSON.parse(localStorage.getItem('lastOrder'));

const orderDetails = document.querySelector('.order-details');
const orderTotal = document.getElementById('order-total');

if (order) {

  // Show order number
  const orderNumber = document.createElement('p');
  orderNumber.textContent = "Order Number: " + order.id;
  orderDetails.appendChild(orderNumber);

  // Show items
  order.items.forEach(item => {

    const itemDiv = document.createElement('div');

    itemDiv.innerHTML = `
      <p>${item.name} x ${item.quantity}</p>
      <p>UGX ${(item.price * item.quantity).toLocaleString()}</p>
      <hr>
    `;

    orderDetails.appendChild(itemDiv);
  });

  // Show total
  orderTotal.textContent = "UGX " + order.total.toLocaleString();

} else {

  orderDetails.innerHTML = "<p>No order found.</p>";

}

*/

/*
console.log("Confirmation JS loaded");

document.addEventListener("DOMContentLoaded", function () {

  console.log("DOM fully loaded");

  const order = JSON.parse(localStorage.getItem("lastOrder"));

  console.log("Order data:", order);

});

*/




// order-confirmation.js
document.addEventListener("DOMContentLoaded", function () {

  const order = JSON.parse(localStorage.getItem("lastOrder"));

  if (!order) {
    // No order found
    document.querySelector(".order-details").innerHTML = "<p>No order found.</p>";
    document.getElementById("order-total").textContent = "UGX 0";
    return;
  }

  // Show order number
  const orderNumber = document.getElementById("order-number");
  orderNumber.textContent = order.id;

  
// Show order date
const orderDate = document.createElement('p');
orderDate.textContent = "Order Date: " + order.date;
orderDetails.appendChild(orderDate);


  // Show order items
  const orderDetails = document.querySelector(".order-details");
  orderDetails.innerHTML = ""; // clear previous

  order.items.forEach(item => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p>${item.name} x ${item.quantity}</p>
      <p>UGX ${(item.price * item.quantity).toLocaleString()}</p>
      <hr>
    `;
    orderDetails.appendChild(div);
  });

  // Show total
  const orderTotal = document.getElementById("order-total");
  orderTotal.textContent = "UGX " + order.total.toLocaleString();

  // Add Continue Shopping button
  const continueDiv = document.querySelector(".continue-shopping");
  continueDiv.innerHTML = `
    <a href="products.html" class="shop-btn">Continue Shopping</a>
  `;

});

