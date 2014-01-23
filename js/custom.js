showEvents = function(){
	var template = $.get('templates/event.html');
	$('#main').replaceWith(Mustache.to_html(template, [{"id":"51","name":"boxtest","description":"test"},{"id":"52","name":"boxtest","description":"test"},{"id":"53","name":"boxtest","description":"test"},{"id":"54","name":"boxtest","description":"test"},{"id":"55","name":"boxtest","description":"test"}]));
};