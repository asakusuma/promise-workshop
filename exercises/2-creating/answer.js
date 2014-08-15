/**
 * Complete the function so it returns a promise
 */

function getMessagePromise() {
  return new RSVP.Promise(function(f, r) {
    api.getMessage(function(err, message) {
      if (err) {
        r(err);
      } else {
        f(message);
      }
    });
  });

  /*
  // ALTERNATIVE DEFERRED SYNTAX
  var d = RSVP.defer();

  api.getMessage(function(err, message) {
    if (err) {
      d.reject(err);
    } else {
      d.resolve(message);
    }
  });

  return d.promise;
  */
};

getMessagePromise().then(showMessage, showErrorMessage);