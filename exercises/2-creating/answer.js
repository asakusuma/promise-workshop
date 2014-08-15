/**
 * Fetch the person, fetch the message, map the message, print the message
 */

api.getPersonPromise()
  .then(api.getMessagePromise)
  .then(api.mapMessage)
  .then(showMessage);
