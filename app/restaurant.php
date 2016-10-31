<!DOCTYPE html>
<head>
<title>Restaurants in ihrer Nähe</title>

<link rel="stylesheet" href="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.css" />
<script src="http://code.jquery.com/jquery-1.8.2.min.js"></script>
<script src="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.js"></script>


<link href='https://www.google.com/fonts#UsePlace:use/Collection:Roboto' rel='stylesheet' type='text/css'>
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
<style>
#karte{
      position: absolute;
      top: 50px; 
      height:470px;
	  width:auto;
	  bottom: 30;
      left: 0;
      right: 0; 
    }
section  {
      position: absolute;
      top: 0; 
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #c5ccd4;
    }
    section.aktiv {
      z-index: 1000;
    }
    .butt {
      z-index: 1001;
      position: absolute;
      bottom:60px !important;
      left: 10px;
      -webkit-appearance: none;
      font: bold 20px Helvetica;
      background-color: #FCF5F5;
      color: #ccc;
      border-radius: 9px;
      border: none;
      padding: 8px 16px;
    }
    #uebersicht {
      padding: 10px;
    }
    #uebersicht h2 {
      font-size: 20px;
    }
    #uebersicht ul {
      list-style: none;
      margin: 0;
      padding: 0;
      background-color: #fff;
      border-radius: 9px;
      border: 1px solid #aaa;
    }
    #uebersicht ul li {
      padding: 8px 16px;
      border-top: 1px solid #aaa;
    }
    #uebersicht ul li:first-child {
      border-top: none;
    }
    #uebersicht ul li span {
      font-weight: bold;
      float: right;
    }
    </style>
</head>
<body> 

<!-- Restaurant Seite -->
<div data-role="page" id="restaurant">
<div data-role="header" data-theme="c" data-position="fixed" data-tap-toggle="false">
<a href="index.php" data-role="button" data-icon="home" data-iconpos="notext">Dieser Text wird nicht angezeigt.</a>	
<h1>Restaurants</h1>
</div>

<div data-role="content">
  
<section id="karte"></section>


<section id="uebersicht">

<ul>
        
</ul>
</section>	

<div class="butt"><button>Liste</button></div>


<!-- Content -->

<!-- Content --> 
<div data-role="footer" data-id="footernav" data-tap-toggle="false" data-position="fixed" data-theme="c">
<div data-role="navbar" data-theme="c">
<ul>
<li><a href="menue.php" data-icon="action" data-transition="fade">MENÜ</a></li>
<li><a href="ruf.php" data-icon="alert" data-transition="fade">EMPFANG</a></li>
<li><a href="anfahrt.php" data-icon="location" data-transition="fade">ANFAHRT</a></li>
<li><a href="restaurant.php" data-icon="info" data-transition="fade" class="ui-btn-active">RESTAURANT</a></li>
</ul>
</div><!-- /navbar -->
</div><!-- /footer -->
	

<script src="http://maps.googleapis.com/maps/api/js?sensor=true"></script>

<script src="js/zepto.js"></script>
<script>
$(function(){

$('#karte').addClass('aktiv');

$('button').on('click',function(){
$('section').toggleClass('aktiv');
if($(this).text() == "Liste") {
$(this).text("Karte");
} else {
$(this).text("Liste");
}
});

navigator.geolocation.getCurrentPosition(function(position){
meineLongitude = position.coords.longitude;
meineLatitude = position.coords.latitude;

var optionen = {
zoom: 14,
center: new google.maps.LatLng(meineLatitude,meineLongitude),
mapTypeId: google.maps.MapTypeId.ROADMAP
};

karte = new google.maps.Map($('#karte')[0],optionen);

var entfernungberechnen = function(meineLongitude, meineLatitude, long1, lat1) {
erdRadius = 6371;

meineLongitude = meineLongitude * (Math.PI/180);
meineLatitude = meineLatitude * (Math.PI/180);
long1 = long1 * (Math.PI/180);
lat1 = lat1 * (Math.PI/180);

x0 = meineLongitude * erdRadius * Math.cos(meineLatitude);
y0 = meineLatitude  * erdRadius;

x1 = long1 * erdRadius * Math.cos(lat1);
y1 = lat1  * erdRadius;

dx = x0 - x1;
dy = y0 - y1;

d = Math.sqrt((dx*dx) + (dy*dy));

if(d < 1) {
  return Math.round(d*1000)+" m";
} else {
  return Math.round(d*10)/10+" km";
}
};

$.getJSON('restaurants.json',function(json){
$.each(json,function(restaurant,daten){

$('#uebersicht').find('ul').append('<li>'+restaurant+' <span>'+entfernungberechnen(meineLongitude,meineLatitude,daten.Position.Longitude,daten.Position.Latitude)+'</span></li>');

marker = new google.maps.Marker({
map: karte,
position: new google.maps.LatLng(
  daten.Position.Latitude,
  daten.Position.Longitude
),
animation: google.maps.Animation.DROP,
});

});
});

});

});
</script>





</div>

</body>
</html>