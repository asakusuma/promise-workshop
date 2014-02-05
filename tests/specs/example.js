/**
 * @venus-library mocha
 * @venus-include ../../setup/example.js
 * @venus-include ../../exercises/example.js
 */

 var answer = exercise(Setup);

describe('Excercise example', function() {
  it('should add two squared numbers', function(done) {
    answer(3, 2,function(answer) {
      expect(answer).to.be(13);
      done();
    });
  });
});

