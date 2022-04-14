// MODIFICATION BG CHECKBOX / BG GENERAL et COULEUR TYPO

var checkbox = document.getElementById('checkbox'); //Récupération du statut de la checkbox
var label = document.getElementById('label'); //Récupération du statut du label
var main = document.getElementById('main'); // Récup statut main
var bright = document.getElementsByClassName('indicator'); //Ajouter un Array ? Brightness a modifier sur la classe indicator


checkbox.addEventListener('change', (event) => { //Quand la checkbox change de statut
    if (event.currentTarget.checked) { //Si la checkbox est checkée
        label.classList.add("switch_light"); //Alors ajoute la classe switch_light au label
        main.classList.add("main_light"); // Alors ajoute la classe main-light au main
    } 

    else {
        label.classList.remove("switch_light"); //Sinon, enlève la classe switch_light
        main.classList.remove("main_light"); //Sinon enlève la classe main-light au main
    }
})

