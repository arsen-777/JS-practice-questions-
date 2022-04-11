"use strict";
const findStr = (str, sub) => {
	if (str.includes(sub)) {
		return true;
	}
	return false;
};

console.log(findStr("Hello", "ell"));
