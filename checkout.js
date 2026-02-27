/*let cart = JSON.parse(localStorage.getItem('cart')) || [];
const container = document.querySelector(checkout-items);
let total = 0;
cart.forEach(item=> {
    const div= document.createElement('div');
});
div.innerHTML = `
<p>${item.name}*${item.quantity} </p>
<p> UGX ${item.price}*${item.quantity} </p>
`;
container.appendChild(div);
document.getElementById(checkout-total).textContent = "UGX" + total.toLocaleString();


// handle order submission//
 document.getElementById('checkout-form').addEventListener('submit',e =>{
 e.preventDefault();
 alert("Order placed successfully");
 localStorage.removeItem('cart');
 window.location.href="products.html";
});





let cart = JSON.parse(localStorage.getItem('cart')) || [];
const checkoutItems = document.querySelector('.checkout-items');
const totalDisplay = document.getElementById('checkout-total');
function rendercheckout(){
checkoutItems.innerHTML="";
let total = 0:
cart.forEach(item=> {
const div = document.createElement('div');
div.innerHTML=`
<p>${item.name}*${item.quantity}</p>
<p> UGX ${item.price}*${item.quantity}</p>
`;

checkoutItems.appendChild('div')
total += item.price * item.quantity;
});

totalDisplay.textContent="UGX"+ total.toLocaleString();
rendercheckout();
*/



let cart = JSON.parse(localStorage.getItem('cart')) || [];

const checkoutItems = document.querySelector('.checkout-items');
const totalDisplay = document.getElementById('checkout-total');
const checkoutForm = document.getElementById('checkout-form');

function renderCheckout(){

  checkoutItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {

    const div = document.createElement('div');

    div.innerHTML = `
      <p>${item.name} x ${item.quantity}</p>
      <p>UGX ${item.price * item.quantity}</p>
      <hr>
    `;

    checkoutItems.appendChild(div);

    total += item.price * item.quantity;

  });

  totalDisplay.textContent = "UGX " + total.toLocaleString();
}

renderCheckout();


/*===== HANDLE ORDER SUBMISSION 

checkoutForm.addEventListener('submit', e => {

  e.preventDefault();

  alert("Order placed successfully");

  localStorage.removeItem('cart');

  window.location.href = "products.html";

});
*/



document.getElementById('checkout-form').addEventListener('submit', e => {
  e.preventDefault();

const order = {
  id: "ORD-" + Date.now(),
  date: new Date().toLocaleString(),   // ADD THIS
  items: cart,
  total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
};

  localStorage.setItem('lastOrder', JSON.stringify(order));

  localStorage.removeItem('cart');

  window.location.href = "order-confirmation.html";
});
