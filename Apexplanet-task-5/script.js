// ===============================
// Dark Mode
// ===============================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerHTML = "☀";
    }else{
        themeBtn.innerHTML = "🌙";
    }

});


// ===============================
// Products Data
// ===============================

const products = [

{
id:1,
name:"HP Laptop",
category:"Laptop",
price:55000,
image:"https://picsum.photos/id/180/300/200"
},

{
id:2,
name:"Dell Laptop",
category:"Laptop",
price:65000,
image:"https://picsum.photos/id/0/300/200"
},

{
id:3,
name:"iPhone 15",
category:"Phone",
price:85000,
image:"https://picsum.photos/id/1/300/200"
},

{
id:4,
name:"Samsung Galaxy",
category:"Phone",
price:45000,
image:"https://picsum.photos/id/20/300/200"
},

{
id:5,
name:"Apple Watch",
category:"Watch",
price:30000,
image:"https://picsum.photos/id/1062/300/200"
},

{
id:6,
name:"Boat Smart Watch",
category:"Watch",
price:5000,
image:"https://picsum.photos/id/26/300/200"
}

];


// ===============================
// Cart
// ===============================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const productContainer = document.getElementById("productContainer");
const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const totalPrice = document.getElementById("totalPrice");


// ===============================
// Show Products
// ===============================

function displayProducts(){

let search = document.getElementById("search").value.toLowerCase();

let category = document.getElementById("category").value;

let sort = document.getElementById("sort").value;

let data = [...products];

data = data.filter(product=>{

let matchName = product.name.toLowerCase().includes(search);

let matchCategory = category==="all" || product.category===category;

return matchName && matchCategory;

});

if(sort==="low"){

data.sort((a,b)=>a.price-b.price);

}

if(sort==="high"){

data.sort((a,b)=>b.price-a.price);

}

productContainer.innerHTML="";

data.forEach(product=>{

productContainer.innerHTML += `

<div class="product">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>${product.category}</p>

<p><strong>₹ ${product.price}</strong></p>

<button onclick="addToCart(${product.id})">

Add To Cart

</button>

</div>

`;

});

}


// ===============================
// Add Cart
// ===============================

function addToCart(id){

const item = products.find(product=>product.id===id);

cart.push(item);

saveCart();

showCart();

alert(item.name + " Added Successfully");

}


// ===============================
// Show Cart
// ===============================

function showCart(){

cartItems.innerHTML="";

let total = 0;

cart.forEach((item,index)=>{

total += item.price;

cartItems.innerHTML += `

<div class="cart-item">

<div>

<h3>${item.name}</h3>

<p>₹ ${item.price}</p>

</div>

<button onclick="removeCart(${index})">

Remove

</button>

</div>

`;

});

cartCount.innerHTML = cart.length;

totalPrice.innerHTML = total;

}


// ===============================
// Remove Cart
// ===============================

function removeCart(index){

cart.splice(index,1);

saveCart();

showCart();

}


// ===============================
// Local Storage
// ===============================

function saveCart(){

localStorage.setItem("cart",JSON.stringify(cart));

}


// ===============================
// Search + Filter + Sort
// ===============================

document.getElementById("search").addEventListener("keyup",displayProducts);

document.getElementById("category").addEventListener("change",displayProducts);

document.getElementById("sort").addEventListener("change",displayProducts);


// ===============================
// Load
// ===============================

displayProducts();

showCart();

console.log("Task 5 Loaded Successfully");