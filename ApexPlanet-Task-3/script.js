// =========================
// Welcome Button
// =========================

function showAlert() {
    alert("Welcome to My Responsive Website!");
}

// =========================
// Hero Image Auto Slider
// =========================

const heroImages = [
    "https://picsum.photos/id/1015/500/350",
    "https://picsum.photos/id/1016/500/350",
    "https://picsum.photos/id/1018/500/350",
    "https://picsum.photos/id/1020/500/350"
];

let heroIndex = 0;

setInterval(() => {

    heroIndex++;

    if(heroIndex >= heroImages.length){
        heroIndex = 0;
    }

    document.getElementById("slider").src = heroImages[heroIndex];

},3000);


// =========================
// Gallery Images
// =========================

const gallery = [

"https://picsum.photos/id/1025/700/400",

"https://picsum.photos/id/1035/700/400",

"https://picsum.photos/id/1043/700/400",

"https://picsum.photos/id/1050/700/400"

];

let current = 0;

function nextImage(){

current++;

if(current >= gallery.length){

current = 0;

}

document.getElementById("galleryImage").src = gallery[current];

}

function previousImage(){

current--;

if(current < 0){

current = gallery.length-1;

}

document.getElementById("galleryImage").src = gallery[current];

}


// =========================
// Random Joke API
// =========================

async function getJoke(){

const joke = document.getElementById("jokeText");

joke.innerHTML="Loading Joke...";

try{

const response = await fetch("https://official-joke-api.appspot.com/random_joke");

const data = await response.json();

joke.innerHTML = data.setup + "<br><br><strong>" + data.punchline + "</strong>";

}

catch(error){

joke.innerHTML="Unable to load joke.";

}

}


// =========================
// Card Hover Effect
// =========================

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.05)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) scale(1)";

});

});


// =========================
// Console Message
// =========================

window.onload=function(){

console.log("Task-3 Loaded Successfully");

};