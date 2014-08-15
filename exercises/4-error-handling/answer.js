/**
 * Print out all the error messages
 */

RSVP.resolve().then(api.throwError, appendErrorMessage).then(null, appendErrorMessage);
RSVP.resolve().then(api.causeError, appendErrorMessage).then(null, appendErrorMessage);
RSVP.resolve().then(api.returnError, appendErrorMessage).then(null, appendErrorMessage);