// function repeat(x) {
// 	x();
// 	x();
// }

// function num() {
// 	console.log(2 + 5);
// }

// repeat(num); // Funtions accepting other functions as returned values

// Functions accepting other functions as returned values => factory function 

function sum(x) {
	return function (y) {
		return x + y;
	}
}

let num1 = sum(5);
console.log(num1(4));