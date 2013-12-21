var PromiseLibrary = Promise;

var BluebirdMixin = {

	//Library.defer()
	defer: function() {
		var d = Promise.pending();

		d.resolve = function() {
			d.fulfill.apply(d, arguments);
		}
		
		d.getPromise = function() {
			return d.promise;
		};

		return d;
	},

	all: PromiseLibrary.all,

	//Library.allSettled
	settle: function(promises, timeout) {
		return Promise.settled(promises, timeout);
	},

	map: PromiseLibrary.map,

	reduce: PromiseLibrary.reduce,

	filter: PromiseLibrary.filter,

	props: PromiseLibrary.props
}

for(var property in BluebirdMixin) {
	PromiseLibrary[property] = BluebirdMixin[property];
}