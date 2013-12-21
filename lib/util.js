function mockDefer(value, delay) {
	var d = PromiseLibrary.defer();
	setTimeout(function() {
		d.resolve(value);
	}, delay);
	return d.getPromise();
}

function mockDeferReject(reason, delay) {
	var d = PromiseLibrary.defer();
	setTimeout(function() {
		d.reject(reason);
	}, delay);
	return d.getPromise();
}

function showMessage(message) {
	document.getElementById('message').innerHTML = message;
}

function appendMessage(message) {
	document.getElementById('message').innerHTML += message;
}