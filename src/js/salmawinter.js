
function updateProducts() {
  const productContainer = document.getElementById("productContainer");
  productContainer.innerHTML = "";

  products.forEach(product => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    const imageElement = document.createElement("img");
    imageElement.src = product.image;
    imageElement.alt = product.name;

    const infoElement = document.createElement("div");
    infoElement.classList.add("product-info");
    infoElement.innerHTML = `
      <p class="product-name">${product.name}</p>
      <p class="product-price">Pris: ${product.price} DKK</p>
    `;

    productElement.appendChild(imageElement);
    productElement.appendChild(infoElement);

    productContainer.appendChild(productElement);
  });
}

  
  function applyFilters() {
    // Implementer logikken til filtrering baseret på valgte filtre
    // Opdater resultCount med det nye antal resultater
    const resultCount = document.getElementById("resultCount");
    resultCount.innerText = `${products.length} result(s)`;
  }
  
  function resetFilters() {
    // Implementer logikken til at nulstille filtre
    // Opdater resultCount med det samlede antal resultater
    const resultCount = document.getElementById("resultCount");
    resultCount.innerText = " result(s)";
  }
  
  // Opdater produkter ved indlæsning af siden
  updateProducts();
  