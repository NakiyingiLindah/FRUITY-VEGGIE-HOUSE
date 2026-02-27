let cart = JSON.parse(localStorage.getItem('cart')) || [];

const cartContainer = document.querySelector('.cart-container');

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
      <button class="remove-btn">Remove</button>
    </div>

    <p><strong>Total: UGX ${item.price * item.quantity}</strong></p>
  `;

  cartContainer.appendChild(div);
});


// INCREASE
document.querySelectorAll('.increase').forEach(btn =>{
  btn.addEventListener('click', ()=>{
    updateQuantity(btn, 1);
  });
});


// DECREASE
document.querySelectorAll('.decrease').forEach(btn =>{
  btn.addEventListener('click', ()=>{
    updateQuantity(btn, -1);
  });
});


// REMOVE
document.querySelectorAll('.remove-btn').forEach(btn =>{
  btn.addEventListener('click', ()=>{
    removeItem(btn);
  });
});



// UPDATE QUANTITY
function updateQuantity(button, change){

  const controls = button.closest('.quantity-controls');
  const name = controls.dataset.name;

  cart = cart.map(item => {
    if(item.name === name){
      item.quantity += change;

      if(item.quantity < 1){
        item.quantity = 1;
      }
    }
    return item;
  });

  localStorage.setItem('cart', JSON.stringify(cart));
  location.reload();
}



// REMOVE ITEM
function removeItem(button){

  const controls = button.closest('.quantity-controls');
  const name = controls.dataset.name;

  cart = cart.filter(item => item.name !== name);

  localStorage.setItem('cart', JSON.stringify(cart));
  location.reload();
}



// CART TOTAL
let total = 0;

cart.forEach(item => {
  total += item.price * item.quantity;
});

document.getElementById('cart-total').textContent =
  "UGX " + total.toLocaleString();
