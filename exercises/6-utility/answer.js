/**
 * Print out the array of promise messages. Experiment 
 *
 * https://github.com/tildeio/rsvp.js/
 */

function nameToMessage = function(item) {
  return 'Hello my name is ' + item;
};

var arrayOfMessagePromises = RSVP.map([
  api.getName1(),
  api.getName2(),
  api.getName3()
], nameToMessage);

