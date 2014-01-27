
var activityList = [];
var awardList = [];

function showHideCommon(divId) {
	var theDiv = document.getElementById(divId);
	if (theDiv.style.display == "none") {
		theDiv.style.display = "";
	} else {
		theDiv.style.display = "none";
	}
}

function validateActivityForm() {
	var x = document.getElementById('activityName').value;
	if (x == null || x == "") {

		var warningLabel = document.getElementById("activityNameWarning");
		warningLabel.style.display = "inline";
		return false;

	}

	return true;
}

function validateAwardForm() {
	var x = document.getElementById('awardName').value;
	if (x == null || x == "") {

		var warningLabel = document.getElementById("awardNameWarning");
		warningLabel.style.display = "inline";
		return false;

	}

	return true;
}

function addAward() {

	if (validateAwardForm()) {

		var activityName = document.getElementById('awardName').value;
		var activityDescription = document.getElementById('awardDescription').value;
		var activityType = document.getElementById('awardType').value;

		$('#awardTable > tbody:last').append(
				'<tr><td>' + activityName + '</td><td>' + activityDescription
						+ '</td><td>' + activityType + '</td></tr>');

		var award = new Object();
		award.name = activityName;
		award.desc = activityDescription;
		award.type = activityType;

		awardList.push(award);

		showHideCommon("awardFormArea");
	}
}

function addActivity() {

	if (validateActivityForm()) {

		var activityName = document.getElementById('activityName').value;
		var activityDescription = document
				.getElementById('activityDescription').value;
		var activityType = document.getElementById('activityType').value;

		$('#activityTable > tbody:last').append(
				'<tr><td>' + activityName + '</td><td>' + activityDescription
						+ '</td><td>' + activityType + '</td></tr>');

		var activity = new Object();
		activity.name = activityName;
		activity.desc = activityDescription;
		activity.type = activityType;

		activityList.push(activity);

		showHideCommon("activityFormArea");
	}
}

$(document)
		.ready(
				function() {

					$('#submitButton')
							.click(
									function() {

										var eventName = document
												.getElementById('eventName').value;
										var eventDescription = document
												.getElementById('eventDescription').value;

										$
												.ajax({
													type : "POST",
													contentType : "application/json",
													url : "http://10.100.4.54:9763/TestApp2/events",

													data : JSON
															.stringify({
																"event" : {
																	"name" : eventName,
																	"description" : eventDescription
																},
																"activities" : activityList,
																"awards" : awardList
															}),
													success : function(msg) {
													}
												});

									});

				});
