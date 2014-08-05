# A+ Promises vs. jQuery.defer

```JavaScript
thisPromiseRejects.then(fulfillHandler1)
  .then(fulfillHandler2, rejectHandler2);
```

###jQuery
rejectionHandler1 and rejectionHandler2 will be called.

###A+
rejectionHandler1 and rejectionHandler2 will be called.


```JavaScript
thisPromiseRejects.then(fulfillHandler1, rejectHandler1)
  .then(fulfillHandler2, rejectHandler2);
```

###jQuery
rejectionHandler1 and rejectionHandler2 will be called.

###A+
Assuming rejectHandler1 does not throw an error, rejectHandler1 and fulfillHandler2 will be called.


## Spec
`then` must return a promise [[3.3](#notes)].

    ```js
    promise2 = promise1.then(onFulfilled, onRejected);
    ```

    1. If either `onFulfilled` or `onRejected` returns a value `x`, run the Promise Resolution Procedure `[[Resolve]](promise2, x)`.
    1. If either `onFulfilled` or `onRejected` throws an exception `e`, `promise2` must be rejected with `e` as the reason.
    1. If `onFulfilled` is not a function and `promise1` is fulfilled, `promise2` must be fulfilled with the same value as `promise1`.
    1. If `onRejected` is not a function and `promise1` is rejected, `promise2` must be rejected with the same reason as `promise1`.
