/**
 * Print out all the rejection reasons messages
 */

RSVP.resolve().then(api.throwError, appendErrorMessage);
RSVP.resolve().then(api.causeError, appendErrorMessage);
RSVP.resolve().then(api.returnError, appendErrorMessage);