
function updateCartCounter() {

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  let count = 0;

  cart.forEach(item => {
    count += item.quantity;
  });

  const counter = document.getElementById('cart-count');

  if(counter){
    counter.textContent = count;
  }

}

updateCartCounter();
