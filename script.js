const products = [

    {
        id: 1,
        name: "Lipstick",
        category: "Cosmetics",
        price: 199,
        oldPrice: 299,
        image: "💄"
    },

    {
        id: 2,
        name: "Makeup Kit",
        category: "Cosmetics",
        price: 499,
        oldPrice: 699,
        image: "💋"
    },

    {
        id: 3,
        name: "Cute Teddy Bear",
        category: "Toys",
        price: 299,
        oldPrice: 399,
        image: "🧸"
    },

    {
        id: 4,
        name: "Toy Car",
        category: "Toys",
        price: 249,
        oldPrice: 349,
        image: "🚗"
    },

    {
        id: 5,
        name: "Earrings",
        category: "Accessories",
        price: 149,
        oldPrice: 199,
        image: "💎"
    },

    {
        id: 6,
        name: "Nail Polish",
        category: "Cosmetics",
        price: 99,
        oldPrice: 149,
        image: "💅"
    },

    {
        id: 7,
        name: "Doll",
        category: "Toys",
        price: 399,
        oldPrice: 499,
        image: "🎎"
    },

    {
        id: 8,
        name: "Hair Accessories",
        category: "Accessories",
        price: 129,
        oldPrice: 179,
        image: "🎀"
    }

];


let cart = [];

let wishlist = [];


/* Display Products */

function displayProducts(list = products) {

    const container =
        document.getElementById("productContainer");

    container.innerHTML = "";

    if (list.length === 0) {

        container.innerHTML =
            "<p>No products found 😔</p>";

        return;
    }


    list.forEach(product => {

        container.innerHTML += `

        <div class="product-card">

            <div class="product-image">
                ${product.image}
            </div>

            <div class="product-info">

                <span class="category-name">
                    ${product.category}
                </span>

                <h3>${product.name}</h3>

                <div class="price">
                    ₹${product.price}

                    <span class="old-price">
                        ₹${product.oldPrice}
                    </span>
                </div>

                <div class="product-buttons">

                    <button
                        class="add-cart"
                        onclick="addToCart(${product.id})">

                        Add to Cart

                    </button>

                    <button
                        class="wishlist-btn"
                        onclick="addToWishlist(${product.id})">

                        ♡

                    </button>

                </div>

            </div>

        </div>

        `;

    });

}


/* Add to Cart */

function addToCart(id) {

    const product =
        products.find(item => item.id === id);

    cart.push(product);

    updateCartCount();

    alert(product.name + " added to cart 🛒");

}


/* Cart Count */

function updateCartCount() {

    document.getElementById("cartCount")
        .innerText = cart.length;

}


/* Show Cart */

function showCart() {

    const popup =
        document.getElementById("cartPopup");

    const items =
        document.getElementById("cartItems");

    items.innerHTML = "";

    let total = 0;


    if (cart.length === 0) {

        items.innerHTML =
            "<p>Your cart is empty 🛒</p>";

    }


    cart.forEach((product, index) => {

        total += product.price;

        items.innerHTML += `

        <div class="cart-product">

            <span>
                ${product.image}
                ${product.name}
            </span>

            <strong>₹${product.price}</strong>

            <button onclick="removeFromCart(${index})">
                ❌
            </button>

        </div>

        `;

    });


    document.getElementById("cartTotal")
        .innerText = "Total: ₹" + total;

    popup.style.display = "flex";

}


/* Remove Cart Item */

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCartCount();

    showCart();

}


/* Wishlist */

function addToWishlist(id) {

    const product =
        products.find(item => item.id === id);

    if (!wishlist.some(item => item.id === id)) {

        wishlist.push(product);

        alert(product.name +
              " added to wishlist ❤️");

    } else {

        alert("Already in wishlist ❤️");

    }

}


/* Show Wishlist */

function showWishlist() {

    const popup =
        document.getElementById("wishlistPopup");

    const items =
        document.getElementById("wishlistItems");

    items.innerHTML = "";


    if (wishlist.length === 0) {

        items.innerHTML =
            "<p>Your wishlist is empty ❤️</p>";

    }


    wishlist.forEach(product => {

        items.innerHTML += `

        <div class="cart-product">

            <span>
                ${product.image}
                ${product.name}
            </span>

            <strong>₹${product.price}</strong>

        </div>

        `;

    });


    popup.style.display = "flex";

}


/* Close Popup */

function closePopup() {

    document.querySelectorAll(".popup")
        .forEach(popup => {

            popup.style.display = "none";

        });

}


/* Category Filter */

function filterCategory(category) {

    if (category === "Deals") {

        const deals =
            products.filter(product =>
                product.oldPrice > product.price
            );

        displayProducts(deals);

    } else {

        const filtered =
            products.filter(product =>
                product.category === category
            );

        displayProducts(filtered);

    }

    document.getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* Search */

function searchProducts() {

    const search =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    const result =
        products.filter(product =>
            product.name.toLowerCase()
                .includes(search)
        );

    displayProducts(result);

    document.getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* Enter Key Search */

document.getElementById("searchInput")
    .addEventListener("keypress", function(event) {

        if (event.key === "Enter") {

            searchProducts();

        }

    });


/* Scroll */

function scrollToProducts() {

    document.getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* Initial Products */

displayProducts();