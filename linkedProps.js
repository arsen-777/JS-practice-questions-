"use strict";
let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null,
			},
		},
	},
};

const objTree = (obj) => {
	console.log(obj.value);
	if (obj.next) {
		objTree(obj.next);
	}
};

objTree(list);
