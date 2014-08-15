var person = {
  firstName: 'Derek',
  lastName: 'Brown',
  favoriteTeam: 'Eagles'
};

var api = {
  getName1: function() {
    return mockPromise('Chad', 500);
  },

  getName2: function() {
    return mockPromise('Nate', 800);
  },

  getName3: function() {
    return mockPromise('Asa', 200);
  },

  mapHash: function (obj, f_val) { 
    return _.object(_.keys(obj), _.map(obj, f_val));
  }
};