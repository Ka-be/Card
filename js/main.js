// MODIFICATION BG CHECKBOX / BG GENERAL et COULEUR TYPO

var checkbox = document.getElementById('checkbox'); //Récupération du statut de la checkbox
var label = document.getElementById('label'); //Récupération du statut du label
var main = document.getElementById('main'); // Récup statut main
var socials = document.getElementById('socials');
var moon = document.getElementById('indicator-moon');
var sun = document.getElementById('indicator-sun');

checkbox.addEventListener('change', (event) => { //Quand la checkbox change de statut
    if (event.currentTarget.checked) { //Si la checkbox est checkée
        label.classList.add("switch_light"); //Alors ajoute la classe switch_light au label
        main.classList.add("main_light"); // Alors ajoute la classe main-light au main
        socials.classList.add("dark-element"); // Ajoute dark-element aux elements socials
        moon.classList.add("dark-element"); // Ajoute dark-element a l'élément moon
        sun.classList.add("dark-element"); // Ajoute dark-element a l'élément sun
        
    } 

    else {
        label.classList.remove("switch_light"); //Sinon, enlève la classe switch_light
        main.classList.remove("main_light"); //Sinon enlève la classe main-light au main
        socials.classList.remove("dark-element");
        moon.classList.remove("dark-element");
        sun.classList.remove("dark-element");
    }
})







// Changement de photo au clic

var changePicture // To be defined