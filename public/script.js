document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartItemCount = document.querySelector('.cart-icon span');
  const cartItemsList = document.querySelector('.cart-menu .cart-items');
  const cartTotal = document.querySelector('.cart-total');
  const cartIcon = document.querySelector('.cart-icon');
  const sidebar = document.getElementById('sidebar');

  let cartItems = [];
  let totalAmount = 0;

  addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
      const card = button.closest('.card');
      const itemName = card.querySelector('.card--title').textContent;
      const itemPriceText = card.querySelector('.price').textContent;
      const itemPrice = parseFloat(itemPriceText.replace('R$', ''));
      const item = {
        name: itemName,
        price: itemPrice,
        quantity: 1,
      };

      const existingItem = cartItems.find(cartItem => cartItem.name === item.name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cartItems.push(item);
      }

      totalAmount += item.price;

      updateCartUI();
    });
  });

  function updateCartUI() {
    updateCartItemCount(cartItems.length);
    updateCartItemList();
    updateCartTotal();
  }

  function updateCartItemCount(count) {
    cartItemCount.textContent = count;
  }

  function updateCartItemList() {
    cartItemsList.innerHTML = '';
    let totalPrice = 0;
    cartItems.forEach((item, index) => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item', 'individual-cart-item');

      const itemTotalPrice = item.price * item.quantity;
      totalPrice += itemTotalPrice;

      cartItem.innerHTML = `
        <span>(${item.quantity}x) ${item.name}</span>
        <span class="cart-item-price">$${itemTotalPrice.toFixed(2)}</span>
        <button class="remove-btn" data-index="${index}"><i class="fa-solid fa-times"></i></button>
      `;
      cartItemsList.appendChild(cartItem);
    });

    const removeButtons = document.querySelectorAll('.individual-cart-item .remove-btn');
    removeButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const index = parseInt(event.target.parentElement.dataset.index);
        removeItemFromCart(index);
      });
    });
  }

  function removeItemFromCart(index){
    const removeItem = cartItems.splice(index, 1)[0];
    totalAmount -= removeItem.price * removeItem.quantity;
    updateCartUI(); 
  }

  function updateCartTotal() {
    cartTotal.textContent = `$${totalAmount.toFixed(2)}`;
  }

  cartIcon.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  const closeButton = document.querySelector('.sidebar-close');
  closeButton.addEventListener('click', () => {
    sidebar.classList.remove('open');
  });

  const checkoutButton = document.querySelector('.checkout-btn');
checkoutButton.addEventListener('click', () => {
  window.open('checkout.html');
});
});
