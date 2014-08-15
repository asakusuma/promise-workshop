var person = {
  firstName: 'Derek',
  lastName: 'Brown',
  favoriteTeam: 'Eagles'
};

var api = {
  /**
   * Returns a promise that resolves an person after half a second
   * @param {function} callback - The callback
   */
  getPerson: function(cb) {
  	setTimeout(function() {
      cb(null, person);
    }, 500);
  },

  /**
   * Returns a promise that resolves a person after half a second
   * @returns {object} - Promise that resolves a name
   */
  getPersonPromise: function() {
    return mockPromise(person, 500);
  },

  /**
   * Given a person object, returns a message
   * @param {object} person - The person object
   * @returns {string} - Promise that resolves a message
   */
  getMessage: function(person, cb) {
    setTimeout(function() {
      cb(null, person.firstName + ' ' + person.lastName + ' likes the ' + person.favoriteTeam);
    }, 500);
  },

  getMessagePromise: function(person) {
    return mockPromise(person.firstName + ' ' + person.lastName + ' likes the ' + person.favoriteTeam, 500);
  },

  mapMessage: function(message) {
    return message + ', the 2nd worst team in the NFC east.';
  }
};
