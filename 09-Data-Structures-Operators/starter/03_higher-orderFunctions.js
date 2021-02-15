// let total = 0, count = 1;
// while (count <= 10) {
//     total += count;
//     count += 1;
// }
// console.log(total);

// TODO Abstraction



// * High Order Functions

function greaterThan(n) {
	return m => m > n;
}

let greaterThan10 = greaterThan(10);
// console.log(greaterThan10(9));

function noisy(f) {
	return (...args) => {
		console.log("calling with", args);
		let result = f(...args);
		console.log("called with", args, ", returned", result);
		return result;
	};
}
// noisy(Math.min)(3, 4, 3);
// → calling with [3, 2, 1]

// function unless(test, then) {
//     if (!test) then();
// }
// repeat(3, n => {
//     unless(n % 2 == 1, () => {
//         console.log(n, "is even");
//     });
// });


const myFriends = [{name: 'Kevin', alive: true}];

// console.log(myFriends.filter(friend => friend.alive === true));

const myNumbers = [1,2,3,4]

console.log(myNumbers.reduce((a, b) => a + b, 0));
