<?php include($_SERVER['DOCUMENT_ROOT']."/admin/api.php"); ?>
<!DOCTYPE html>
<html>
  <head>
    <title>Admin > Hilfe </title>
    <!-- Bootstrap -->
 	<meta charset='utf-8'> 
     <link href="/admin/templates/bootstrap.min.css" rel="stylesheet">
      <style>
      body {
        padding-top: 60px; /* 60px to make the container go all the way to the bottom of the topbar */
      }
    </style>
  </head>
  <body>
  	<div class="navbar navbar-inverse navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <a class="brand" href="#">Admin</a>
          <div class="nav-collapse collapse">
            <ul class="nav">
              <li ><a href="/admin/">Übersicht</a></li>
              <li class="active"><a href="/admin?action=hilfe">Hilfe</a></li>
            </ul>
          </div><!--/.nav-collapse -->
        </div>
      </div>
    </div>
	<div class="container">
		<h2>Hilfe</h2>
	   <div class="row">
			<div class="help  span4">
				<h4>Wann wird eine Karte angezeigt?</h4>	
				<p>Eine Karte wird angzeigt wenn des Datum zwischen der Start und der Endzeit liegt. Es können also Karten für die nächsten Wochen angelegt werden ohne das sie auf der Homepage erscheinen.</p>
			</div>


			<div class="help  span4">
				<h4>Warum hat die PDF Datei nicht den Namen den ich angegeben habe?</h4>	
				<p>Die im Browser angezeigten Dateinamen werden aus dem Kartentyp, dem Start und dem Enddatum gebildet. Sie können die Karten also im System so nennen damit sie diese nicht Verwechseln der Name der im System gewählt wurde hat keine Auswirkung auf den Dateinamen im Browser später. </p>
			</div>

			<div class="help  span4">
				<h4>Wo werden die Links zu den Karten angezeigt?</h4>	
				<p>Die Wochenkarte wird auf jeder Seite in der Sidebar angezeigt. </p>
				<p>Die Speisekarte und Pfifferlingskarte unter <a href="http://www.linde-berkheim.de/speisen/">/speisen</a>.</p>
				<p>Die Steakkarte unter <a href="http://www.linde-berkheim.de/speisen/feiern/">/speisen/feiern</a>.</p>
			</div>
		</div>
		<div class="row">
			<div class="span12">
				<h5>Was wird gerade angezeigt?</h5>
				
				<p>Speisekarte:<br />
					<?php echo KartenAPI::get("speisekarte"); ?>
				</p>

				<p>Mittagkarte:<br />
					<?php echo KartenAPI::get("mittagkarte"); ?>
				</p>

				<p>Pfifferlingskarte:<br />
					<?php echo KartenAPI::get("pfifferlingkarte"); ?>
				</p>

				<p>Steakkarte:<br />
					<?php echo KartenAPI::get("steakkarte"); ?>
				</p>

			</div>


		</div>
	</div>
  </body>
</html>







	