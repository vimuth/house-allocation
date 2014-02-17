var render = function(theme, data, meta, require) {
	theme('simple', {
		header : [ {
			partial : 'header',
			context : data.header
		} ],
		title :[{
			partial : 'title',
			context : data.title
		}],
		sidenav : [ {
			partial : 'sidenav',
			context : data.sidenav
		} ],
		main : [ {
			partial : 'delete-event-instance',
			context : data.body
		} ]
	});
};