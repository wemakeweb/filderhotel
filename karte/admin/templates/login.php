<!DOCTYPE html>
<html>
  <head>
    <title>Admin Login</title>
    <!-- Bootstrap -->
 	<meta charset='utf-8'> 
     <link href="/admin/templates/bootstrap.min.css" rel="stylesheet">
  </head>
  <body>
  	
	<div class="container">
	
   		<form method="post" action="/admin/" style="margin-top:100px" class="span3">
   			<h3>Bitte Anmelden</h3>
			<?php if($this->message) : ?>
				<div class="alert"><?php echo $this->message; ?></div>
			<?php endif; ?>
   			<label for="user">Benutzer</label>
   			<input name="user" id="user" type="text" />
   			<label for="password">Passwort</label>
   			<input name="password" id="password" type="password"/>
   			<div><input type="submit" value="Login" class="btn btn-primary" /></div>
   		</form>
    </div>


    
   
  </body>
</html>




