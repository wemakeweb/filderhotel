<!DOCTYPE html>
    <head>
    <title>Anfahrt FILDERHOTEL</title>

	
	<script src="http://code.jquery.com/jquery-1.8.2.min.js"></script>
	<script src="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.js"></script>

	<link href='http://fonts.googleapis.com/css?family=Leckerli+One' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Noticia+Text' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="styles/styles.css" />
	
	<meta charset='UTF-8'> 
	
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<link rel="apple-touch-icon-precomposed" href="bilder/icon-ipad.png" sizes="72x72" />
	<link rel="apple-touch-icon-precomposed" href="bilder/icon-iphone-retina.png" sizes="114x114" />
	<link rel="apple-touch-icon-precomposed" href="bilder/icon-ipad-retina.png" sizes="144x144" />
	<link rel="apple-touch-icon-precomposed" href="bilder/icon-iphone.png" />

	<script type="text/javascript" src="https://www.google.com/jsapi"></script>      
        <script type="text/javascript">
			google.load("maps", "3", {'other_params':'sensor=true'});
		</script>
	<script src="js/jquery.ui.map.full.min.js" type="text/javascript"></script>

</head>
<body> 

<!-- Anfahrt Seite -->
<div data-role="page" id="anfahrt">
	
<div data-role="header" data-theme="c" data-position="fixed" data-tap-toggle="false">
<a href="index.php" data-role="button" data-icon="home" data-iconpos="notext">Dieser Text wird nicht angezeigt.</a>
<h1>Anfahrt</h1>
</div>
	
	<div data-role="content" id="anfahrt-inhalt">
	
	<div id="karte-container"></div>
		
	</div>
	
<div data-role="footer" data-id="footernav" data-tap-toggle="false" data-position="fixed" data-theme="c">
<div data-role="navbar" data-theme="c">
<ul>
<li><a href="menue.php" data-icon="action" data-transition="fade">MENÜ</a></li>
<li><a href="ruf.php" data-icon="alert" data-transition="fade">EMPFANG</a></li>
<li><a href="anfahrt.php" data-icon="location" data-transition="fade" class="ui-btn-active">ANFAHRT</a></li>
<li><a href="restaurant.php" data-icon="info" data-transition="fade">RESTAURANT</a></li>
</ul>
</div>
</div>
	
<script type="text/javascript">

$('#anfahrt').on("pageshow", function(){

var positionsAusgabe = function(position) {

var longpos = position.coords.longitude;
var latpos = position.coords.latitude;

$('#karte-container').height($(window).height());

$('#karte-container').gmap(
'displayDirections', {
'origin': new google.maps.LatLng(latpos,longpos),
'destination': "In den Anlagen. 1, Ostildern",
'travelMode': google.maps.DirectionsTravelMode.DRIVING
},
{
'disableDefaultUI': true
}, function(success, response) {
if(success) {
return new google.maps.LatLng(latpos,langpos);
} else {
alert('Error, die Route konnte nicht geladen werden!');
}
});

};


navigator.geolocation.getCurrentPosition(positionsAusgabe);


});

</script>

	
</div>

</body>
</html>