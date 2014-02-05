/*

Exercise 2: Promise Hello World
=================================
Produce a function that, given a callback, will pass in
the message result of the promise returned by Exercise.getMessage()
*/

define(['PromiseLib'], function(PromiseLib) {
  return function(
    Exercise
    //Exercise.getMessage
  ) {
    return function(callback) {
      var promise = Exercise.getMessage();

      //Fix this!
      callback('I dunno');
    };
  };
});