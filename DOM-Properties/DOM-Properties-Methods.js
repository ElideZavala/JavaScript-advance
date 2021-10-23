const new1 = document.getElementById('new');

// Crear un nuevo elemento HTML
let newItem = document.createElement("li");

console.log(newItem);

//*********append-Child*********
// El elemento recibe contenido
newItem.innerHTML = `Hola soy el nuevo elemento`
const list = document.querySelector('ul');
list.appendChild(newItem);

//*********Insert-Before*********
// (1).
const firstItem = document.querySelector('ul li:first-child');

// (2).
let newItem2 = document.createElement('li');
newItem2.innerHTML = "Soy el segundo elemento";

// (3).
list.insertBefore(newItem2, firstItem);