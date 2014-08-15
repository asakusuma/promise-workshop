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
  }
};