<!DOCTYPE html>
<html>
  <head>
    <title>Admin > Übersicht </title>
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
              <li class="active"><a href="/admin/">Übersicht</a></li>
              <li class=""><a href="/admin?action=hilfe">Hilfe</a></li>
            </ul>
          </div><!--/.nav-collapse -->
        </div>
      </div>
    </div>
<div class="container">
    <div id="list">
    
    
	    	
			<a href="#create" role="button" class="btn  pull-right btn-primary clearfix" data-toggle="modal">Karte Hochladen</a>
            
			<? if( isset($this->errors) ) : ?>
				<?php foreach($this->errors as $error) : ?>
					<div class="alert"><? echo $error; ?></div>
				<?php endforeach; ?>
			<? endif; ?>

			<? if( isset($this->notifications) ) : ?>
				<?php foreach($this->notifications as $noti) : ?>
					<div class="alert alert-info"><? echo $noti; ?></div>
				<?php endforeach; ?>
			<?php endif; ?>

			
			<?php if(count($this->files) == 0) : ?>
				<div class="well">
			  		Keine Dateien …
				</div>
			<?php else: ?>
	    	<table class="table table-striped">
			  <thead>
			    <tr>
			      <th>Dateien</th>
			      <th>Von</th>
			      <th>Bis</th>		      
			      <th>Anzeigen</th>
			     <!-- <th>Aufrufe</th>-->
			      <th></th>
			      <th></th>
			    </tr>
			  </thead>
			  <tbody>
			    <?php foreach($this->files as $id => $file) : ?>
				    <tr data-name="<?php  echo basename($file->name); ?>" data-start="<?php echo $file->start; ?>" data-end="<?php echo $file->end; ?>" data-visible="<?php echo implode(',', $file->visible); ?>" data-id="<?php echo $id; ?>">
				      <td><a href="/files/<?php echo $file->file.'/'.$file->name.'.pdf' ?>"><?php  echo basename($file->name); ?></a></td>
				      <td><?php  echo $file->start; ?></td>
				      <td><?php  echo $file->end; ?></td>
				      <td><?php  echo implode(',',$file->visible); ?></td>
				      <!--<td><?php  echo $file->count; ?></td>-->

				      <td><button class="btn btn-small" data-action="edit"><i class="icon-pencil"></i></td>
				      <td><button class="btn btn-small btn-danger" data-action="delete" ><i class="icon-trash"></i></td>
				    </tr>

				<?php endforeach; ?>
	  
			  </tbody>
			</table>
		
		<?php endif; ?>

			<div class="modal hide" id="create" tabindex="-1" role="dialog"  aria-hidden="true">
			  <div class="modal-header">
			    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>
			    <h3>Neue Karte Anlegen</h3>
			  </div>
			  <div class="modal-body">
			  	
			  	<form action="?upload" method="post"  enctype='multipart/form-data'>
			  		<label><h5>Name:</h5></label>
				  	<input type="text" id="create-file-name" name="name" placeholder="zB. Wildkarte Kw 39"/>
					
                    <h5>Anzeigen</h5>
				  	<label class="checkbox"><input type="checkbox" name="visible[]" value="sidebar" /> Sidebar </label>
                    
                    <label class="checkbox"><input type="checkbox" name="visible[]" value="restaurant" /> Restaurant Seite </label>
                    
                    <label class="checkbox"><input type="checkbox" name="visible[]" value="feiern" />Feiern Seite</label>


                    
                    

				  	<label><h5>Anzeigen ab:</h5></label>
				  	<input type="text" id="create-start" name="start" value="<?php echo date('d.m.Y'); ?>" placeholder="TT.MM.JJJJ" />

				  	<label><h5>Anzeigen bis:</h5></label>
				  	<input type="text" id="create-end" name="end" value="<?php echo date('d.m.Y', time() + 86400 ); ?>" placeholder="TT.MM.JJJJ" />

				  	<label><h5>Datei</h5></label>
				  	<input type="file" name="filename" />
				


			  </div>
			  <div class="modal-footer">
			  	<input class="btn btn-primary" type="submit" value="Anlegen" name="action">
			    <button type="abort" class="btn" data-dismiss="modal" aria-hidden="true">Abbrechen</button>
			   
			  </div>
			  </form>
			</div>
			

			<div class="modal hide" id="edit" tabindex="-1" role="dialog"  aria-hidden="true">
			  <div class="modal-header">
			    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>
			    <h3>Bearbeiten</h3>
			  </div>

			  <div class="modal-body">	
			  	<form action="?edit" method="post" >
			  		<label>Name:</label>
				  	<input type="text" id="edit-file-name" name="name" />

				  	<h5>Anzeigen</h5>
				  	<label class="checkbox"><input type="checkbox" name="visible[]" value="sidebar" /> Sidebar </label>
                    <label class="checkbox"><input type="checkbox" name="visible[]" value="restaurant" /> Restaurant Seite </label>
                    <label class="checkbox"><input type="checkbox" name="visible[]" value="feiern" />Feiern Seite</label>

				  	<label>Anzeigen ab:</label>
				  	<input type="text" id="edit-start" name="start" value="" placeholder="TT.MM.JJJJ" />

				  	<label>Anzeigen bis:</label>
				  	<input type="text" id="edit-end" name="end" value="" placeholder="TT.MM.JJJJ" />
				  	<input type="hidden" id="edit-id" name="fileid" value="" />
				  	<input type="hidden" name="_action" value="edit" />

			  </div>
			  <div class="modal-footer">
			  	<input class="btn btn-primary" type="submit" value="Speichern" >
			    <button type="abort" class="btn" data-dismiss="modal" aria-hidden="true">Abbrechen</button>	    
			  </div>
			  </form>
			</div>
		</div>

		<div class="modal hide" id="delete" tabindex="-1" role="dialog"  aria-hidden="true">
			  <div class="modal-header">
			    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">x</button>
			    <h3>Löschen</h3>
			  </div>

			  <div class="modal-body">	
			  	<form action="?delete" method="post" >
			  		Wollen sie wirklich Datei <em style="font-weight:bold">"<span id="delete-file-name"></span>"</em> löschen?
			  		<input type="hidden" id="delete-id" name="fileid" />
			  		<input type="hidden" name="_action" value="delete" />
			  </div>
			  <div class="modal-footer">
			  	<input id="actBtn" class="btn btn-primary btn-danger" type="submit" value="Löschen" name="action">
			    <button type="abort" class="btn" data-dismiss="modal" aria-hidden="true">Abbrechen</button>	    
			  </div>
			  </form>
			</div>
		</div>


		
    

    </div>


    
    <script src="http://code.jquery.com/jquery-latest.js"></script>
    <script src="/admin/templates/bootstrap.min.js"></script>
    <script>
    $(function(){
    	$('[data-action*="edit"]').click(function(){
    		var data = $(this).parents('tr').data(),
				$el = $('#edit');

    		$('#edit-file-name').val(data.name);
    		$('#edit-type').val(data.type);
			var visible = data.visible.split(',');

			$el.find('input[type="checkbox"]').each(function(i, item){
				if( visible.indexOf($(item).val()) ){
					$(item).attr('checked', true);
				}
			});
			
			
    		$('#edit-start').val(data.start);
			$('#edit-end').val(data.end);
			$('#edit-id').val(data.id);

			$('#edit').modal();
    	});


    	$('[data-action*="delete"]').click(function(){
    		var data = $(this).parents('tr').data();
    		$('#actBtn').attr("disabled", "disabled");
    		$('#delete-file-name').html(data.name);
    		$('#delete-id').val(data.id);

			$('#delete').modal();
			var sec = 3;
			$('#actBtn').val("Löschen (4s)");
			var timer = setInterval(function(){
				$('#actBtn').val("Löschen (" + (sec-- )+"s)");
			}, 1000);

			setTimeout(function(){
				$('#actBtn').attr("disabled", false).val("Löschen");
				clearInterval(timer);
			}, 4000);
    	});
    });
    </script>
  </body>
</html>




