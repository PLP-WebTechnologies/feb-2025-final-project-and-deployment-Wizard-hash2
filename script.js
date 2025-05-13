function showPromo() {
  document.getElementById('promoText').innerText = '🎉 Use code MYSHOP10 for 10% off!';
}

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product} added to cart!`);
}

window.onload = function () {
  const cartItems = document.getElementById('cartItems');
  if (cartItems) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      cartItems.appendChild(li);
    });
  }
}
