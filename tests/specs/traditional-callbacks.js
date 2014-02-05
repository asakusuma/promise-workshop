/**
 * @venus-library mocha
 * @venus-include ../../setup/traditional-callbacks.js
 * @venus-include ../../exercises/traditional-callbacks.js
 */

 var answer = exercise(Setup);

describe('Traditional callback exercise', function() {
  it('should work for a single name', function(done) {
    answer(['Vinay'], function(answer) {
      expect(answer[0]).to.be('BigCheese@linkedin.com');
      done();
    });
  });

  it('should work for two names', function(done) {
    answer(['Sarah', 'Vinay'], function(answer) {
      expect(answer[0]).to.be("sarah@linkedin.com");
      expect(answer[1]).to.be("BigCheese@linkedin.com");
      done();
    });
  });

  it('should work for two names in order', function(done) {
    answer(['Vinay', 'Sarah'], function(answer) {
      expect(answer[1]).to.be("sarah@linkedin.com");
      expect(answer[0]).to.be("BigCheese@linkedin.com");
      done();
    });
  });

  it('should work for three names in order', function(done) {
    answer(['Vinay', 'Sarah', 'Jakob'], function(answer) {
      expect(answer[2]).to.be("Jakobo@linkedin.com");
      expect(answer[1]).to.be("sarah@linkedin.com");
      expect(answer[0]).to.be("BigCheese@linkedin.com");
      done();
    });
  });
});

