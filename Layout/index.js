const home = document.querySelector('#Home');
const zpotify = document.querySelector('#Zpotify');
const whatzapp = document.querySelector('#Whatzapp');

home.addEventListener('click',funcionHome);
zpotify.addEventListener('click',funcionZpotify);
whatzapp.addEventListener('click',funcionwhatZapp);

function funcionHome() {
    document.getElementById("dinamico").src = "../Home/index.html";    
}

function funcionwhatZapp() {
    document.getElementById("dinamico").src = "../Whatzapp/index.html";    
}

function funcionZpotify() {
    console.log("Abre Zpotify");
   document.getElementById("dinamico").src = "../Zpotify/index.html";   
}



