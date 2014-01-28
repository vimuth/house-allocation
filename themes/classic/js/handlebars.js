Handlebars.registerHelper('if_eq', function(a, b) {
	if (a == b)
		return true;
	else
		return false;
});