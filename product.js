document.addEventListener('DOMContentLoaded', async () => {
  // Fetch products from the blockchain
  const products = await fetchProductsFromBlockchain();
  const productList = document.getElementById('product-list');

  products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.className = 'product-item';
    productItem.innerHTML = `
      <h2>${product.name}</h2>
      <p>Price: ${product.priceInEth} ETH</p>
      <p>Quantity: ${product.quantity}</p>
      <button onclick="addToCart('${product.name}', ${product.priceInEth}, ${product.quantity})">Add to Cart</button>
    `;
    productList.appendChild(productItem);
  });
});

async function fetchProductsFromBlockchain() {
  // Fetch products from your smart contract using the method from app.js
  return window.getProducts(); // Call a function from 'app.js' to get products
}

window.addToCart = async function(name, priceInEth, quantity) {
  console.log(`Adding ${name} to cart`);
  try {
    await window.addToCartToBlockchain(name, priceInEth, quantity);
  } catch (error) {
    console.error('Failed to add to cart:', error);
  }
};
