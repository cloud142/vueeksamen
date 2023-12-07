<template>

    <main>
      <section>
      <div class="header">
        <h1>LaRue Fashion</h1>
        <h2>WINTER SEASON</h2>
        <p>2023/2024</p>
        <button id="discoverButton">OPDAG</button>
      </div>
    
      <div id="video-container">
      <div class="overlay"></div>
        <!-- Slides -->

        <div class="mySlides">
          <img src="img/produkt1.jpg" alt="Winter Collection 1">
        </div>
        <div class="mySlides">
          <img src="img/produkt2.jpg" alt="Winter Collection 2">
        </div>
        <div class="mySlides">
          <img src="img/produkt4.jpg" alt="Winter Collection 3">
        </div>
      </div>
  
    </section>
      <div class="buy-section">
        <h2>FIND ANDET LARUE</h2>
      </div>


      <div class="product">
        <div class="image-wrapper">
          <RouterLink to="/buy">
        <img src="img/jakke1.jpg" alt="Product 1">
      </RouterLink>

        <h3>LR WINTER JACKET</h3>
        <p>1200.00 DKK</p>
      </div>

      <div class="image-wrapper">
        <img src="img/jakke3.jpg" alt="Product 2">
        <h3>LR WINTER JACKET 2</h3>
        <p>1800.00 DKK</p>
      </div>

      <div class="image-wrapper">
        <RouterLink to="/buyy">
        <img src="img/trak1.jpg" alt="Product 3">
      </RouterLink>
        <h3>WHITE LRACTIVE</h3>
        <p>679.00 DKK</p>
      </div>
    </div>

    <div class="green-box">
      <h2>MØD VORES TO KANDIDATER</h2>
      <div class="candidates">
          <div class="candidate">
              <img src="img/abdi.jpg" alt="Abdi og hans favoritter">
              <p>ABDI OG HANS FAVORITTER</p>
          </div>
          <div class="candidate">
              <img src="img/amin.jpg" alt="Amin og hans favoritter">
              <p>AMIN OG HANS FAVORITTER</p>
          </div>
      </div>
  </div>  
    </main>
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
      <a href="omos.html">
        <h3>OM OS</h3>
      </a>
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

<script setup>

//SALMA
import { ref, onMounted } from 'vue'

 onMounted(() => {
  
let slideIndex = 0;

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Skift billede hvert 2000 millisekunder (2 sekunder)
}

// Kald showSlides funktionen for at starte slideshowet
showSlides();

})

</script>

<style>

.header {
    text-align: center;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .header h1 {
    font-size: 30px; 
    font-weight: bold;
    position: absolute; 
    top: 30%; 
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1; 
    color: #fff;
  }
  
  .header h2 {
    font-size: 18px; 
    position: absolute; 
    top: 40%; 
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    color: #fff; 

  }
  
  .header p {
    font-size: 18px; 
    margin-bottom: 0; 
    position: absolute; 
    top: 45%; 
    left: 50%;
    transform: translate(-50%, -50%); 
    z-index: 1; 
    color: #fff;
  }
  
  #discoverButton {
    font-size: 16px;
    padding: 10px 30px;
    background-color: #fff;
    color: #000000; 
    border: none;
    border-radius: 5px; 
    cursor: pointer;
    position: absolute; 
    top: 52%; 
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1; 

  }

  #discoverButton:hover {
    background-color: #3C412A; 
    color: #fff; 
  }
  
  .slideshow-container {
    max-width: 100%;
    position: relative;
    margin: auto;
  }
  
  .mySlides {
    text-align: center;
    margin-top: -39px;
    z-index: 2;
  }

  .mySlides img {
    display: block;
    margin:0 auto;
    overflow:visible;
    width: 900px;
    height: 400px;
  }
  

  .prev, .next {
    display: none; 
  }

  .buy-section {
    text-align: center;
    margin: 200px 0 10px; 
  }
  
  .buy-section p {
    font-size: 20px;
  }
  

  .product { 
    display: flex;
    justify-content: center;
  }
  
  .product img {
    width: 80%;
    height: auto; 
    margin: 10px auto; 
  }
  
  .product h3 {
    font-size: 16px;
    margin: 10px 0;
  }
  
  .product p {
    font-size: 14px;
    margin: 5px 0;
  }
  .image-wrapper {
    text-align: left;
    margin: 0 10px;
  }

  .container {
    display: flex;
  }
  

  .green-box {
    background-color: #3C412A;
    color: #fff;
    padding: 20px;
    text-align: center;
    margin-top: 20px; 
  }


.green-box h2 {
    font-size: 24px;
    margin-bottom: 20px;
}

.candidates {
    display: flex;
    justify-content: center;
    gap: 200px;
}

.candidate {
    text-align: center;
    max-width: 300px;
}

.candidate img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 10px;
}

.candidate p {
    font-size: 16px;
    margin: 0;
    color: #fff;
}



  @media (min-width: 1024px) {
    .header h1 {
      font-size: 120px;
    }
  
    .header h2 {
      font-size: 25px;
    }
  
    .header p {
      font-size: 20px;
      margin-bottom: 15px; 
    }
  
    .slideshow-container {
      max-width: 800px; 
    }
  
    .prev, .next {
      display: inline-block; 
    }
    .mySlides img {
      max-width: 1980px;
    }
  }
  
  
  @media (min-width: 768px) {
    
    .header h1 {
      font-size: 50px;
    }
  
    .header h2 {
      font-size: 24px;
    }
  
    .header p {
      font-size: 18px;
    }
  
    .slideshow-container {
      max-width: 800px; 
    }
  
    .prev, .next {
      display: inline-block; 
    }
    .mySlides img {
      display: block;
      margin:0 auto;
      overflow:visible;
      max-width: 768px;
    }
  }
  
</style>