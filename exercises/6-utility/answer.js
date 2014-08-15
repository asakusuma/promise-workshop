/**
 * Print out the array of promise messages. Experiment with map() and hash(). This is a freeform exercise.
 *
 * https://github.com/tildeio/rsvp.js/
 */

function nameToMessage(item) {
  return 'Hello my name is ' + item;
};

var arrayOfMessagePromises = RSVP.map([
  api.getName1(),
  api.getName2(),
  api.getName3()
], nameToMessage).then(_.partial(_.each, _, appendMessage));

var hashOfMessagePromises = RSVP.hash({
  chad: api.getName1(),
  nate: api.getName2(),
  asa: api.getName3()
}).then(_.partial(api.mapHash, _, nameToMessage)).then(function(messages) {
  appendMessage(messages.chad);
  appendMessage(messages.nate);
  appendMessage(messages.asa);
});