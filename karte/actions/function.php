<?php

function pfad() 
{ 
$tiefe = $_SERVER['PHP_SELF']; 
$tiefe = substr_count($tiefe, '/'); 
if($tiefe == 2) 
{ echo $tiefe = "../";} 
if ($tiefe == 3) 
{ echo $tiefe ="../../";} 
else 
{ echo $tiefe ="";} 
return true; 

}

function title()
{
  	$pfad = $_SERVER['PHP_SELF']; 
	$falsch = array("/index.php", "/");
	$richtig = array("", " | ");
	$pfad = str_replace($falsch, $richtig, $pfad);
	$pfad= substr($pfad, 3);
	echo ucwords ($pfad);
	return true;
}
?>