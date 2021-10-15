// let calcNums = function (z, w) {
// 	return (z + w) / (z - w);
// };

// console.log(calcNums(15, 25));

// let calcNums2 = (z, w) => {
// 	return (z + w) / (z - w);
// };

// console.log(calcNums(15, 25));
// console.log(calcNums2(15, 25));

//****Funcrions in Arrays */

function avgMikeScore(score, mikeScore) {
	return (mikeScore + 5) / score;
}

let avgJoelScore = function (score, joeyScore) {
	return joeyScore / score;
}

// const scores = [avgMikeScore, avgJoelScore];

// for(let i = 0; i < scores.length; i++) {
// 	let result = scores[i](100, 20);
// 	console.log(result)
// }

// for of loop
// for (let avgScore of scores) {
// 		let result = avgScore(100, 20);
// 		console.log(result  )
// } 

//****Funcrions as objects Properties
const scores = {
	mikeScore: avgMikeScore,
	joelScore: avgJoelScore
};


console.log(scores.mikeScore(100, 20));
console.log(scores.joelScore(100, 20));