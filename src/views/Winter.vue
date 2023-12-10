<template>
 <header class="winter-header">
      <h1>WINTER SEASON</h1>
      <p class="sub-title">2023/2024</p>
      <p class="description">Let LaRue be your guide destination for Fashion!</p>
    </header>

    <div class="filters">
      <div class="filter-group">
        <label for="category">Category:</label>
        <select id="category">
          <option value="all">All</option>
          <option value="Jakke">Jakke</option>
          <option value="Track suit">Track suit</option>
        </select>
      </div>
    
      <div class="filter-group">
        <label for="color">Color:</label>
        <select id="color">
          <option value="all">All</option>
          <option value="Sort">Sort</option>
          <option value="Hvid">Hvid</option>
        </select>
      </div>
    
      <div class="filter-group">
        <label for="size">Clothing Size:</label>
        <select id="size">
          <option value="all">All</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
    
      <button @click="applyFilters()">Apply Filters</button>
      <button @click="resetFilters()">Reset All Filters</button>
    </div>
    
    <div id="resultCount">0 result(s)</div>

    
    <div class="filters">
  
    </div>
    
    <div class="product-container" id="productContainer"></div>
    <div class="container">
        <div class="column" id="column1">
          <!-- Produkter vil blive indsat dynamisk her ved hjælp af JavaScript -->
        </div>
      
        <div class="column" id="column2">
          <!-- Produkter vil blive indsat dynamisk her ved hjælp af JavaScript -->
        </div>
      </div>

      <div class="product-container" id="productContainer">
        <!-- Each product is wrapped in an anchor tag with the link to "buymode.html" -->
        <div class="productt">

            <img src="img/trak1.jpg" alt="WHITE LRACTIVE">
            <div class="product-info">
              <p class="product-name">WHITE LRACTIVE</p>
              <p class="product-price">Pris: 679 DKK</p>
            </div>

        </div>

        <div class="productt">

            <img src="img/jakke1.jpg" alt="LR WINTER JACKET 2">
            <div class="product-info">
              <p class="product-name">LR WINTER JACKET 2</p>
              <p class="product-price">Pris: 1800 DKK</p>
            </div>

        </div>

        <div class="productt">

            <img src="img/jakke2.jpg" alt="LR WINTER JACKET 2">
            <div class="product-info">
              <p class="product-name">LR WINTER JACKET 2</p>
              <p class="product-price">Pris: 1800 DKK</p>
            </div>

        </div>

        <div class="productt">

            <img src="img/jakke3.jpg" alt="LR WINTER JACKET 2">
            <div class="product-info">
              <p class="product-name">LR WINTER JACKET 2</p>
              <p class="product-price">Pris: 1800 DKK</p>
            </div>

        </div>

        <div class="productt">

            <img src="img/trak2.jpg" alt="WHITE LRACTIVE">
            <div class="product-info">
              <p class="product-name">WHITE LRACTIVE</p>
              <p class="product-price">Pris: 679 DKK</p>
            </div>

        </div>

        <div class="productt">
            <img src="img/jakke4.jpg" alt="LR WINTER JACKET 2">
            <div class="product-info">
              <p class="product-name">LR WINTER JACKET 2</p>
              <p class="product-price">Pris: 1800 DKK</p>
            </div>

        </div>

      </div>

      

  <footer>
    <h2 class="footer-heading">LaRue Fashion</h2>


    <div class="columns">
    <div class="column">
        <h3>LARUE FASHION</h3>
        <ul class="submenu">
            <li class="submenu-item">MODE</li>
            <li class="submenu-item">FIND OS HER</li>
            <li class="submenu-item">FØLG DIN ORDRE</li>
        </ul>
    </div>

    <div class="column">
        <h3>INFORMATION</h3>
        <ul class="submenu">
            <li class="submenu-item">FRAGT OG LEVERING</li>
            <li class="submenu-item">HANDELSBETINGELSER</li>
            <li class="submenu-item">HJÆLP & FAQ</li>
            <li class="submenu-item">AFMELD</li>
        </ul>
    </div>

    <div class="column">
        <h3>OM OS</h3>
        <ul class="submenu">
            <li class="submenu-item">KONTAKT OS</li>
            <li class="submenu-item">OM OS</li>
            <li class="submenu-item">TERMS OF SERVICE</li>
            <li class="submenu-item">REFUND POLICY</li>
        </ul>
    </div>
  </div>

    <div class="divider"></div>

    <div class="footer-list">
      <ul>
        <li>COOKIE PREFERENCES</li>
        <li>SITEMAP</li>
        <li>PERSONDATA</li>
        <li>POLITIKVILKÅR</li>
        <li>FOR BRUG</li>
      </ul>
       <div class="icons">
      <ul>
        <li>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-tiktok"></i>
        </li>
    </ul>
      </div>
    </div>
    <div class="footer-images">
      <img src="img/pay.png" alt="alt du kan betale med på Larue Fashion">
    </div>
    <div class="footer-text">
      <p>©2023 LARUE DREVET AF SHOPIFY</p>
    </div>
</footer>
</template>

<script>
    export default {
      
   methods: {
    updateProducts() {
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
  }) 
 },
  applyFilters() {
    // Implementer logikken til filtrering baseret på valgte filtre
    // Opdater resultCount med det nye antal resultater
    const resultCount = document.getElementById("resultCount");
    resultCount.innerText = `${products.length} result(s)`;
  },
  resetFilters() {
    // Implementer logikken til at nulstille filtre
    // Opdater resultCount med det samlede antal resultater
    const resultCount = document.getElementById("resultCount");
    resultCount.innerText = " result(s)";
  },
  updateProducts(){

  },
}
};
 
</script>

<style>

.winter-header {
text-align: center;
margin: 20px 0;
}

.winter-header h1 {
font-size: 24px;
margin-bottom: 8px;
}

.winter-header .sub-title {
font-size: 18px;
margin-bottom: 8px;
}

.winter-header .description {
font-size: 16px;
}

.container {
  display: flex;
  justify-content: space-between;
  margin: 20px;
  flex-wrap: wrap;
}

.column {
  width: 30%; 
  padding: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
}

.product-container {
  display: flex;
  flex-wrap: wrap; 
  justify-content: space-around; 
}

.productt {
  width: 30%; 
  box-sizing: border-box;
  margin-bottom: 20px;
  border: 1px solid rgba(221, 221, 221, 0.5); 
  padding: 10px;
}

.productt img {
  width: 30%; 
  height: auto;
  display: block;
}

.product-info {
  text-align: center;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}

.filters {
  display: flex;
  justify-content: space-between;
  margin: 20px;
}

.filter-group {
  margin-right: 20px;
}

#resultCount {
  margin-top: 20px;
}



@media screen and (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .column {
    width: 100%;
  }

  .filter-group {
    margin-right: 0;
    margin-bottom: 10px;
  }
}
  
</style>