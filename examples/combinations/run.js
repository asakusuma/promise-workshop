var employeeStore = {
	employees: [
		{
			getTitle: function() {
				return mockPromise('Big Cheese', 500);
			},
			getName: function() {
				return mockPromise('Vinay', 2000);
			},
			getBoss: function() {
				return mockPromise(1, 100);
			}
		},
		{
			getTitle: function() {
				return mockPromise('Ultra Mega Cheese', 500);
			},
			getName: function() {
				return mockPromise('Steve', 300);
			},
			getBoss: function() {
				return mockPromise(2, 2000);
			}
		}
	],
	getEmployee: function(id) {
		return this.employees[id];
	}
};

function clearMessage(results) {
	showMessage('');
	return results;
}

function printEmployee(employee) {
	appendMessage(employee.name + ' is a ' + employee.title + '<br/>');
	return employee;
}

function formatEmployee(results) {
	return {
		name: results[0],
		title: results[1],
		boss: results[2]
	};
}

function fetchBoss(bossID) {
	if(typeof bossID == 'object') {
		bossID = bossID.boss;
	}
	var boss = employeeStore.getEmployee(bossID);
	return PromiseLibrary.all([
		boss.getName(),
		boss.getTitle(),
		boss.getBoss()
	]);
}

var vinay = employeeStore.getEmployee(0);


//The Slow way
PromiseLibrary.all([
	vinay.getName(),
	vinay.getTitle(),
	vinay.getBoss()
]).then(clearMessage)
.then(formatEmployee)
.then(printEmployee)
.then(fetchBoss)
.then(formatEmployee)
.then(printEmployee);

/*
//The fast way
var vinaysBossID = vinay.getBoss();
var printVinay = PromiseLibrary.all([
	vinay.getName(),
	vinay.getTitle(),
	vinaysBossID
]).then(clearMessage)
.then(formatEmployee)
.then(printEmployee);

PromiseLibrary.all([
	vinaysBossID.then(fetchBoss),
	printVinay
]).then(function(results) {
	//forward only the fetchBoss results
	return results[0];
}).then(formatEmployee)
.then(printEmployee);
*/