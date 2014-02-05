/*

Exercise 1: Traditional Callbacks
=================================
Produce a function that, given an array of names and a callback,
will produce an array of emails, in order.
*/

define(['PromiseLib'], function(PromiseLib) {
  return function(

    //Exercise.getEmail
    Exercise
  ) {

    return function(names, callback) {
      var done = 0;
      var result = [];

      for(var i = 0; i < names.length; i++) {
        Exercise.getEmail({
          name: names[i]
        }, (function(index) {
          return function(email) {
            result[index] = email;
            done++;
            if(done == names.length) {
              callback(result);
            }
          };
        })(i));
      }
    };
  };
});