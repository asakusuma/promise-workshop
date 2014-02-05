/**
 * @venus-library mocha
 * @venus-include ../../setup/promise-hello-world.js
 * @venus-include ../../exercises/promise-hello-world.js
 */

 var answer = exercise(Setup);

describe('Promise Hello World', function() {
  it('should output correct message', function(done) {
    answer(function(answer) {
      expect(answer).to.be('Hello, world!');
      done();
    });
  });
});

