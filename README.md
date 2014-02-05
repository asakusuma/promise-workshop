Promise Workshop
================
Learn about JavaScript promises!

This workshop is an exercise-based workshop. Each exercise can be checked with a set of tests. You'll need [VenusJS](http://venusjs.org) and [Mocha](http://visionmedia.github.io/mocha/) to run the tests. Complete the exercises in **./exercises/*{exercise-name}*.js**. Then check your work by running **venus run -t tests/specs/*{exercise-name}*.js -n**.

What is a Promise?
-------------
A promise is an object that represents a potentially asynchronous operation. It's simply an object oriented way to setup and perform async calls. In other words, it's a better alternative to the traditional method of kicking off an operation by calling a function and passing in a callback function as a parameter.

Lesson 1: What's lacking about traditional callbacks?
-------------
Consider the following example:

getEmail({
  name: 'Asa'
}, function(err, email) {
  if(err) {
    console.log("We don't know your email!");
  } else {
    console.log('Your email is: ' + email);
  }
});

We have a function that makes an async call to a server to determine an email, given a name. For a simple case like this, our traditional callback method is fine. However, let's think about a few complications:

* What if I want to kick off the request to retrieve the email, but I don't yet know what function should be called once the request comes back?
* What if I want to make a batch request to retrieve the emails for 10 different names?
* What if, later in code execution, I want to use the email for a given person? How do I know if the email request has finished?
* What if, once I get an email, I want to make a second request that depends on the email?
* Given the previous situation, what if I don't want the email callback to know anything about the second request?

These are just a few issues that can be problematic for traditional callbacks. The solutions are messy. To avoid messy solutions, developers often settle for in-efficient solutions.

To get a better idea of the downsides of callbacks, let's complete the first exercise.

Exercise 1: Traditional Callbacks - *exercise/traditional-callbacks.js*
---------------------------------
For this exercise, you'll need to complete a function that can process multiple async operations in parallel, before returning the combined result.

Lesson 2: Enter Promises!
-------------------------
Promises aleviate some of the major pain points of traditional callbacks. Here are a few of the main principles behind promises:
* Represent async operations as objects
* Encourage easy composition, conjunction, interoperability of operation objects
* Fail gracefully, debug easily

At the core, a promise is simply an object with a **.then()** method. You use the **.then()** method to attach callback methods to the operation. When the operation completes, any methods attached via **.then()** will be called. When the operation behind a promise is completed, we would say that the promise has been **resolved**. If the operation completes successfully, we say that the promise is both **resolved** and **fulfilled**. When a promise is fulfilled, there must be a **fulfillment value**. That **fulfillment value** is always the one and only argument passed to callbacks attached with the **.then()** method.

There's a lot more to promises, but the simple **.then()** invocation is the essence of the promise. Now let's try it out!

Exercise 2: Promise Hello World - *exercise/promise-hello-world.js*
---------------------------------
For this exercise, you'll need to complete a function that can consume a promise and pass the result to a callback.