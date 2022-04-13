// MODIFICATION BG CHECKBOX 

var checkbox = document.getElementById('toggle');

checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    checkbox.classList.add("switch_light");
    console.log(checkbox); //Pour contrôle --> Ajoute classe a l'input pas au label
  } else {
    alert('not checked');
  }
})