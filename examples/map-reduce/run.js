function name1() {
	return mockPromise('Chad', 500);
}

function name2() {
	return mockPromise('Nate', 800);
}

function name3() {
	return mockPromise('Asa', 200);
}

function mapFunc(item, index, arrayLength) {
	return 'Hello my name is ' + item;
}

function reduceFunc(total, current, index, arrayLength){
	return total + current + '<br />';
}

PromiseLibrary.map([name1(), name2(), name3()], mapFunc).reduce(reduceFunc, '').then(showMessage);
