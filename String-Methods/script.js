// const bigint = 1234567890123456789012345678901234567890n;
// const bigintTwo = BigInt('1234567890123456789012345678901234567890n')

// New String()
// let city = new String("Mexico");
//console.log(city);

// ==> Los metodos llevan parentesis y las propidades no. 
// Metodo toUpperCase()

// let movie = 'El ATLAS'   
// console.log(movie.toUpperCase());  // => es un metodo

// console.log(movie.toLowerCase());

let pet = "Birdy the bird"
console.log(pet);
// El Indice empiesa desde 0
// console.log(pet[4]); // => Obtenemos la letra i.

// console.log(pet[pet.length - 1]); // => No es un Numero

// slice method
// Note: // Corta los elementos desde el indice 0. 
	// console.log(pet.slice(4));

	// Que empiece desde un numero y termine de cortar 
	// console.log(pet.slice(6, 10)); // <== Cortara apartir del indice 6 y cortara en el 10. 

// Split method 
// Note: // divide los elementos del string  
	// console.log(pet.split(" ")); // <== Divide los elementos conforme el string que le has pasado. 

// Includes method 
// Note: // Buscar el elemento si se encuentra en el string 
	// Regfresara un false o un true. 
	console.log(pet.includes('i'))

// Replace method 
// Note: // Remplazar el string por otro. 
console.log(pet.replace('the', 'a'));