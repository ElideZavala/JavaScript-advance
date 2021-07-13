// *-*-* Comparison Operators *-*-*

// Greater Than
// console.log(2 > 1);  //>>> true 

// Less Than
// console.log(2 < 1);  //>>> false 

// Greater Than or Equal to
// console.log( 15 >= 15); //>>> true
// console.log( 15 >= 16); //>>> false

// Less Than or Equal to
// console.log( 15 <= 15); //>>> true
// console.log( 15 <= 16); //>>> false  // <== Ignora el igual.
 
// // The == Equality Operator 
console.log(1 == 1);   // <<< true
console.log(1 == "1"); // <<< true  // <== No es un numero pero igual indica true. 
console.log("z" == "z")    // <<< true  
console.log(true == true)  // <<< true 	
console.log(false == true) // <<< false // <== En este caso hablamos de un booleano.
console.log(0 == "");      // <<< true  // <== La cadena se encuentra vacia.  
console.log(undefined == null) // <<< true <== Ambos tienen el mismo concepto pero son diferentes 
console.log(false == 0); // <<<  true <== tiene el valor de 0
console.log(true == 1); // <<<  true <== tiene el valor de 1.

// The === strict Equality Operator 
console.log(1 === 1);   // <<< true
console.log(1 === "1"); // <<< false  // <=== No es un numero(modo stricto)
console.log("z" === "z")    // <<< true  
console.log(true === true)  // <<< true 
console.log(false === true) // <<< false // <=== En este caso hablamos de un booleano.
console.log(0 === "");      // <<< false  // <=== 0 en modo stricto es un numero.  
console.log(undefined === null) // <<< false <=== Ambos tienen el mismo concepto pero son diferentes 
console.log(false === 0); // <<<  false <=== uno es boleano y el otro numero
console.log(true === 1); // <<<  false <=== uno es boleano y el otro numero

// The != Non equality Operator(-)
// console.log(1 != "1"); // <<< false
// console.log("z" != "z")    // <<< false 
// console.log("z" != "x")    // <<< true 
// console.log(true != true)  // <<< false 	
// console.log(false != true) // <<< true // <!= En este caso hablamos de un booleano.
// console.log(0 != "");      // <<< false  // <!= La cadena se encuentra vacia.  
// console.log(undefined != null) // <<< false <!= Ambos tienen el mismo concepto pero son diferentes 
// console.log(false != 0); // <<<  true <!= tiene el valor de 0
// console.log(true != 1); // <<<  true <!= tiene el valor de 1.

// The !== String Non-Equality operator
console.log(1 !== 1);   			// <<< false
console.log(1 !== "1"); 			// <<< true 
console.log("z" !== "z")    		// <<< false  
console.log(true !== true)  		// <<< false 
console.log(false !== true) 		// <<< true 
console.log(0 !== "");      		// <<< true    
console.log(undefined !== null) 	// <<< true   
console.log(false !== 0); 		// <<< true 
console.log(true !== 1); 		// <<< true  