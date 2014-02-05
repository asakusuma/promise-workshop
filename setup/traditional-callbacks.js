var Setup = {
  getEmail: function(request, callback) {
    var respond = function(name) {
      callback(name);
    }

    if(request.name == 'Vinay') {
      mockCallback('BigCheese@linkedin.com', 300, respond);
    } else if(request.name == 'Jakob') {
      mockCallback('Jakobo@linkedin.com', 800, respond);
    } else if(request.name == 'Sarah') {
      mockCallback('sarah@linkedin.com', 100, respond);
    } else {
      mockCallback('employee@linkedin.com', 500, respond);
    }
  }
}