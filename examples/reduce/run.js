function chuck1() {
	return mockDefer(5, 500);
}

function chuck2() {
	return mockDefer(10, 500);
}

PromiseLibrary.reduce([chuck1(), chuck2()], function(total, current, index, arrayLength) {
	return total + current;
}, 0).then(showMessage);

