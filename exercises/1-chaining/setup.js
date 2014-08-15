var people = {
  1: {
    firstName: 'Andrew',
    lastName: 'Potts',
    boss: 2
  },
  2: {
    firstName: 'Andy',
    lastNAme: 'Lottman',
    boss: 3
  },
  3: {
    firstName: 'Big',
    lastName: 'Cheese',
    boss: 4
  }
};

var api = {
  /**
   * Returns a promise that resolves an employee after half a second
   * @param {function} callback - The callback
   * @param {function} callback - The callback
   * @returns {object} - Promise that resolves a name
   */
  getEmployee: function(id, cb) {
  	setTimeout(function() {
      var person = people[id];
      if (person) {
        cb(null, person);
      } else {
        cb('Employee not found');
      }
    }, 500);
  },

  /**
   * Returns a promise that resolves a name after half a second
   * @returns {object} - Promise that resolves a name
   */
  getEmployeePromise: function(id) {
    var person = people[id];
    if (person) {
      return mockPromise(person, 500);
    } else {
      return mockPromiseReject('Employee not found', 500);
    }
  }
};
