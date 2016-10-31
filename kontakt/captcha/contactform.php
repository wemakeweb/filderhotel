<?php

session_start();
if(isset($_SESSION['captcha_spam']) AND $_POST["sicherheitscode"] == $_SESSION['captcha_spam']){
unset($_SESSION['captcha_spam']);

/* Betreff und Email Variable */

	$emailBetreff = 'Webtutz.net Kontakt';
	$webmaster = 'jo@filderhotel.de';
	
/* Emailform Daten */

	$nameFeld = $_POST['name'];
	$emailFeld = $_POST['email'];
	$interesseFeld = $_POST['interesse'];
	$landFeld = $_POST['land'];
	$nachrichtFeld = $_POST['nachricht'];
	$agbFeld = $_POST['agb'];
	
	$body = <<<EOD
<br><hr><br>
Name: $name <br>
Email: $email <br>
Interesse: $interesse <br>
Land: $land <br>
Nachricht: $nachricht <br>  
AGB: $agb <br>
EOD;

	$headers = "From: $email\r\n";
	$headers .= "Content-type: text/html\r\n";
	$headers = mail($webmaster, $emailBetreff, $body, $headers);
	
/* Antwort */



	$dieAntwort = <<<EOD
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>ContactForm</title>
 

<style type="text/css">
<!--
body,td,th {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 14px;
	color: #000000;
}
body {
	background-color: #CCCCCC;
	width: 850px;
	margin-right: auto;
	margin-left: auto;
}

	

#formwrapper {
	background-color: #EEC139;
	border: 2px;
	border-color: #333333;
	width: 850px;
	height: 500px;
	margin-left: auto;
	margin-right: auto;
	
}

</style>
</head>

<body>
<div align="center"><img src="header.jpg" alt="header" width="850" height="200" /></div>


<div id="formwrapper" align="center">
  <h1>Danke f&uuml;r Ihre Nachricht!</h1>
  <p><a href="index.html">Zur&uuml;ck zum Formular</a></p>
</div>
</body>
</html>
EOD;

echo "$dieAntwort";
}

else{
	exit("Der Sicherheitscode ist falsch!!!");
	}

?>