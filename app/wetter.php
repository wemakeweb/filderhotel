<!DOCTYPE html>
    <head>
    <title>Freizeit im FILDERHOTEL</title>

	<link rel="stylesheet" href="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.css" />
	<script src="http://code.jquery.com/jquery-1.8.2.min.js"></script>
	<script src="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.js"></script>

	
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
 .ui-listview .ui-li.ui-btn {
    background-image: none;
    border-color: #222;
}
[data-role=listview] h2 {
	font-family: 'Roboto', serif;
font-weight: normal;
color:#990000;
font-size:1.2em;
line-height:0.8em;
text-shadow: 1px 1px 0px rgba(255, 255, 255, 1);
padding-left:30px;
}
</style>
</head>
<body> 

<!-- Menue Seite -->
<div data-role="page" id="menue">

<div data-role="header" data-theme="c" data-position="fixed" data-tap-toggle="false">
<a href="index.php" data-role="button" data-icon="home" data-iconpos="notext">Dieser Text wird nicht angezeigt.</a>
<h1>Wetter</h1>
</div>
<div data-role="content">
<!-- WetterOnline Homepagewetter Beginn //-->
<center><div style="position:relative;background-image:url(http://st.wetteronline.de/dr/1.0.637/img/p_city_hpweather/background/weiss.gif);background-repeat:repeat-x;border:0px solid #BCBCBC;width:158px;text-align:center;font-family:arial,verdana;"><a href="http://www.wetteronline.de" target="_blank" style="text-decoration:none;color:#000;outline:none;"><img src="http://st.wetteronline.de/img/logo/wetteronline_blue_114x22.png?v=1.0.637" title="WetterOnline" alt="WetterOnline" style="border: 0; padding-top: 2px;"></a><a href="http://www.wetteronline.de/wetter/ostfildern" target="_blank" style="font-size:12px;margin-bottom:2px; font-weight:bold; color:#000; text-align:center; text-decoration:none; display:block;">Das Wetter für<br />Ostfildern</a><iframe  marginheight="0" marginwidth="0" frameborder="0" scrolling="no" src="http://www.wetteronline.de/?pid=p_city_hpweather&amp;PLZ=73760&amp;FORMAT=long&amp;MENU=dropdown&amp;MAP=rainradar" allowtransparency="true" width="158" height="312"></iframe><div style="font-size:10px;height:18px; color:#000; text-align:center;">Mehr auf <a href="http://www.wetteronline.de/" target="_blank" title="WetterOnline Homepage" style="text-decoration:none;color:#000;">wetteronline.de</a></div></div></center>
<!-- WetterOnline Homepagewetter Ende //-->









</div><!--content-->
	
<div data-role="footer" data-id="footernav" data-tap-toggle="false" data-position="fixed" data-theme="c">
<div data-role="navbar" data-theme="c">
<ul>
<li><a href="menue.php" data-icon="action" data-transition="fade" class="ui-btn-active">FREIZEIT</a></li>
<li><a href="ruf.php" data-icon="alert" data-transition="fade">EMPFANG</a></li>
<li><a href="anfahrt.php" data-icon="location" data-transition="fade">ANFAHRT</a></li>
<li><a href="restaurant.php" data-icon="info" data-transition="fade">RESTAURANT</a></li>
</ul>
</div>
</div>

</div>

</body>
</html>