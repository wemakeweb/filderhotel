
<?php
//error_reporting(E_ALL ^ (E_NOTICE | E_WARNING));

include("function.php");  
include($_SERVER['DOCUMENT_ROOT']."/admin/api.php");

function get_wochenkarte(){
 	return include('include/wochenkarte.php'); 
}

function get_messe(){
 	return include('include/messe.php'); 
}
 
function get_musical(){
	return include('include/musical.php');
}

function get_header(){	
	return include("include/header.php");	
}
function get_navi($lang = ''){
	if($lang == 'eng'){	
		return include("include/eng_navi.php");
	}
	else{	
		return include("include/navi.php");		
	}
}
			
function get_sidebar(){
	return include("include/sidebar.php");
}

function get_footer(){
	return include("include/footer.php");	 	
}

function get_karte($type){
	return new Karte($type);
}
?>


