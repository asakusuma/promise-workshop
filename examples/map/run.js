function name1() {
	return mockPromise('Chad', 500);
}

function name2() {
	return mockPromise('Nate', 800);
}

function name3() {
	return mockPromise('Asa', 200);
}

function concatMessages(results) {
	var out = '';
	for(var i = 0; i < results.length; i++) {
		out += results[i];
	}
	return out;
}

PromiseLibrary.map([name1(), name2(), name3()], function(item, index, arrayLength) {
	return 'Hello my name is ' + item;
}).then(concatMessages).then(showMessage);

