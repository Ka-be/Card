// MODIFICATION BG CHECKBOX 

var checkbox = document.getElementById('checkbox'); //Récupération du statut de la checkbox
var label = document.getElementById('label'); //Récupération du statut du label

checkbox.addEventListener('change', (event) => { //Quand la checkbox change de statut
    if (event.currentTarget.checked) { //Si la checkbox est checkée
        label.classList.add("switch_light"); //Alors ajoute la classe switch_light au label
        console.log(checkbox); //Pour contrôle 
    } 
    else {
        label.classList.remove("switch_light"); //Sinon, enlève la classe switch_light
        console.log(checkbox); //Pour contrôle
    }
})