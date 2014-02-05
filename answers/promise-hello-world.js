/*

Exercise 2: Promise Hello World
=================================
Produce a function that, given an array of names and a callback,
will produce an array of emails, in order.
*/

define(['PromiseLib'], function(PromiseLib) {
  return function(
    Exercise
    //Exercise.getMessage
  ) {
    return function(callback) {
      var promise = Exercise.getMessage();

      promise.then(callback);
    };
  };
});