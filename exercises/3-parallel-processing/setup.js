var api = {
  /**
   * Returns a promise that resolves when the user clicks the screen
   * If no action is taken after 3 seoncds, will reject
   * @returns {object} - Promise
   */
  firstClick: function() {
  	var d = RSVP.defer();

    document.body.addEventListener("click", function() {
      d.resolve();
    }, false);

    setTimeout(function() {
      d.reject('You have 3 seconds to click');
    }, 3000);

    d.promise.then(function() {
      console.log('Click fulfilled');
    }, function() {
      console.error('Click rejected');
    });

    return d.promise;
  },

  /**
   * Returns a promise that resolves a message after 2 seconds
   * @returns {object} - Promise that resolves a signature
   */
  getMessage: function() {
    return mockPromise('Hi there, you clicked the screen!', 2000).then(function(message) {
      console.log('Message fulfilled');
      return message;
    });
  }
};
