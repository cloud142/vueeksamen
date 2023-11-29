<template>
    <header :class="{'scrolled-nav': scrolledNav }">
        <section>
      <div class="top-section">
      <ul class="main-list">
        <li><a href="#">Find os her</a></li>
        <li><a href="#">Let LaRue be your guide destination for Fashion!</a></li>
        <li><a href="#">Denmark</a></li>
      </ul>
    </div>
    </section>
    <nav>
        <div class="branding">
            <a href="index.html">
            <img src="img/logo.png" alt="LaRue Fashion">
            </a>
        </div>
        <ul v-show="!mobile" class="navigation">
            <li><a class="link" href="wintercollection.html">Fashion</a></li>
            <li><a class="link" href="index.html">Home</a></li>
            <span class="red">
            <li><a class="link" href="buymode.html">Udsalg</a></li>
        </span>
        </ul>
        <ul v-show="!mobile" class="navigationicons">
            <li><i class="fa-solid fa-magnifying-glass"><a href="#"></a></i></li>
            <li><i class="fa-regular fa-user"><a href="#"></a></i></li>
            <li><i class="fa-regular fa-star"><a href="#"></a></i></li>
            <li><i class="fa-solid fa-cart-shopping"><a href="#"></a></i></li>
        </ul>
        <div class="icon">
            <i @click="toggleMobileNav"  v-show="mobile" class="fa-solid fa-bars" :class="{'icon-active' : moblieNav}"></i>
        </div>
        <transition name="moblie-nav">
         <ul v-show="moblieNav" class="dropdown-nav">
            <li><a class="link" href="wintercollection.html">Fashion</a></li>
            <li><a class="link" href="index.html">Home</a></li>
            <span class="red">
            <li><a class="link" href="buymode.html">Udsalg</a></li>
            </span>
         </ul>
        </transition>
    </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "navigation",
    data() {
        return {
            scrolledNav: null,
            mobile: null,
            moblieNav: null,
            windowWidth: null,
        };
    },
    created(){
        window.addEventListener("resize", this.checkScreen);
        this.checkScreen();
    },
    methods: {
        toggleMobileNav() {
            this.moblieNav = !this.moblieNav;
        },

        updateScroll() {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                this.scrolledNav = true;
                return;
            }
            this.scrolledNav = false
        },

        checkScreen(){
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 768) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.moblieNav = false;
            return;
        },
    },
  };
  </script>
  
  <style lang="scss" scoped>

  header {
    background-color: #fff;
    z-index: 99;
    width: 100%;
    transition: .5s ease all;
    box-shadow: 0 4px 8px 0 grey;
 

  nav {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: .5s ease all;
    width: 90%;
    margin: 0 auto;

    @media (min-width: 1140px) {    
        max-width: 1140px;
    }

    ul, .link {
        color:#161618;
        list-style: none;
        text-decoration: none;
    }

    li {
        text-transform: uppercase;
        padding: 5px; //Rykker dem
        margin-left: 2px; // Rykker dem
    }
    .link {
        font-size: 20px; // Størrlsen på skiften i header 
        transition: .5s ease all;
        padding-bottom: 2px;
        margin-right: 50px; // mellemrum mellem hianden
        border-bottom: 1px solid transparent;

        &:hover {
            color: grey; //Farven på teksten når den hovers
            border-color: grey; // Farven på streg under teksten når den hovers
        }
    }

    .branding {
       display: flex;
       align-items: center; 

       img {
        width: 80px; //str på icon Larue
        transition: .5s ease all;
       }
    }

    .navigation {
        display: flex;
        cursor: pointer;
        align-items: center;
        flex: 1;
        margin-left: 0px;
        justify-content: center; //Ændre hvor på siden de er. Lige er de 3 i midten af headeren
    }

    .navigationicons {
        display: flex;
        justify-content: right;
        cursor: pointer;
        margin-right: -40px;
    }
    .navigationicons i, .quantity{
    font-size: 20px;
    margin-left: -70px;
    margin-right: 70px;
    margin-top: 25px;
    transition: .5s ease all;

    &:hover {
            color: #9a9a9a; //Farven på teksten når den hovers
            border-color: grey; // Farven på streg under teksten når den hovers
        }

    }  

    .icon{
        display: flex;
        align-items: center;
        position: absolute;
        top: 0;
        right: 30px; //Ændre hvilke side af header den skal være på
        height: 100%; // op eller ned. Lige nu midten

        i {
            cursor: pointer;
            font-size: 30px; //str på brugermenu
            transition: .8s ease all;
        }
    }

    .icon-active {
        transform: rotate(180deg);
    }

    .dropdown-nav{
        display: flex;
        flex-direction: column;
        position: fixed;
        width: 100%;
        max-width: 200px; // hvor bred den skal på til siden
        height: 100%;
        background-color: #fff;
        top: 0; // styre den hvor meget den er på toppen
        left: 0; //Styre den hvilken side den er på

        li {
            margin-left: 45px;
            margin-top: 10px;
            .link{
                color: #161618;
            }
        }
    }

    .red a{
        color: #EF4545;
    }
}
}


    .moblie-nav-enter-active,
    .moblie-nav-leave-active {
        transition: 1s ease all;
    }

    .moblie-nav-enter-from, 
    .moblie-nav-leave-to{
        transform: translateX(-250px);
    }

    .moblie-nav-enter-to {
        transform: translateX(0);
    }


    .top-section {
    background-color: #3C412A;
    padding: 10px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  
  .main-list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .main-list li {
    margin-right: 20px;
    margin-left: 20px;
    
  }
  
  .main-list li a {
    cursor: pointer;
    color: white;
    font-size: 15px;
    padding: 10px 10px;
  }


  @media (max-width: 768px) {    
    .main-list li {
        margin-right: -30px;
        margin-left: 20px;

  }

  .main-list li a {
    font-size: 10px;
  }
    }

</style>