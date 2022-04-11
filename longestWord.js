"use strict";
const longestString = (str) => {
	let arr = str.split(" ");
	return arr.reduce((accl, el) => {
		if (accl.length < el.length) {
			accl = el;
		}
		return accl;
	});
};

console.log(longestString("Web Development Tutorial"));
