document.getElementById("menu-btn").addEventListener("click", function () {
  document.getElementById("mobile-menu").classList.toggle("hidden");
});

document.getElementById("contactBtn").addEventListener("click", function () {
  document.getElementById("contact").classList.remove("hidden");
  document.querySelector("main").classList.add("hidden");
  document.getElementById("shop").classList.add("hidden");
  document.getElementById("about").classList.add("hidden");
});

document.getElementById("aboutBtn").addEventListener("click", function () {
  document.getElementById("about").classList.remove("hidden");
  document.getElementById("contact").classList.add("hidden");
  document.querySelector("main").classList.add("hidden");
  document.getElementById("shop").classList.add("hidden");
});

document.getElementById("shopBtn").addEventListener("click", function () {
  document.getElementById("about").classList.add("hidden");
  document.getElementById("contact").classList.add("hidden");
  document.querySelector("main").classList.add("hidden");
  document.getElementById("shop").classList.remove("hidden");
});

document.getElementById("homeBtn").addEventListener("click", function () {
  document.getElementById("about").classList.add("hidden");
  document.getElementById("contact").classList.add("hidden");
  document.querySelector("main").classList.remove("hidden");
  document.getElementById("shop").classList.remove("hidden");
});

document.getElementById("addCart").addEventListener("click", function () {
  document.getElementById("cart-item").classList.toggle("hidden");
});

const text = document.querySelector("#shop");
let cartItems = [];
let allProducts = [];

if (text) {
  const geteCommercedata = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      allProducts = data;
      displayProducts(allProducts);
    } catch (error) {
      console.log(error);
    }
  };
  geteCommercedata();
} else {
  console.log("Error: #shop element not found.");
}

function displayProducts(products) {
  text.innerHTML = "";
  products.forEach((item) => {
    text.innerHTML += `
      <div class="bg-white p-4 h-[100%] shadow-md rounded-md">
        <img src=${item.image} class="w-62 m-auto h-62 rounded-md" alt="Product">
        <h3 class="mt-2 text-xl font-semibold">${item.title}</h3>
        <p class="text-gray-600 mt-1"><span class="font-semibold">Price:</span> $${item.price}</p>
        <p class="text-gray-600 mt-1"><span class="font-semibold">Rating: </span>${item.rating.rate}</p>
        <p class="text-gray-600 mt-1"><span class="font-semibold">Description: </span> ${item.description}</p>
        <button class="relative ml-[35%] w-32 mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 add-to-cart" data-id="${item.id}" data-image="${item.image}" data-title="${item.title}" data-price="${item.price}">Add to Cart</button>
         </div>`;
  });
  document
    .getElementById("filter-category")
    .addEventListener("change", applyFilters);
  document.querySelectorAll(".add-to-cart").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");
      const image = e.target.getAttribute("data-image");
      const title = e.target.getAttribute("data-title");
      const price = e.target.getAttribute("data-price");
      cartItems.push({ id, image, title, price, quantity: 1 });
      updatecartUI();
    });
  });
}

document.getElementById("searchBar").addEventListener("input", function (e) {
  document.getElementById("about").classList.add("hidden");
  document.getElementById("contact").classList.add("hidden");
  document.querySelector("main").classList.add("hidden");
  document.getElementById("shop").classList.remove("hidden");

  const searchText = e.target.value.toLowerCase();
  const filteredProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(searchText)
  );
  displayProducts(filteredProducts);
});

const applyFilters = () => {
  const category = document.getElementById("filter-category").value;
  const searchTerm = document.getElementById("search-input");

  let filteredProducts = allProducts;

  if (category !== "all") {
    filteredProducts = filteredProducts.filter(
      (item) => item.category === category
    );
  }

  if (searchTerm) {
    filteredProducts = filteredProducts.filter((item) =>
      item.title.toLowerCase().includes(searchTerm)
    );
  }

  displayProducts(filteredProducts);
};

function updatecartUI() {
  const Cart = document.getElementById("cart-item");
  const count = document.querySelector(".count");
  let TotalPrice = 0;

  Cart.innerHTML = "";

  if (!count) {
    return (Cart.textContent = "Your cart is empty...");
  } else {
    cartItems.forEach((item, index) => {
      count.textContent = cartItems.length;
      TotalPrice += Number(item.price) * item.quantity;
      Cart.innerHTML += `
        <div class="bg-gray-100 p-2 my-2 flex justify-between gap-4 rounded-md">
          <img src="${item.image}" class="w-10 h-10 rounded-md" alt="${item.title}">
          <button class="cursor-pointer text-xl font-bold" onclick="decrement(${index})">-</button>
          <span>${item.quantity}</span>
          <button class="cursor-pointer text-xl font-bold" onclick="increment(${index})">+</button>
          <span>${item.title} - $${item.price}</span>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700" onclick="Checkout()">Checkout</button>
        </div>`;
    });
    let p = document.createElement("p");
    p.innerHTML = `Total Price: $${TotalPrice.toFixed(2)}`;
    p.className = "text-center pt-4";
    Cart.appendChild(p);
  }
}

window.increment = function (index) {
  cartItems[index].quantity += 1;
  updatecartUI();
};

window.decrement = function (index) {
  if (cartItems[index].quantity > 1) {
    cartItems[index].quantity -= 1;
  } else {
    cartItems.splice(index, 1);
  }
  updatecartUI();
};

window.Checkout = () => {
  alert("Checkout Successfully");
};

window.ShowIndCart = ({ item }) => {
  console.log(item);
};
