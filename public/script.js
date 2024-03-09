// Array para armazenar os produtos no carrinho
const cart = [];

// Função para adicionar um produto ao carrinho
function addToCart(product) {
  cart.push(product);
  updateCart();
}

// Função para remover um produto do carrinho
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

// Função para atualizar a exibição do carrinho
function updateCart() {
  const cartItems = document.querySelector('.cart-items');
  cartItems.innerHTML = ''; // Limpa o conteúdo anterior

  let subtotal = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    const cartItem = document.createElement('li');
    cartItem.classList.add('cart-item');

    const image = document.createElement('img');
    image.src = product.image;
    cartItem.appendChild(image);

    const name = document.createElement('span');
    name.innerText = product.name;
    cartItem.appendChild(name);

    const price = document.createElement('span');
    price.innerText = `R$ ${product.price}`;
    cartItem.appendChild(price);

    const quantity = document.createElement('input');
    quantity.type = 'number';
    quantity.value = product.quantity;
    quantity.min = 1;
    quantity.addEventListener('change', () => {
      product.quantity = parseInt(quantity.value);
      updateCart();
    });
    cartItem.appendChild(quantity);

    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remover';
    removeButton.addEventListener('click', () => removeFromCart(i));
    cartItem.appendChild(removeButton);

    cartItems.appendChild(cartItem);

    subtotal += product.price * product.quantity;
  }

  // Calcula e exibe valores de subtotal, frete, impostos e total
  const shipping = calculateShipping(subtotal);
  const taxes = calculateTaxes(subtotal);
  const total = subtotal + shipping + taxes;

  document.getElementById('subtotal').innerText = `R$ ${subtotal}`;
  document.getElementById('shipping').innerText = `R$ ${shipping}`;
  document.getElementById('taxes').innerText = `R$ ${taxes}`;
  document.getElementById('total').innerText = `R$ ${total}`;
}

// Função para calcular o frete
function calculateShipping(subtotal) {
  if (subtotal >= 100) {
    return 0;
  } else {
    return 5;
  }
}

// Função para calcular os impostos
function calculateTaxes(subtotal) {
  return subtotal * 0.1;
}

// Função para finalizar a compra
function checkout() {
  // TODO: Implementar a lógica de finalizar a compra
  alert('Compra finalizada com sucesso!');
}

// Adiciona eventos aos botões de checkout
const checkoutButton = document.getElementById('checkout-button');
checkoutButton.addEventListener('click', checkout);

// Exibe os produtos iniciais no carrinho
const initialProducts = [
  {
    image: 'https://picsum.photos/200',
    name: 'Produto 1',
    price: 10,
    quantity: 1,
  },
  {
    image: 'https://picsum.photos/200',
    name: 'Produto 2',
    price: 20,
    quantity: 2,
  },
];

cart.push(...initialProducts);
updateCart();

//------------------------------------------------------
// Array de produtos
const products = [
  {
    image: 'https://picsum.photos/200',
    name: 'Produto 1',
    price: 10,
  },
  {
    image: 'https://picsum.photos/200',
    name: 'Produto 2',
    price: 20,
  },
  {
    image: 'https://picsum.photos/200',
    name: 'Produto 3',
    price: 30,
  },
];

// Função para exibir os produtos
function renderProducts() {
  const productsContainer = document.querySelector('.products-container');
  productsContainer.innerHTML = ''; // Limpa o conteúdo anterior

  for (const product of products) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const image = document.createElement('img');
    image.src = product.image;
    productCard.appendChild(image);

    const name = document.createElement('h2');
    name.innerText = product.name;
    productCard.appendChild(name);

    const price = document.createElement('p');
    price.innerText = `R$ ${product.price}`;
    productCard.appendChild(price);

    const button = document.createElement('button');
    button.innerText = 'Adicionar ao Carrinho';
    button.addEventListener('click', () => {
      // TODO: Adicionar o produto ao carrinho
      alert(`Produto ${product.name} adicionado ao carrinho!`);
    });
    productCard.appendChild(button);

    productsContainer.appendChild(productCard);
  }
}

renderProducts();