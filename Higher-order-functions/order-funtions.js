// function repeat(x) {
// 	x();
// 	x();
// }

// function num() {
// 	console.log(2 + 5);
// }

// repeat(num); // Funtions accepting other functions as returned values

// Functions accepting other functions as returned values => factory function 

// function sum(x) {
// 	return function (y) {
// 		return x + y;
// 	}
// }

// let num1 = sum(5);
// let num2 = sum(115); 
// console.log(num1(4));
// console.log(num2(551));

// ***********Callback functions*****************
// Example 1
setTimeout(function () {
	console.log(2 + 2)
}, 500);

const btn = document.querySelector('button');
const para = document.querySelector('p')
btn.addEventListener('click', function() {
	para.classList.add("active");
})