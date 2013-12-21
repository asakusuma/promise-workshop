function getMessage() {
	return mockDefer('Hello, world!', 500);
}

getMessage().then(showMessage);

