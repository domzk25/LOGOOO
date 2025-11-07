productDiv.innerHTML = `
  <img src="${e.target.result}" alt="Product Image" />
  <p>Category: ${categoryInput.value}</p>
  <p>Price: ₱${priceInput.value}</p>
  <p><strong>Item: ${nameInput.value}</strong></p>
  <button onclick="addToCart(${priceInput.value})">Add to Cart</button>
  <button onclick="this.parentElement.remove(); updateStorage();">Delete</button>
`;
