<?php
session_start();

//ini_set('error_reporting', E_ALL);

define("BASE", $_SERVER["DOCUMENT_ROOT"]."/admin/");
define("TEMPLATES", BASE."/templates/");


class app {
	function start(){
		$this->admin_passwort = "lind03";
		$this->admin_login = "admin";
		$this->content_folder = BASE."files/";
		$this->data_file = BASE.'data.json';

		$this->authorize();
		$this->parseFiles();

		if( $_POST["action"] == 'Anlegen'){
			$errors = array();
			
			$error_code = $_FILES['filename']['error'];
		    if ($error_code != UPLOAD_ERR_OK) {
		      switch($error_code) {
		        case UPLOAD_ERR_INI_SIZE: 
		          // uploaded file exceeds the upload_max_filesize directive in php.ini
		          $errors[] = "File is too big (1).";
		          break;
		        case UPLOAD_ERR_FORM_SIZE: 
		          // uploaded file exceeds the MAX_FILE_SIZE directive that was specified in the HTML form
		          $errors[] = "File is too big (2).";
		          break;
		        case UPLOAD_ERR_PARTIAL:
		          // uploaded file was only partially uploaded.
		          $errors[] = "Could not upload file (1).";
		          break;
		        case UPLOAD_ERR_NO_FILE:
		          // No file was uploaded
		          $errors[] = "Could not upload file (2).";
		          break;
		        case UPLOAD_ERR_NO_TMP_DIR:
		          // Missing a temporary folder
		          $errors[] = "Could not upload file (3).";
		          break;
		        case UPLOAD_ERR_CANT_WRITE:
		          // Failed to write file to disk
		          $errors[] = "Could not upload file (4).";
		          break;
		        case 8:
		          // File upload stopped by extension
		          $errors[] = "Could not upload file (5).";
		          break;
		      } 
		    }
			
			$filename = @basename($_FILES['filename']['name']);
		    $tmp_filename = $_FILES['filename']['tmp_name'];
 
		    $dest_filename = md5(uniqid(rand(), true));
   			
   			if(!move_uploaded_file($tmp_filename, $this->content_folder.$dest_filename)){
   				 $errors[] = "Could not upload file (6).";
   			} else {
   				$this->files[] = array(
   					'name' => $_POST['name'],
   					'start' => $_POST['start'],
   					'end' => $_POST['end'],
   					'file' => $dest_filename,
					'visible' => $_POST['visible'],
					'count' => 0
   				);

   				$this->saveFiles();
   				$this->redirect();

   				return;
   			}

   			$this->errors = $errors;

		} 

		if( $_POST["_action"] == 'edit'){
			$id = $_POST['fileid'];
			$copy = $this->files[$id];

			if( $copy ){
				$this->files[$id] = array(
					'name' => $_POST['name'],
   					'start' => $_POST['start'],
   					'end' => $_POST['end'],
   					'file' => $copy->file,
					'visible' => $_POST['visible'],
					'count' => $copy->count
				);

				$this->saveFiles();
   				$this->redirect();

   				return;
			} 
		}

		if( $_POST["_action"] == 'delete'){
			$id = $_POST['fileid'];

			if( $this->files[$id] ){
				unlink($this->content_folder.$this->files[$id]->file);
				unset($this->files[$id]);
				$this->saveFiles();
   				$this->redirect();

   				return;
			} 
		}


		//omg how ugly
		if( $_GET["action"] === 'hilfe' ){
			echo $this->load(TEMPLATES."hilfe.php");
			return;
		}

		//default:
		echo $this->load(TEMPLATES."list.php");
	}

	function authorize(){
		if(isset($_POST['user'])){
			
			if($_POST['user'] == $this->admin_login && $_POST['password'] == $this->admin_passwort){
				$_SESSION['logged_in'] = true;
				$this->redirect();
			} else {
				$this->message = "Falsche Anmelde Daten";
				echo $this->load(TEMPLATES."login.php");
				exit;
			}
		} elseif( !isset($_SESSION['logged_in']) ){
			echo $this->load(TEMPLATES."login.php");
			exit;
		}

	}

	function load($path){
		if(file_exists($path)){
		    ob_start();
		    include ($path);
		    $tmp = ob_get_clean();
		    return $tmp;
		} else {
			echo "not existing file ". $path;
		}
	}

	function redirect(){
		  header( 'Location: http://www.linde-berkheim.de/admin/' ) ;
	}

	function saveFiles(){
		$handle = fopen($this->data_file, "w");
		fwrite($handle, json_encode($this->files));
		fclose($handle);
	}

	function parseFiles(){	
		$handle = fopen($this->data_file, "r");
		$index = fread($handle, filesize($this->data_file));
		fclose($handle);
		$files = json_decode($index);

		foreach ($files as $i => $file) {
			$this->files[$i] = $file;
		}
	}


}

$i = new app();
$i->start();
?>