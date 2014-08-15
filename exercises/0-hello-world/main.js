/**
 * Get the name asynchronously and print out a greeting.
 *
 * Checkout setup.js for the available API
 */
api.getName(function(err, name) {
  if (!err) {
    showMessage('Hello, ' + name + '!');
  }
});
