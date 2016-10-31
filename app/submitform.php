<?php
header('content-type: application/json; charset=utf-8');

if (isset($_GET["name"])) {
	$name = strip_tags($_GET['name']);
	$email = strip_tags($_GET['email']);
	$telefon = strip_tags($_GET['telefon']);
	$artanfrage = strip_tags($_GET['artanfrage']);
	$anfrage = strip_tags($_GET['anfrage']);
	$header = "Von: ". $name . " <" . $email . ">rn"; 

	$empfaenger = 'mail@florian-franke.net';
	$titel = 'Das Kontaktformular wurde ausgeführt';
	$mailtext = "
	Name: $name
	E-Mail: $email
	Telefon: $telefon
	Art der Anfrage: $artanfrage
	Anfrage: $anfrage
	";
	$result = 'success';

	if (mail($empfaenger, $titel, $mailtext, $header)) {
		echo json_encode($result);
	}
}
?>