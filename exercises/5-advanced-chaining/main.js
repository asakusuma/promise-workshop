/**
 * Print the boss of the employee with the given user id. Fetch the employee first, then make a second
 * call to the employee function to get the boss. Combine both results and print the message. Use
 * the given function stubs.
 */

function combineWithEmployee(employee) {
  return 'Implement me!';
}

function addBoss(employee) {
  return RSVP.reject('Implement me!');
}

function createMessage(r) {
  return RSVP.reject('Implement me!');
}

// Don't modify this function
function printBoss(id) {
  api.getEmployeePromise(id).then(addBoss).then(createMessage).then(showMessage, showErrorMessage);
}

printBoss(1);
