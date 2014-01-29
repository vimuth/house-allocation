var render = function(theme, data, meta, require) {
	theme('login', {
		location : [ {
			partial : 'location',
			context : data.location
		} ]
	});
};