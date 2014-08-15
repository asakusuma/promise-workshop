/**
 * Wait for a message AND the first click on the screen, then output the message
 */

var messageP = api.getMessage();
var clickP = api.firstClick();

RSVP.all([clickP, messageP]).then(function(results) {
  showMessage(results[1]);
}, showErrorMessage);