"use strict";

function add(accl, val) {
	return accl + val;
}

Array.prototype.fakeReduce = function (cb, accl) {
	let i = 0;
	if (arguments.length < 2) {
		i = 1;
		accl = this[0];
	}
	for (; i < this.length; i++) {
		accl = cb(accl, this[i], i, this);
	}
	return accl;
};
let a = [1, 2, 3, 4];

console.log(a.reduce(add), a.fakeReduce(add));
