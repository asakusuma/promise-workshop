/**
 * Complete the function so it returns a promise
 *
 *  Promise constructor: RSVP.Promise
 *  Deferred factory function: RSVP.defer
 */

function getMessagePromise() {
  return mockPromiseReject('Implement me!', 0);
};

getMessagePromise().then(showMessage, showErrorMessage);