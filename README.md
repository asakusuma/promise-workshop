Promise Workshop
================
Learn about JavaScript promises!

This workshop is an exercise-based workshop. Each exercise can be checked with a set of tests. You'll need [VenusJS](http://venusjs.org) and [Mocha](http://visionmedia.github.io/mocha/) to run the tests. Complete the exercises in **./exercises/*{exercise-name}*.js**. Then check your work by running **venus run -t tests/specs/*{exercise-name}*.js -n**.

What is a Promise?
-------------
A promise is an object that represents a potentially asynchronous operation. It's simply an object oriented way to setup and perform async calls. In other words, it's a better alternative to the traditional method of kicking off an operation by calling a function and passing in a callback function as a parameter.

Lesson 0: JavaScript Asynchronous Programming 101
-------------

Event loop stuff

Here are two common JavaScript async misconceptions:
* If there's a callback, it means the callback is asynchronous
* JavaScript code can run concurently (without web workers)

Lesson 1: What's lacking about traditional callbacks?
-------------
Consider the following example:

```
getEmail({
  name: 'Asa'
}, function(err, email) {
  if(err) {
    console.log("We don't know your email!");
  } else {
    console.log('Your email is: ' + email);
  }
});
```

We have a function that makes an async call to a server to determine an email, given a name. For a simple case like this, our traditional callback method is fine. However, let's think about a few complications:

* What if I want to kick off the request to retrieve the email, but I don't yet know what function should be called once the request comes back?
* What if I want to make a batch request to retrieve the emails for 10 different names?
* What if, later in code execution, I want to use the email for a given person? How do I know if the email request has finished?
* What if, once I get an email, I want to make a second request that depends on the email?
* Given the previous situation, what if I don't want the email callback to know anything about the second request?

These are just a few issues that can be problematic for traditional callbacks. The solutions are messy. To avoid messy solutions, developers often settle for in-efficient solutions.

To get a better idea of the downsides of callbacks, let's complete the first exercise.

Exercise 1: Traditional Callbacks
---------------------------------
**exercise/traditional-callbacks.js**

For this exercise, you'll need to complete a function that can process multiple async operations in parallel, before returning the combined result.

Lesson 2: Enter Promises!
-------------------------
Promises aleviate some of the major pain points of traditional callbacks. Here are a few of the main principles behind promises:
* Represent async operations as objects
* Encourage easy composition, conjunction, interoperability of operation objects
* Fail gracefully, debug easily

At the core, a promise is simply an object with a **.then()** method. You use the **.then()** method to attach callback methods to the operation. When the operation completes, any methods attached via **.then()** will be called. When the operation behind a promise is completed, we would say that the promise has been **resolved**. If the operation completes successfully, we say that the promise is both **resolved** and **fulfilled**. When a promise is fulfilled, there must be a **fulfillment value**. That **fulfillment value** is always the one and only argument passed to callbacks attached with the **.then()** method.

```
//Kick off an async operation to, given an id, retrieve a person object
var promise = getPerson(id);

//Attach a callback handler to do something when we get
//a person object
promise.then(function(person) {
  //do something with the fulfillment value 'person'
  console.log(person);
});
```

In many ways, **.then()** operates like jQuery's **$(document).ready()**:

* When you pass a callback to **$(document).ready()**, the callback isn't executed until the document is ready. Likewise, the callback to **.then()** doesn't execute until the promise is resolved.
* Callbacks to **$(document).ready()** are guaranteed to only execute once. Same for **.then()**.
* You can call **$(document).ready()** and pass a callback after the document is ready, and the callback will fire immediately. Same for **.then()** (sort of, more on this later).
* You can pass an unlimited number of callbacks to **$(document).ready()**, and they will all execute at the appropriate time. Same for **.then()**.

There's a lot more to promises, but the simple **.then()** invocation is the essence of the promise. Now let's try it out!

Exercise 2: Promise Hello World
---------------------------------
**exercise/promise-hello-world.js**

For this exercise, you'll need to complete a function that can consume a promise and pass the result to a callback.

Lesson 3: Promise error handling and debugging
-------------------------

There are two types of "errors," that can occur, with regards to a promise.

First, the promise can be rejected. This really isn't an error, as far as the promise is concerned. The rejection could be triggered by an error, like a 500 response, but that error happens outside the immediate scope of the promise. Thus, we should remember to call a rejection a rejection, and not an error. Likewise, the second parameter to the **.then()** function is a rejection handler, not an error handler.

Second, there could be an actual JavaScript error within the fulfillment or rejection handler of a promise. When a JavaScript error occurs in a fulfillment or rejection handler, the error is "swallowed" by the promise. This means that execution stops within context of the handler and no error surfaces in the error console. Instead, the error is surfaced by rejecting the promise returned by the then() function. Let's look at an example:

```
myPromise.then(function(result) {
  return someUndefinedVariable + result;
}, function(err) {
  console.log(err);
});
```
In the case where **myPromise** is fulfilled and the fulfill handler gets called, **someUndefinedVariable** is undefined and will throw an undefined variable error. So how will the error surface? In this case, no error will be surfaced. Why doesn't the error get surfaced in the rejection handler? Because the **myPromise** has technically been resolved, so we can't call it's rejection handler. Instead the then() handler rejects the promise that it returns:

```
myPromise.then(function(result) {
  return someUndefinedVariable + result;
}, function(err) {
  //This handler never gets called
  console.log(err);
}).then(null, function(err) {
  //THIS error handler will get called
  console.log(err);
});
```

The biggest takeaway here is that an error can occur in a handler and get swallowed, thereby preventing the error from ever surfacing in the console.

**TL;DR: Always have a final then() statement to catch JavaScript errors**

Exercise 3: Promise error handling and debugging
-------------------------
For our purposes, we will be learning about how the Bluebird promise implementation handles errors.

Further Reading
---------
* http://domenic.me/2012/10/14/youre-missing-the-point-of-promises/
* http://blog.mediumequalsmessage.com/promise-deferred-objects-in-javascript-pt1-theory-and-semantics
