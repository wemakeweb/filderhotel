<?php
	$id = "bookForm".rand();
	date_default_timezone_set('Europe/Berlin');
?>

<div class="eightcol form-inline booking-large" id="<?php echo $id; ?>">
	Anreise
  
    <input class="arrival span2" size="8" value="<?php echo date("d.m.Y"); ?>" type="text" />
    <i class="icon-calendar icon-large"></i>

 bis zum 
  	<input class="departure span2" size="8" value="<?php echo date("d.m.Y", time() + 60*60*24); ?>" type="text" />
    <i class="icon-calendar icon-large"></i>

  <button  class="btn bookBtn"  role="button">Angebot suchen</button>
  <div class="hide backdrop">
  	 <div class="modal">
	  <div class="modal-header">
	    <button type="button" class="close">×</button>
	    <h5><i class="icon-lock"></i>Buchen</h5>
	  </div>
	  <div class="modal-body">
	    <iframe src="" allowtransparency="false"></iframe>
	  </div>
	</div>
	<div class="spacer"></div>
 </div>
</div>


<script>app.ready(function(){
	new BookForm($("#<?php echo $id; ?>"))
});</script>
