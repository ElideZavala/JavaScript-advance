
// Includes method
// TODO: .includes() =>  si se encuntra la palabra dada regresa true, si no regresa false. 
const moods1 = ['happy', 'sad', 'satisfied'];
// console.log(moods1.includes('happy'));       // => true
// console.log(moods1.includes('mal'));         // => false

// concat method
// TODO: .concat() =>  combina o fusiona dos o mas array juntos. 
const moods2 = ['frustrated', 'uncertain', 'relaxed'];
// console.log(moods1.concat(moods2));
// console.log(moods2.concat(moods1));

// not allowed => error
 

// reverse method 
// TODO: .reverse() => Invertir el array 
// console.log(moods1.reverse());

// join method 
// TODO: .join() => Union de todos los elementos o separacion de estos pediate , . o lo que le pases en el join
// console.log(moods1.join(''));
// console.log(moods1.join('-'));
// console.log(moods1.join(','));

// Nesting: arrays of arrays
const julio = [
    ['de animales a dioses', 'las riquezas de las naciones', 'los miserables', 'meditaciones', 'psicologia oculta','la tabla de las esmeraldas'],
    ['Goku','Vegeta', 'krilin', 'bills'],
    ['Frezeer','Zell', 'Doribi', 'Zans'],
    ['Rant','Riu', 'Flren', 'Artur']
]

// console.log(julio[0])      // <== Accedemos al arreglo.
console.log(`${julio[1][3]} is dios de la destruccion`);  // <== Accedemos a un elemento del arreglo.

