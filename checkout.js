
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



const checkoutBtn = document.querySelector('.checkout-btn');
if( cart.length === 0){
  checkoutBtn.disabled = true;
} else {
   checkoutBtn.disabled = false;
}



const form = document.getElemntById(".checkout-form");
form.addEventListener("submit", function(e){
  e.preventDefault();
})
const name = document.getElementById('name')
const phone = document.getElementById('phone')
const address = document.getElementById('address')
const email= document.getElementById('email')

let valid = true;

if(name.value.trim() === ""){
  name.classList.add("error");
  valid = false;
} else{
  name.classList.remove("error")
  name.classList.add("success")
}


if(!email.value.includes("@")){
  email.classList.add("error");
  valid = false;
} else{
  email.classList.remove("error")
  email.classList.add('success')
}


if(phone.value.trim() === ""){
  phone.classList.add("error");
  valid = false;
} else{
  phone.classList.remove("error")
  phone.classList.add("success")
}

if(address.value.trim() === ""){
  address.classList.add("error");
  valid = false;
} else{
  address.classList.remove("error")
  address.classList.add("success")
}

if(valid){
 alert("order placed successfully") ;

form.Submit(); }
