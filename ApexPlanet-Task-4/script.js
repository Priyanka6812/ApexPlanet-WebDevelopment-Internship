// ==========================
// Dark Mode
// ==========================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeBtn.innerHTML="☀";

    }else{

        themeBtn.innerHTML="🌙";

    }

});


// ==========================
// Resume Button
// ==========================

document.querySelector(".hero button").addEventListener("click",()=>{

    alert("Resume Download Feature Coming Soon!");

});


// ==========================
// Notes App
// ==========================

let notes = JSON.parse(localStorage.getItem("notes")) || [];

const noteInput = document.getElementById("noteInput");
const noteList = document.getElementById("noteList");

function saveNotes(){

    localStorage.setItem("notes",JSON.stringify(notes));

}

function displayNotes(){

    noteList.innerHTML="";

    notes.forEach((note,index)=>{

        noteList.innerHTML+=`

        <li>

        ${note}

        <button onclick="deleteNote(${index})">

        Delete

        </button>

        </li>

        `;

    });

}

function addNote(){

    if(noteInput.value.trim()==""){

        alert("Please Enter Note");

        return;

    }

    notes.push(noteInput.value);

    noteInput.value="";

    saveNotes();

    displayNotes();

}

function deleteNote(index){

    notes.splice(index,1);

    saveNotes();

    displayNotes();

}

displayNotes();


// ==========================
// Products
// ==========================

const products=[

{

name:"HP Laptop",

category:"Laptop",

price:55000

},

{

name:"Dell Laptop",

category:"Laptop",

price:65000

},

{

name:"iPhone",

category:"Phone",

price:90000

},

{

name:"Samsung Galaxy",

category:"Phone",

price:50000

}

];

const productContainer=document.getElementById("productContainer");

const search=document.getElementById("search");

const filter=document.getElementById("filter");

function showProducts(){

productContainer.innerHTML="";

let keyword=search.value.toLowerCase();

let category=filter.value;

let filtered=products.filter(product=>{

let matchName=product.name.toLowerCase().includes(keyword);

let matchCategory=category=="all" || product.category==category;

return matchName && matchCategory;

});

filtered.forEach(product=>{

productContainer.innerHTML+=`

<div class="product">

<h3>${product.name}</h3>

<p>Category : ${product.category}</p>

<p>₹ ${product.price}</p>

</div>

`;

});

}

showProducts();

search.addEventListener("keyup",showProducts);

filter.addEventListener("change",showProducts);


// ==========================
// Scroll To Top
// ==========================

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

}

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}


// ==========================
// Console
// ==========================

console.log("Task-4 Loaded Successfully");