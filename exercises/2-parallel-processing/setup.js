var api = {
  /**
   * Returns a promise that resolves a name after half a second
   * @param {function} callback - The callback
   * @returns {object} - Promise that resolves a name
   */
  getName: function(cb) {
  	setTimeout(function() {
      cb(null, 'Vinay')
    }, 500);
  },

  /**
   * Returns a promise that resolves a name after half a second
   * @returns {object} - Promise that resolves a name
   */
  getNamePromise: function() {
    return mockPromise('Vinay', 500);
  },

  /**
   * Returns a promise that resolves a greeting after half a second
   * @param {function} callback - The callback
   * @returns {object} - Promise that resolves a greeting
   */
  getGeeting: function(cb) {
    setTimeout(function() {
      cb(null, 'Hey there, ')
    }, 500);
  },

  /**
   * Returns a promise that resolves a greeting after half a second
   * @returns {object} - Promise that resolves a greeting
   */
  getGreetingPromise: function() {
    return mockPromise('Hey there, ', 500);
  },

  /**
   * Returns a promise that resolves a signature after half a second
   * @param {function} callback - The callback
   * @returns {object} - Promise that resolves a signature
   */
  getSignature: function(cb) {
    setTimeout(function() {
      cb(null, '-Potts')
    }, 500);
  },

  /**
   * Returns a promise that resolves a signature after half a second
   * @returns {object} - Promise that resolves a signature
   */
  getGreetingPromise: function() {
    return mockPromise('-Potts', 500);
  }
};
