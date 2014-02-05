function getMessage() {
	return mockPromise('Hello, world!', 500);
}

getMessage().then(showMessage);

