let cart = {}; 
let totalPrice = 0; 

function initializeCart() {
  const storedCart = localStorage.getItem('cart');
  const storedTotalPrice = localStorage.getItem('totalPrice');

  try {
    if (storedCart) {
      cart = JSON.parse(storedCart);
      if (typeof cart !== 'object' || Array.isArray(cart)) {
        cart = {}; 
      }
    } else {
      cart = {}; 
    }

    if (storedTotalPrice) {
      totalPrice = parseFloat(storedTotalPrice) || 0; 
    } else {
      totalPrice = 0;
    }
  } catch (error) {
    console.error("Kļūda, lasot localStorage:", error);
    cart = {};
    totalPrice = 0;
  }

  updateCartDisplay();
}

function addToCart(productName, productPrice) {
  if (cart[productName]) {
    cart[productName].quantity += 1;
  } else {
    cart[productName] = { price: productPrice, quantity: 1 };
  }

  totalPrice += productPrice;

  saveCartToLocalStorage();

  updateCartDisplay();
}

function removeFromCart(productName) {
  if (cart[productName]) {
    totalPrice -= cart[productName].price * cart[productName].quantity;

    delete cart[productName];

    saveCartToLocalStorage();

    updateCartDisplay();
  }
}

function updateCartCount() {
  const count = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
  const el = document.getElementById('cart-count');
  if (el) el.textContent = count;
}

function updateCartDisplay() {
  const cartItemsElement = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');
  cartItemsElement.innerHTML = '';

  const validCart = Object.entries(cart).reduce((acc, [key, value]) => {
    if (value && value.quantity > 0 && value.price >= 0) {
      acc[key] = value;
    }
    return acc;
  }, {});

  cart = validCart;
  saveCartToLocalStorage();

  var string_cart = "";
  for (const productName in cart) {
    if (cart.hasOwnProperty(productName)) { 
      const item = cart[productName];
      const listItem = document.createElement('p');
      listItem.textContent = `${item.quantity}x ${productName} - ${(item.price * item.quantity).toFixed(2)} €    `;

      string_cart += `${item.quantity}x ${productName} - ${(item.price * item.quantity).toFixed(2)} € \n`;
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.onclick = () => removeFromCart(productName);
      listItem.appendChild(removeButton);

      cartItemsElement.appendChild(listItem);
    }
  }

  cartItemsElement.value = string_cart;

  totalPriceElement.textContent = totalPrice.toFixed(2);
  totalPriceElement.value = 'total: ' + totalPrice.toFixed(2);

  updateCartCount();
}

function saveCartToLocalStorage() {
  try {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('totalPrice', totalPrice.toFixed(2));
  } catch (error) {
    console.error("Kļūda, saglabājot localStorage:", error);
  }
}

initializeCart();

function openCart() {
  document.getElementById("cart-modal").style.display = "flex";
}

function closeCart() {
  document.getElementById("cart-modal").style.display = "none";
}
