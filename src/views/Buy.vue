<template>
<section>
  <div class="textoverbillede">
    <div class="star">
    <h3>LauRe</h3>
    <i class="fa-regular fa-star"></i>
    </div>
      <h2>LR WINTER JACKET</h2>
        <p>Reference: E2972WOMRS_D301</p>
  </div>


  <div class="deler"></div>


  <div class="pris">
    <span class="redd">900.00kr</span>
    <div class="spare">
      <p>1.200.00kr</p>
      <span class="redd">25%</span>
    </div>
  </div>


  <div class="imgstor">
    <img src="img/jakke1.jpg" alt="LR winter jacket">
    <i class="fa-solid fa-arrow-right"></i>
  </div>


  <div class="imglille">
    <img src="img/jakke2.jpg" alt="LR winter jacket">
    <img src="img/jakke4.jpg" alt="LR winter jacket">
    <img src="img/jakke3.jpg" alt="LR winter jacket">
  </div>
</section>


<section>
  <div class="valgfarve">
    <h3>Farve:</h3>
    <div class="rammefarve">
      <div class="circle red"></div>
      <div class="circle blue"></div>
      <div class="circle green"></div>
      <div class="circle yellow"></div>
    </div>
  </div>


  <div class="str">
    <h3>Størrelse:</h3>
    <p class="rund">S</p>
    <p class="rund">M</p>
    <p class="rund">L</p>
    <p class="rund">XL</p>
  </div>


  <div class="putit">
    <button onclick="addToCart ('LR WINTER JACKET', 900.00)">LÆG I INDKØBSKURV</button>
  </div>

  
  <div id="overlay">
    <div class="flex-container">
        <div class="cart-item">
            <img src="img/jakke1.jpg" alt="LR Winter Jacket">
            <div id="cartOverlay">
            </div>
          </div>
    <button id="close-btn">✖ Luk</button>
  </div>
</div>



</section>


<section>
  <div class="infor">
    <i class="fa-solid fa-truck-fast"></i>
    <p class="mp">Forsendelse & Returnering</p>
    <i class="fa-solid fa-chevron-down"></i>
  </div>


  <div class="deler2"></div>


  <div class="infor1">
    <p>Materiale & vaskeanvisning</p>
    <i class="fa-solid fa-chevron-down"></i>
  </div>


  <div class="deler2"></div>


  <div class="infor2">
    <p>Information om produkt</p>
    <i class="fa-solid fa-chevron-down"></i>
  </div>


  <div class="deler2"></div>


  <div class="infor3">
    <p>Pasform</p>
    <i class="fa-solid fa-chevron-down"></i>
  </div>


  <div class="deler2"></div>


  <div class="infor4">
    <i class="fa-solid fa-share-from-square"></i>
    <p>Del</p>
  </div>
</section>


<section>
  <div class="lig">
    <h2>Lignende produkter</h2>
  </div>

  <div class="allemini">
  <div class="imglig">
    <RouterLink :to="'/buyy'">
    <img src="img/trak1.jpg" alt="Product 1">
</RouterLink>
    <h3>WHITE LRACTIVE</h3>
    <p>679.00 DKK</p>
  </div>


  <div class="imglig2">
    <img src="img/trak1.jpg" alt="Product 2">
    <h3>WHITE LRACTIVE</h3>
    <p>679.00 DKK</p>
  </div>


  <div class="imglig3">
    <img src="img/trak1.jpg" alt="Product 3">
    <h3>WHITE LRACTIVE</h3>
    <p>679.00 DKK</p>
  </div>
</div>
</section>



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

<script setup>
//CLAUDIA
import { ref, onMounted } from 'vue'

 onMounted(() => {

let shoppingCart = [];
let totalCost = 0;

function addToCart(product, price) {
    shoppingCart.push({ product, price });
    totalCost += price;
    updateCartOverlay();
    slideInCartOverlay();
}

function removeFromCart(index) {
    totalCost -= shoppingCart[index].price;
    shoppingCart.splice(index, 1);
    updateCartOverlay();
}

function openCartOverlay() {
    updateCartOverlay();
    slideInCartOverlay();
}


function slideInCartOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.right = '0';
    overlay.style.display = 'flex';
    overlay.classList.add('slide-in');
}

function updateCartOverlay() {
    const cartOverlay = document.getElementById('cartOverlay');
    cartOverlay.innerHTML = '<h2>KURV</h2>';
    
    if (shoppingCart.length === 0) {
        cartOverlay.innerHTML += '<p>DIN KURV ER TOM.</p>';
    } else {
        for (let i = 0; i < shoppingCart.length; i++) {
            const { product, price } = shoppingCart[i];
            cartOverlay.innerHTML += `<p>${product} - ${price}.00 DKK <button onclick="removeFromCart(${i})">SLET</button></p>`;
        }
        cartOverlay.innerHTML += `<p>TOTAL: ${totalCost}.00 DKK </p>`;
    }
}

document.addEventListener('click', function(event) {
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeBtn');
    if (event.target === overlay || event.target === closeBtn) {
        closeCartOverlay();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    let overlay = document.getElementById('overlay');
    let closeBtn = document.getElementById('close-btn');



    function hideOverlay() {
        overlay.style.display = 'none';
    }


    closeBtn.addEventListener('click', function () {
        hideOverlay();
    });

});

})
document.addEventListener('DOMContentLoaded', function () {
    const circles = document.querySelectorAll('.circle');

    circles.forEach(circle => {
        circle.addEventListener('click', function () {
            circles.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
</script>

<style>
#overlay {
    display: none;
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    background-color: white;
    z-index: 2;
    transition: right 0.5s;
    border-left: 1px solid #ccc;
}

#overlay.active {
    right: 0;
}


.flex-container {
    height: 100%;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
}

.cart-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.cart-item img {
    max-width: 100px;
    margin-right: 10px;
}

.cart-item p {
    margin: 0;
}

 #cartOverlay button  {
  border: none;
  padding: 5px 15px ;
  background-color: #3C412A;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
  transition: background-color 0.3s ease;
}

#cartOverlay button:hover {
    background-color: #161618;
}


#close-btn {
    background-color: #3C412A;
    color: white;
    border: none;
    padding: 10px 90px;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 20px;
    margin-left: 10px;
    text-transform: uppercase;
    transition: background-color 0.3s ease;
}

#close-btn:hover {
  background-color: #161618;
}



.textoverbillede p, .pris p, .str p, .infor p, .infor2 p, .infor3 p, .infor1 p, .imglig p, .imglig2 p, .imglig3 p {
  display: inline-block;
  margin-right: 20px;
  text-decoration: none;
  color: #161618;
  font-size: 15px;
}



  .textoverbillede {
    margin: 50px 40px 0px;
  }

  .star {
    display: grid;
    grid-template-columns: 1fr auto;
    margin-bottom: 10px;
  }

  .star i {
    font-size: 20px;
  }

  .pris {
    display: grid;
    grid-template-rows: auto auto;
    margin: 0px 40px 0px;
  }

  .pris span {
    font-size: 20px;
  }

  .spare p {
    text-decoration: line-through;
    text-decoration-color: #161618;
    text-decoration-style: solid;
    font-size: 15px;
  }

  .redd {
    color: #EF4545;
  }
  .spare span {
    border-bottom: 2px solid #EF4545; 
    padding-bottom: 0px;
  }

  .deler {
    border: 1px solid #ccc; 
    margin: 15px 15px; 
    width: 95%;
  }

  .imgstor {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px 15px;
  }

  .imgstor img {
    width: 60%;
    border-radius: 5px;
    cursor: zoom-in;
    margin-right: 10px;
  }

  .imgstor i {
    display: none;
  }

  .imglille {
    display: flex;
    justify-content: space-evenly; 
    align-items: center;
    padding: 0 20px;
    margin-top: 30px;
  }

  .imglille img {
    width: 30%;
    cursor: zoom-in;
    border-radius: 5px;
  }

  .valgfarve {
    margin: 50px 40px 20px;
  }

  .valgfarve h3 {
    font-size: 25px;
    text-transform: uppercase; 
  }

  .rammefarve {
    display: flex;
  }

  .circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.red { background-color: grey; }
.blue { background-color: #3C412A; }
.green { background-color: #161618; }
.yellow { background-color: #ccc; }

.circle.active {
    transform: scale(1.4);
    opacity: 0.8;
}

    .str {
        margin: 20px 40px 20px; 
    }

    .str h3 {
        font-size: 25px;
        text-transform: uppercase; 
    }

    .rund {
        border: 2px solid #333;
        border-radius: 40%;
        padding: 10px;
        text-align: center;
        width: 40px; 
        position: relative;
        z-index: 1; 
        margin-top: 10px;
    }

    .putit {
        display: grid;
        place-items: center;
        margin-top: 50px;
        margin-bottom: 50px;
    }

    .putit button{
        font-size: 20px;
        direction: none;
        padding: 30px 30px 30px;
        background-color: #3C412A;
        color: #fff;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease;
        border-radius: 5px;
    }

    .putit button:hover {
        background-color: #161618;
    }

    .infor, .infor2, .infor3, .infor1, .infor4 {
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
    }

    .deler2 {
        border: 1px solid #ccc; 
        margin: 15px 55px; 
    }

    .lig {
        display: grid;
        place-items: center;
        margin: 20px 0 20px;
    }

    .lig h2 {
        font-size: 30px;
        text-transform: uppercase;
    }

    .imglig, .imglig2, .imglig3 {
        display: grid;
        place-items: center;
        margin-top: 30px;
        margin-bottom: 40px;
        text-transform: uppercase;
    }

    .imglig img, .imglig2 img, .imglig3 img {
        width: 50%;
        border-radius: 5px;
        cursor: pointer;
    }


    @media (min-width: 768px) {
      #overlay {
         top: 0;
         width: 50%;
    }

     #cartOverlay button  {
      padding: 8px 30px ;
     }
    
    #close-btn {
        padding: 10px 150px;
        margin-left: 15px;
    }

    .textoverbillede h3 {
      font-size: 40px;
    }

    .textoverbillede h2 {
      font-size: 30px;
    }

    .star i {
      font-size: 30px;
    }

    .imgstor img {
      width: 40%;
    }

    .imgstor i {
      display: inline;
      font-size: 50px;
      margin-left: 30px;
    }

    .allemini {
      display: flex;
      justify-content: space-between;
  }

  .imglig,
  .imglig2,
  .imglig3 {
    flex: 1;
    text-align: center;
    margin: 20px;
  }

    .imglille {
      padding: 0 0px;
    }

    .imglille img {
      width: 20%;
    }

    .valgfarve h3 {
      font-size: 20px;
    }
  
    .circle {
      width: 40px;
      height: 40px;
  }
  .str h3 {
    font-size: 20px;
}

.putit button{
    font-size: 20px;
    padding: 30px 100px;
}


.deler2 {
    margin: 15px 25px; 
    width: 90%; 
}

.infor, .infor2, .infor3, .infor1, .infor4 {
  justify-content: left;
  margin: 20px 70px 20px;
}


.lig h2 {
    font-size: 40px;
}

.imglig, .imglig2, .imglig3 {
    margin-top: 60px;
    margin-bottom: 60px;
}

.imglig img, .imglig2 img, .imglig3 img {
    width: 80%;
}  
      }
      
      @media (min-width: 1024px) {
        #overlay {
          top: 0;
          width: 35%;
     }
 
      #cartOverlay button  {
       padding: 8px 30px ;
      }
     
     #close-btn {
         padding: 10px 150px;
         margin-left: 5px;
     }

    .imgstor img {
      width: 35%;
    }
 
    .imglille img {
      width: 10%;
    }

    .valgfarve h3 {
      font-size: 25px;
    }
  
    .circle {
      width: 55px;
      height: 55px;
  }
  .str h3 {
    font-size: 25px;
    margin-top: 30px;
}

.deler2 {
    margin: 15px 55px; 
    width: 95%; 
}

.lig h2 {
    font-size: 40px;
}   
 
      }


</style>