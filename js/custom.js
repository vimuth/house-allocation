showEvents = function() {
	
	$.ajax({
		type : "GET",
		headers: {"Accept": "application/json"},
		url : "http://10.100.4.54:9763/TestApp2/controller/event.jag",
		success : function(msg) {
			$.get('templates/event.html', function(template) {
				var html = Mustache.to_html(template,
						$.parseJSON(msg).eventCollection);
				$("#main").html(html);
			});
		}
	});

};
