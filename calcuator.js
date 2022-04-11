"use strict";

let calc = function (firstMember, ...numbers) {
	return numbers.reduce(function (agrr, val) {
		if (firstMember === "+") {
			return agrr + val;
		} else if (firstMember === "-") {
			return agrr - val;
		} else if (firstMember === "*") {
			return agrr * val;
		} else if (firstMember === "/") {
			return agrr / val;
		} else {
			return agrr + val;
		}
	});
};

console.log(calc("*", 1, 2));
console.log(calc("-", 1, 2));
console.log(calc("+", 1, 2));
console.log(calc("/", 1, 2));
