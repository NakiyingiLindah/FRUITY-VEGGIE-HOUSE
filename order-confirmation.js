
const order = JSON.parse(localStorage.getItem('lastOrder'));
const orderDetails = document.querySelector('.order-details');
const orderTotal = document.getElementById('order-total');

if (order) {
  // Order Number
  const orderNumber = document.createElement('p');
  orderNumber.textContent = "Order Number: " + order.id;
  orderDetails.appendChild(orderNumber);

  // Order Date
  const orderDate = document.createElement('p');
  orderDate.textContent = "Order Date: " + order.date;
  orderDetails.appendChild(orderDate);

  // Items
  order.items.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.innerHTML = `
      <p>${item.name} x ${item.quantity}</p>
      <p>UGX ${(item.price * item.quantity).toLocaleString()}</p>
      <hr>
    `;
    orderDetails.appendChild(itemDiv);
  });

  // Total Paid
  orderTotal.textContent = "UGX " + order.total.toLocaleString();

} else {
  orderDetails.innerHTML = "<p>No order found.</p>";
}