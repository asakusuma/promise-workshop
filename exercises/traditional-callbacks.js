/*

Exercise 1: Traditional Callbacks
=================================
Produce a function that, given an array of names and a callback,
will produce an array of emails, in order.
*/

define(['PromiseLib'], function(PromiseLib) {
  return function(
    Exercise
    //Exercise.getEmail
  ) {
    return function(names, callback) {

      //Fix this!
      Exercise.getEmail({
        name: names[0]
      }, function(name) {
        callback([name]);
      });
    };
  };
});