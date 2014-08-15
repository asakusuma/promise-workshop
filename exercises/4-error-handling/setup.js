var api = {
  /**
   * Throws a JS error
   */
  throwError: function() {
    throw 'I threw an error!';
  },

  /**
   * Causes a JS error
   */
  causeError: function() {
    someUndefined++;
  },

  /**
   * Returns a rejected promise
   */
  returnError: function() {
    return RSVP.reject('A rejected promise');
  }
};
