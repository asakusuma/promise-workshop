/**
 * Fetch the person, fetch the message, map the message, print the message
 */

api.getPerson(function(err, person) {
  api.getMessage(person, function(err, message) {
    showMessage(api.mapMessage(message));
  });
});
