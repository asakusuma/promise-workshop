/**
 * Get the name asynchronously and print out a greeting.
 */

function combineWithEmployee(employee) {
  return function(boss) {
    return {
      boss: boss,
      employee: employee
    };
  };
}

function addBoss(employee) {
  return api.getEmployeePromise(employee.boss).then(combineWithEmployee(employee));
}

function createMessage(r) {
  return r.employee.firstName + ' reports to ' + r.boss.firstName;
}

function printBoss(id) {
  api.getEmployeePromise(id).then(addBoss).then(createMessage).then(showMessage);
}

printBoss(1);
