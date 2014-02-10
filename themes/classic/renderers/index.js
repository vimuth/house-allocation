var render = function(theme, data, meta, require) {
	theme('indexs_simple', {
		header : [ {
			partial : 'header',
			context : data.header
		} ],
		title :[{
			partial : 'title',
			context : data.title
		}],
		main : [ {
			partial : 'index',
			context : data.body
		} ]
	});
};