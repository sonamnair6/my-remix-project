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
  // Fetch products from your smart contract
  // Placeholder implementation
  return [
    { name: 'Kava Root', priceInEth: 0.1, quantity: 10 },
    { name: 'Kava Powder', priceInEth: 0.05, quantity: 20 },
  ];
}

function addToCart(name, price, quantity) {
  // Add product to cart
  console.log(`Added ${name} to cart`);
}
