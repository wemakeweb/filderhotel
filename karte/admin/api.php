<?php
define("BASE", $_SERVER["DOCUMENT_ROOT"]."/admin/");

class KartenAPI {
	public static function get($type, $str = null){
    	$i = new Karte($type);
    	return $i->str($str);
    }
}

class Karte{
	function __construct($type) {
    	$this->type = $type;
    	$this->content_folder = BASE."files/";
		$this->data_file = BASE.'data.json';
    }

    function process(){
    	$this->parseFiles();
    	$this->filter();
    } 

    function parseFiles(){	
		$handle = fopen($this->data_file, "r");
		$index = fread($handle, filesize($this->data_file));
		fclose($handle);
		$this->files = json_decode($index);
	}

	function filter(){
		$now = strtotime(date("d.m.Y"));
		
		foreach($this->files as $file){

			if(in_array($this->type, $file->visible)){

				$file->start = strtotime(date($file->start));
				$file->end = strtotime(date($file->end));
				
				if( $file->start <= $now && $now <=  $file->end ){
					$this->results[] = $file;
				}
			}
		}
	}

    function build_link($file){
        return '/files/'.$file->file."/".ucwords($file->name).'.pdf';
    }

    function str($text){
    	$str = "";
    	$this->process();

    	if($this->results){
    		foreach($this->results as $i => $result){
				$str .= '<p><a href="'.$this->build_link($result).'"><span class="link">'. (isset($text) ? $text : ucfirst($result->name)) . '</span></a></p>';
			}
       	}

    	return $str;
    }

 
}