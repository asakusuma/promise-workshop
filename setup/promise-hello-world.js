var Setup = {
  promise: mockPromise('Hello, world!', 100),
  getMessage: function() {
    return this.promise;
  }
}