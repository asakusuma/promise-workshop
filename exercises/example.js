/*

Exercise 0: Example
=================================
Given two numbers, square, then add together and return via callback
*/

define(['PromiseLib'], function(PromiseLib) {
  return function(
    Exercise
    //Exercise.pow
  ) {
    return function(num1, num2, callback) {
      var result = Exercise.square(num1) + Exercise.square(num2);
      callback(result);
    };
  };
});