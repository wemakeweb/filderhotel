<?php
$name = $_REQUEST['name'];
$vorname = $_REQUEST['vorname'];
if($name && $vorname)
	echo "Sehr geehrte(r) $vorname $name, Ihre Daten wurden versendet";
else
	echo "Die Daten wurden nicht an den Server gesendet.";
?>