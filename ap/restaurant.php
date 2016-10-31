<!doctype html>
<html class="uk-notouch" dir="ltr" lang="de">
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="google-site-verification" content="gUxB7q3vJMy4hDc6WbsRCndl7Nfta1tlJLNphSdZz5E"/>
<title>Filderhotel Ostfildern | Hotel Esslingen | Hotel Messe Stuttgart | Hotel Ostfildern</title>
<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet" type="text/css">
<link href='https://fonts.googleapis.com/css?family=Handlee' rel='stylesheet' type='text/css'>
<link rel="apple-touch-icon-precomposed" href="http://getuikit.com/docs/images/apple-touch-icon.png">
<link rel="stylesheet" type="text/css" href="uikit.css">
<link rel="stylesheet" type="text/css" href="../css/basis.css">



<link rel="stylesheet" type="text/css" href="css/components/sticky.almost-flat.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.2/jquery.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/2.18.0/js/uikit.js"></script>
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
      bottom:40px !important;
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
<!--offcanvas-->
<div class="uk-float-left uk-navbar-brand uk-visible-small"> <a href="#" data-uk-smooth-scroll> <img src="https://www.filderhotel.de/img/logo/logo_small.png" alt="Logo Filderhotel Ostfildern Esslingen Suttgart"/></a></div>
<div class="uk-float-right"><a href="#offcanvas" class="uk-navbar-toggle uk-visible-small" data-uk-offcanvas></a></div>
<!--offcanvas-->

<br><br><br>

<div data-role="content">
  
<section id="karte"></section>


<section id="uebersicht">

<ul>
        
</ul>
</section>	
<br><br>
<div class="butt"><button>Liste</button></div>

</div>










<!--offcanvas-->
<div id="offcanvas" class="uk-offcanvas">
<div class="uk-offcanvas-bar">
<ul class="uk-nav uk-nav-offcanvas">
<li class="uk-active">
<a href="https://www.filderhotel.de/ap">Hotel</a>
</li>
<li>
<a href="https://www.filderhotel.de/ap/restaurant.php">Restaurant</a>   
</li>
<li>
<a href="https://www.filderhotel.de/ap/anfahrt.php">Anfahrt</a>   
</li>
<li>
<a href="https://www.filderhotel.de/ap/empfang.php">Service</a>   
</li>

<li class="uk-nav-divider"></li>
<li><a href="https://www.filderhotel.de/ap/radfahren.php">Radfahren</a></li>
<li><a href="https://www.filderhotel.de/ap/joggen.php">Joggen</a></li>
<li><a href="https://www.filderhotel.de/ap/wetter.php">Wetter</a></li>   
</li>

</div>
</div>
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

</body>
</html>

