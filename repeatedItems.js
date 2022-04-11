let arr = [1, 1, 4, 1, 5, 7, 1, 2, 3, 4, 2, 1];
const repeatedItem = (arr) => {
	return arr.reduce((accl, el, i) => {
		if (i === arr.indexOf(el)) {
			accl.push(el);
		}
		return accl;
	}, []);
};

console.log(repeatedItem(arr));
