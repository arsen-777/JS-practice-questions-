const multiple = (...number) => {
	return number.reduce((accl, val) => {
		return (accl *= val);
	});
};

console.log(multiple(1, 2, 3, 4));
console.log(multiple(4));
