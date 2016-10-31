function show_kalender(action) {
	$kalender = $('#kalender')
	
	if($kalender.css('display') === 'none'){
		ajax('/actions/kalender.php?' + action + '=true','kalender_content');
		if(action === 'departure'){
			$kalender.css("top", -111);
		} else {
			$kalender.css("top", -139);
		}

		$kalender.show();

	}else{
		$kalender.hide();
	}
}
function move_kalender(Ereignis){
    document.getElementById("kalender").style.margin = Ereignis.clientX + "px " + (Ereignis.clientY) + "px";
}
function set_arrival(date){
	document.booking.arrival.value = date;
	document.getElementById('kalender').style.display = 'none';
}
function set_departure(date){
	document.booking.departure.value = date;
	document.getElementById('kalender').style.display = 'none';
}
function ajax(dateiname,divname) {
	var $t = $('#' + divname);
	$t.html('<span style="align:center;"><img src="/images/loader.gif" alt="L&auml;dt..."></span>');

	$.get(dateiname, function(response){
		$t.html(response);
	});
}
    