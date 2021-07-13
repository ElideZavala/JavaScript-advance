// shift method  >> Al inicio del arreglo
// TODO: Elimina el primer elemento del arreglo.
// let movies = ["Forma del agua", "memento"];
// console.log(movies);
// movies.shift();
// console.log(movies)

// unshift method >> Al inicio del arreglo
// TODO: Agrega un primer elemento al arreglo.
// movies.unshift('El dinosaurio')
// console.log(movies);

// pop method >> Al final del arreglo
// TODO: Elimina el ultimo elemento del arreglo.
// movies.pop();
// console.log(movies);

// push method >> Al final del arreglo.
// TODO: Agrega un elemento al inicio del arreglo.
// movies.push('El Atlas');
// console.log(movies);

let numbers = [1, 2, 3, 4, 54, 115, 789, 324];
console.log(numbers);

// slide method => slice(starding index, ending index);
// TODO: Nos corta el arreglo dependiendo las indicaciones dadas.
// let num1 = numbers.slice(1, 4) // <== captura del indice inicial hasta el indice final. pero no se trae el ultimo
// let num1 = numbers.slice(-3, -1) // <== Cuando lo colocamos en negativo se cuenta al reves el arreglo.
// console.log(num1)

// splice method => splice(starting index, number of items to be removed)
// TODO: Elimina los elementos indicados 
let num2 = numbers.splice(0, 4)
console.log(num2);  	// <== Tenemos un nuevo arreglo con los valores cortados
console.log(numbers); 	// <== Los valores cortados no aparecen en el arreglo original


