
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
    cartOverlay.innerHTML = '<h2>Shopping Cart</h2>';
    
    if (shoppingCart.length === 0) {
        cartOverlay.innerHTML += '<p>Your cart is empty.</p>';
    } else {
        for (let i = 0; i < shoppingCart.length; i++) {
            const { product, price } = shoppingCart[i];
            cartOverlay.innerHTML += `<p>${product} - DKK ${price} <button onclick="removeFromCart(${i})">Remove</button></p>`;
        }
        cartOverlay.innerHTML += `<p>Total: DKK ${totalCost}</p>`;
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

    // Function to show the overlay
    function showOverlay() {
        overlay.style.display = 'flex'; // Assuming you want a flex container
    }

    // Function to hide the overlay
    function hideOverlay() {
        overlay.style.display = 'none';
    }

    // Add click event listener to the close button
    closeBtn.addEventListener('click', function () {
        hideOverlay();
    });

    // You can trigger the overlay to show by calling showOverlay() function
    // For example: showOverlay();
});
