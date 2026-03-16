
// ==== LOAD CART FROM STORAGE ====
let cart = JSON.parse(localStorage.getItem('cart')) || [];

//  ==== SELECTORS =====
const cartContainer = document.querySelector('.cart-container')
const checkoutBtn = document.querySelector('.checkout-btn');
const clearBtn = document.querySelector('.clear-cart');


//===== MAIN RENDER FUNCTION =====
function renderCart() {
  cartContainer.innerHTML = "";

  // ===== EMPTY CART MESSAGE =====
  if (cart.length === 0) {

    cartContainer.innerHTML = `
      <div class="empty-cart">
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything yet</p>
        <a href="products.html" class="shop-btn">Continue Shopping</a>
      </div>
    `;

    document.getElementById('cart-total').textContent = "UGX 0";

    // ==== disable checkout if cart is empty ===
    if(checkoutBtn){
      checkoutBtn.classList.add('disabled');
      checkoutBtn.removeAttribute('href');
    }

    return; // stop rendering items
  }

  // ===== DISPLAY CART ITEMS =====
  cart.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('cart-item');

    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>Price: UGX ${item.price.toLocaleString()}</p>

      <div class="quantity-controls" data-name="${item.name}">
        <button class="decrease">−</button>
        <span class="qty">${item.quantity}</span>
        <button class="increase">+</button>
        <button class="remove-btn" data-name="${item.name}">Remove</button>
      </div>

      <p><strong>Total: UGX ${(item.price * item.quantity).toLocaleString()}</strong></p>
    `;

    cartContainer.appendChild(div);
  });

  attachEvents();
  updateCartTotal();


  // Enable checkout if cart has items
  if (checkoutBtn) {
    checkoutBtn.classList.remove('disabled');
    checkoutBtn.setAttribute('href', 'checkout.html');
  }
}

// ===== ATTACH BUTTON EVENTS =====
function attachEvents() {
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
function updateQuantity(button, change) {
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
function removeItem(button) {
  const name = button.dataset.name;
  cart = cart.filter(item => item.name !== name);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

// ===== CALCULATE TOTAL =====
function updateCartTotal() {
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity;
  });
  document.getElementById('cart-total').textContent = "UGX " + total.toLocaleString();
}

// ===== CLEAR CART =====
if (clearBtn) {
  clearBtn.addEventListener('click', () => {
    cart = [];
    localStorage.removeItem('cart');
    renderCart();
  });
}

// ===== INITIALIZE =====
renderCart();