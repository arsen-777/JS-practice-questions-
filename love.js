"use strict";
const uppercase = (str) => {
	let newStr = str.split(" ");
	return newStr
		.map((el) => {
			return el[0].toUpperCase() + el.slice(1);
		})
		.join(" ");
};

console.log(uppercase("i love yow"));
