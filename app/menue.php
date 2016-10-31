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
<h1>Freizeit</h1>
</div>
<div data-role="content">

<ul data-role="listview" data-inset="true">
            <li><a href="radfahren.php">
                <img src="bilder/mountainbike.png">
                <h3>Radfahren</h3>
                <p></p>
                
            </a></li>
            <li><a href="jogg.php">
                <img src="bilder/joggen.png">
                <h3>Joggen </h3>
                <p>in Ostfildern</p>
                
            </a></li>
            <li><a href="wetter.php">
                <img src="bilder/wetter.png">
             
                <h3>Wetter in Ostfildern</h3>
                
            </a></li>
            <li><a href="weihnacht.php">
                <img src="bilder/xxweihnacht.png">
                <h3>Weihnachtsmärkte in Esslingen und Stuttgart</h3>

<p>vom 22.11. bis 23.12.2015</p>
                
                
            </a></li>
            <li><a href="az.php">
                <img src="bilder/mountainbike.png">
                <h3>A - Z</h3>
                <p>Hotelinformationen</p>
                
            </a></li>
            
            
        </ul>

</div>
	
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