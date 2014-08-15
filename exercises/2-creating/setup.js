var api = {
  /**
   * Returns a promise that resolves an message after half a second
   * @param {function} callback - The callback
   */
  getMessage: function(cb) {
  	setTimeout(function() {
      cb(null, 'I love promises!');
    }, 500);
  }
};
