
$(document).ready(function() {


	// autocomplete
	
	
	$("#city").autocomplete({
		source: function(request, response) {
			$.ajax({
				url: "http://ws.geonames.org/searchJSON",
				dataType: "jsonp",
				data: {
					featureClass: "P",
					style: "full",
					maxRows: 12,
					name_startsWith: request.term
				},
				success: function(data) {
					response($.map(data.geonames, function(item) {
						return {
							label: item.name + (item.adminName1 ? ", " + item.adminName1 : "") + ", " + item.countryName,
							value: item.name
						}
					}))
				}
			})
		},
		minLength: 2
	});

	// datepicker 
	$("#date").datepicker($.datepicker.regional['de']);
	$("#lang").change(function() {
		$('#date').datepicker('option', $.datepicker.regional[$(this).val()]);
	});


	// Ajax
	var msg = $("#msg"); 
	var log = $("#log"); 
	$(log).ajaxStart(function() {
		log.html("loading...");
	}).ajaxStop(function() {
		log.html("loading beendet.");
	}).ajaxError(function(a, b, e) {
		log.html(e);
	});


	// hier die Methode .validate()
	$("#form").validate({
		submitHandler: function(form) {
			$(form).ajaxSubmit({
				target: "#msg"
			});
		},
		rules: {
			vorname: "required",
			name: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
			},
			themen: {
				required: "#newsletter:checked",
				minlength: 1
			},
			message: "required"
		}
	});
	
	
	
	
	//newsletter, Optionen werden erst sichtbar, wenn Checkbox gechecked ist
	var newsletter = $("#newsletter");
	var isChecked = newsletter.is(":checked");
	var themen = $("#newsletter_themen");
	themen[isChecked ? "show" : "hide"]();
//	var themaInputs = themen.find("input").attr("disabled", !isChecked);
	// Event
	newsletter.click(function() {
		themen[this.checked ? "fadeIn" : "fadeOut"](1000);
//		themaInputs.attr("disabled", !this.checked);
	});
});