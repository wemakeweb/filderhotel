<!DOCTYPE html>
    <head>
    <title>Freizeit</title>

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

</head>
<body> 

<!-- Gericht-Detail Seite -->
<div data-role="page" id="gericht-einzeln" data-add-back-btn="true" data-back-btn-text="Zurück">

<div data-role="header" data-theme="c" data-position="fixed" data-tap-toggle="false">
<h1>Freizeit</h1>
</div>

<div data-role="content" id="gericht-inhalt">

<div data-url="demo-page" data-role="page" data-theme="a" id="demo-page" class="my-page">
    <div data-role="header">
        <h1>News</h1>
        <a href="grid-listview.html" data-shadow="false" data-iconshadow="false" data-icon="arrow-l" data-iconpos="notext" data-rel="back" data-ajax="false">Back</a>
    </div><!-- /header -->
    <div data-role="content">
        <ul data-role="listview" data-inset="true">
            <li><a href="#">
                <img src="bilder/gericht.jpg">
                <h2>iOS 6.1</h2>
                <p>Apple released iOS 6.1</p>
                <p class="ui-li-aside">iOS</p>
            </a></li>
            <li><a href="#">
                <img src="bilder/mountainbike.png" width="180" height="120" alt=""/>
                <h2>BlackBerry 10</h2>
                <p>BlackBerry launched the Z10 and Q10 with the new BB10 OS</p>
                <p class="ui-li-aside">BlackBerry</p>
            </a></li>
            <li><a href="#">
                <img src="../">
                <h2>WP 7.8</h2>
                <p>Nokia rolls out WP 7.8 to Lumia 800</p>
                <p class="ui-li-aside">Windows Phone</p>
            </a></li>
            <li><a href="#">
                <img src="../../_assets/img/galaxy_express.png">
                <h2>Galaxy</h2>
                <p>New Samsung Galaxy Express</p>
                <p class="ui-li-aside">Samsung</p>
            </a></li>
            <li><a href="#">
                <img src="../../_assets/img/nexus_7.png">
                <h2>Nexus 7</h2>
                <p>Rumours about new full HD Nexus 7</p>
                <p class="ui-li-aside">Android</p>
            </a></li>
            <li><a href="#">
                <img src="../../_assets/img/firefox_os.png">
                <h2>Firefox OS</h2>
                <p>ZTE to launch Firefox OS smartphone at MWC</p>
                <p class="ui-li-aside">Firefox</p>
            </a></li>
            <li><a href="#">
                <img src="../../_assets/img/tizen.png">
                <h2>Tizen</h2>
                <p>First Samsung phones with Tizen can be expected in 2013</p>
                <p class="ui-li-aside">Tizen</p>
            </a></li>
            <li><a href="#">
                <h2>Symbian</h2>
                <p>Nokia confirms the end of Symbian</p>
                <p class="ui-li-aside">Symbian</p>
            </a></li>
        </ul>
    </div><!-- /content -->
    <div data-role="footer" data-theme="none">
        <h3>Responsive Grid Listview</h3>
    </div><!-- /footer -->
</div>
 









</div>
	
<div data-role="footer" data-id="footernav" data-tap-toggle="false" data-position="fixed" data-theme="c">
<div data-role="navbar" data-theme="c">
<ul>
<li><a href="menue.php" data-icon="action" data-transition="fade" class="ui-btn-active">FREIZEIT</a></li>
<li><a href="anfahrt.php" data-icon="location" data-transition="fade">ANFAHRT</a></li>
<li><a href="restaurant.php" data-icon="info" data-transition="fade">RESTAURANT</a></li>
</ul>
</div>
</div>

<!--<script type="text/javascript">

$('#gericht-einzeln').on("pageshow", function(){

$('#gericht-inhalt').empty();

var gericht = sessionStorage.gericht;
$.getJSON('gerichte.json', function(data) {
$.each(data.gerichte, function(i,item) {
if(item.name == gericht) {
$('<img src="bilder/'+item.bild+'" class="schatten" /><h3>'+item.name+'</h3><p>'+item.untertitel+'</p>').appendTo('#gericht-inhalt');
}				
});
});
});	

</script>-->


</div>

</body>
</html>