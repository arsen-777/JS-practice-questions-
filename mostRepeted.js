let num = 111233388887777;
let str = String(num);
let obj = {};

function mostRepeated() {
	for (let i = 0; i < str.length; i++) {
		if (!obj.hasOwnProperty(str[i])) {
			obj[str[i]] = 1;
		} else {
			obj[str[i]]++;
		}
	}

	let values = Object.values(obj);
	let res = [];
	let max = Math.max(...values);

	for (key in obj) {
		if (obj[key] === max) {
			res.push(+key);
		}
	}
	return res;
}
console.log(mostRepeated(num));
