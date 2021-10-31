const textInput = document.querySelector('input[type="text"]');

// (1) keydown
// textInput.addEventListener('keydown', function() {  // <== Al presionar cualquer tecla
// 	console.log('keydown')
// })

// (2) keyup
// textInput.addEventListener('keyup', function() { // <== Al dejar de presionar la tecla
// 	console.log('keyup')
// })

// (3) keypress
// textInput.addEventListener('keypress', function() { // <== Se activa al presionar la tecla, pero no contara cuando se eliminan espacios
// 	console.log('keypress')
// })

textInput.addEventListener('click', function(e) { // <== Se activa al presionar la tecla, pero no contara cuando se eliminan espacios
	console.log(e.target);
	console.log(e.clientX);
	console.log(e.clientY);
})