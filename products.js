// products.js displays products and handles cart logic

// 1 Load cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// 2 Render products
const grid = document.querySelector('.products-grid');
products.forEach(product => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.dataset.category = product.category;

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <p class="price">UGX ${product.price}</p>
    <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
  `;

  grid.appendChild(card);
});



// ===== SEARCH AND FILTER =====

// 1 Search
const searchBox = document.querySelector('.search-box');

searchBox.addEventListener('input', function() {
  const value = this.value.toLowerCase();
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach(card => {
    const name = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = name.includes(value) ? "block" : "none";
  });
});

// 2 Filter by category
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.category;

    // Clear search box whenever filter is applied
    searchBox.value = "";

    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});


// Add to cart function
function addToCart(name, price) {

  // check if item already exists
  let found = cart.find(item => item.name === name);

  if (found) {
    // item already in cart → increase quantity
    found.quantity += 1;
  } else {
    // item not in cart → add new
    cart.push({
      name: name,
      price: price,
      quantity: 1
    });
  }

  // SAVE to localStorage (THIS IS CRITICAL)
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();

  alert(name + "  is added to cart");
}


// 4 Update cart counter
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let count = 0;

  cart.forEach(item => {
    count += item.quantity;
  });

  document.getElementById('cart-count').textContent = count;
}

// Initialize cart counter
updateCartCount();




// function updateCartCount() {

  // let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // let count = 0;

  // cart.forEach(item => {
    // count += item.quantity;
  // });

  // const counter = document.querySelector('.cart-count');

  // if(counter){
    // counter.textContent = count;
  // }

// }

// updateCartCount();


