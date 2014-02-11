var render = function(theme, data, meta, require) {
	theme('indexs_simple', {
		header : [ {
			partial : 'header',
			context : data.header
		} ],
		title : [ {
			partial : 'title',
			context : data.title
		} ],
		sidenav : [ {
			partial : 'sidenav',
			context : data.sidenav
		} ],
		main : [ {
			partial : 'index',
			context : data.body
		} ],
	});
};