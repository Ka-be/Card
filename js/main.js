// MODIFICATION BG CHECKBOX 

var checkbox = document.getElementById('checkbox'); //Récupération du statut de la checkbox
var label = document.getElementById('label'); //Récupération du statut du label
var main = document.getElementById('main') // Récup statut main

checkbox.addEventListener('change', (event) => { //Quand la checkbox change de statut
    if (event.currentTarget.checked) { //Si la checkbox est checkée
        label.classList.add("switch_light"); //Alors ajoute la classe switch_light au label
        main.classList.add("main_light"); // Alors ajoute la classe main-light au main
        console.log(checkbox); //Pour contrôle 
    } 
    else {
        label.classList.remove("switch_light"); //Sinon, enlève la classe switch_light
        main.classList.remove("main_light"); //Sinon enlève la classe main-light au main
        console.log(checkbox); //Pour contrôle
    }
})