
/*
let cart = JSON.parse(localStorage.getItem('cart')) ||  [];

const cartContainer = document.querySelector('.cart-container');

cart.forEach(item => {
  const div = document.createElement('div');
  div.classList.add('cart-item');

  div.innerHTML = `
    <h3>${item.name}</h3>
    <p>Price: UGX ${item.price}</p>
    <p>Quantity: ${item.quantity}</p>

      <div class="quantity-controls" data-name="${item.name}">
    <button class="decrease">−</button>
    <span class="qty">${item.quantity}</span>
    <button class="increase">+</button>
    <button class="remove-btn" data-name="${item.name}">Remove</button>
  </div>

    <p><strong>Total: UGX ${item.price * item.quantity}</strong></p>
  `;

  cartContainer.appendChild(div);
});

// INCREASE
 document.querySelectorAll('.increase').forEach(btn =>{
    btn.addEventListener('click',() =>{
     updateQuantity (btn, +1) 
    });
   }) ;

  //  DECREASE
 document.querySelectorAll('.decrease').forEach(btn =>{
   btn.addEventListener('click',() =>{
    updateQuantity (btn,-1)
   }) ;
  });
 
// REMOVE
document.querySelectorAll('.remove-btn').forEach(
  button =>{
    button.addEventListener('click',() =>{
      removeItem(button);
    })
  }
)


function updateQuantity(button, change) {
const controls = button.closest('.quantity-controls');
const name = controls.dataset.name;

// let Cart= JSON.parse(localStorage.getItem('cart')) || [];

cart = cart.map(item => {
  if (item.name === name) {
   item.quantity += change;
   if(item.quantity < 1) item.quantity = 1;                       
}
    return item;
});

localStorage.setItem('cart',JSON.stringify(cart));
location.reload();
}


function removeItem(button) {
const name = button.dataset.name;
let cart = JSON.parse(localStorage.getItem('cart')) || [];
cart = cart.filter(item =>item.name !== name);
localStorage.setItem('cart',JSON.stringify(cart));
location.reload();
}


  // ===== CALCULATE CART TOTAL =====
let total = 0;

cart.forEach(item => {
  total += item.price * item.quantity;
});

document.getElementById('cart-total').textContent =
  "UGX " + total.toLocaleString();



  function updateCartCount() {

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  let count = 0;

  cart.forEach(item => {
    count += item.quantity;
  });

  const counter = document.querySelector('.cart-count');

  if(counter){
    counter.textContent = count;
  }

}

updateCartCount();
*/


/*improved cart display*/
function renderCart() {
   cartContainer.innerHTML="";

if (cart.length === 0) {
cartContainer.innerHTML = `
<div class="Empty-cart">
<h2>Your Cart is empty</h2>
<p>looks like you havent added anything yet</p>
<a href="products.html" class="shop-btn">Continue Shopping</a>
</div>
`;

document.getElementById('cart-total').textContent= "UGX 0";
return;
}
}

// ===== LOAD CART FROM STORAGE =====
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const cartContainer = document.querySelector('.cart-container');


// ===== MAIN RENDER FUNCTION =====
function renderCart() {

  cartContainer.innerHTML = "";

  // ===== EMPTY CART MESSAGE =====
  if (cart.length === 0) {
    cartContainer.innerHTML = `
      <div class="empty-cart">
        <h2>Your cart is empty</h2>
        <p>Looks like you haven’t added anything yet</p>
        <a href="products.html" class="shop-btn">Continue Shopping</a>
      </div>
    `;

    document.getElementById('cart-total').textContent = "UGX 0";
    return;
  }


  // ===== DISPLAY CART ITEMS =====
  cart.forEach(item => {

    const div = document.createElement('div');
    div.classList.add('cart-item');

    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>Price: UGX ${item.price}</p>

      <div class="quantity-controls" data-name="${item.name}">
        <button class="decrease">−</button>
        <span class="qty">${item.quantity}</span>
        <button class="increase">+</button>
        <button class="remove-btn" data-name="${item.name}">Remove</button>
      </div>

      <p><strong>Total: UGX ${item.price * item.quantity}</strong></p>
    `;

    cartContainer.appendChild(div);
  });

  attachEvents();
  updateCartTotal();
}


// ===== ATTACH BUTTON EVENTS =====
function attachEvents(){

  document.querySelectorAll('.increase').forEach(btn => {
    btn.addEventListener('click', () => updateQuantity(btn, 1));
  });

  document.querySelectorAll('.decrease').forEach(btn => {
    btn.addEventListener('click', () => updateQuantity(btn, -1));
  });

  document.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', () => removeItem(btn));
  });

}


// ===== UPDATE QUANTITY =====
function updateQuantity(button, change){

  const controls = button.closest('.quantity-controls');
  const name = controls.dataset.name;

  cart = cart.map(item => {
    if (item.name === name) {
      item.quantity += change;
      if (item.quantity < 1) item.quantity = 1;
    }
    return item;
  });

  localStorage.setItem('cart', JSON.stringify(cart));

  renderCart();
}


// ===== REMOVE ITEM COMPLETELY =====
function removeItem(button){

  const name = button.dataset.name;

  cart = cart.filter(item => item.name !== name);

  localStorage.setItem('cart', JSON.stringify(cart));

  renderCart();
}


// ===== CALCULATE TOTAL =====
function updateCartTotal(){

  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
  });

  document.getElementById('cart-total').textContent =
    "UGX " + total.toLocaleString();
}


// ===== START CART =====
renderCart();
