// let calcNums = function (z, w) {
// 	return (z + w) / (z - w);
// };

// console.log(calcNums(15, 25));

// let calcNums2 = (z, w) => {
// 	return (z + w) / (z - w);
// };

// console.log(calcNums(15, 25));
// console.log(calcNums2(15, 25));

function avgMikeScore(score, mikeScore) {
	return (mikeScore + 5) / score;
}

let avgJoelScore = function (score, joeyScore) {
	return joeyScore / score;
}

const scores = [avgMikeScore, avgJoelScore];

for(let i = 0; i < scores.length; i++) {
	let result = scores[i](100, 20);
	console.log(result)
}

