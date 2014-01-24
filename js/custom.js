showEvents = function() {

	 $.ajax({
	 type : "GET",
	 url : "http://10.100.4.54:9763/TestApp2/controller/event.jag",
	 success : function(msg) {
	 $('#main').replaceWith(msg);
	 }
	 });
	var data = {"events":[ {
		"id" : "51",
		"name" : "boxtest",
		"description" : "test"
	}, {
		"id" : "52",
		"name" : "boxtest",
		"description" : "test"
	}, {
		"id" : "53",
		"name" : "boxtest",
		"description" : "test"
	}, {
		"id" : "54",
		"name" : "boxtest",
		"description" : "test"
	}, {
		"id" : "55",
		"name" : "boxtest",
		"description" : "test"
	} ]};

	$.get('templates/event.html', function(template) {
		var html = Mustache.to_html(template, data);
		$("#main").html(html);
	});

};
