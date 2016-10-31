
<span class="flag2">
    <a href="<?php pfad(); ?>english/"><img src="<?php pfad(); ?>images/gb.png" width="16" height="11"  border="0px" alt="english" /></a>
    <a href="<?php pfad(); ?>"><img src="<?php pfad(); ?>images/de.png" width="16" height="11" border="0px" alt="deutsch"/> </a><br />
   	</span>
   <br /><br />
       




<div id="form_buchen" >
			<noscript><p><font size="-2">Bitte aktivieren sie JavaScript</font></p></noscript>
            
            

                    <form target="_blank" action="http://www.hoteldaten.com/koop-apis/wdba/dorequest.php" method="get" name="booking" />
								<table>
                                <tr>
        						<td><small>Anreise:</small></td>
                                <td><input type="text" maxlength="10" name="arrival" size="8" class="input" />
                    		<img src="<?php pfad(); ?>images/book.png" border="0" class='pointer' id='kalender_arrive'   
                                onclick="show_kalender('arrival');" 
                                 alt"calender" /></td>
                              </tr>
                              <tr>
                              	<td><small>Abreise:</small></td>
                                <td><input type="text" maxlength="10" name="departure" size="8" class="input" />
                             <img src="<?php pfad(); ?>images/book.png" name="kalender_arrive" border="0" class='pointer' id='kalender_arrive' 
                                   onclick="show_kalender('departure');" 
                                   alt="calender" /></td>
       						</tr>
                            <tr>
        						<td><small>Zimmer:</small></td>
                                <td><select name="rooms">
                                        <option selected="selected" value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>                        
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option></select></td>
        				</tr>
                        <tr>                        
                                <td><br /><small>Pers.:</small></td>
                                <td><select name="persons">
                                      <option selected="selected" value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                                      <option value="6">6</option>
                          
                                      <option value="7">7</option>
                                      <option value="8">8</option>
                                      <option value="9">9</option>
                                      <option value="10">10</option></select></td>       
      
       				 </tr>
              </table>
        	<input type="image" value="Abschicken!"  src="<?php pfad(); ?>images/form_send.jpg" />
        	<input type="hidden" name="webresid" value="4979" />
       		<input type="hidden" name="LANG" value="DE" />
     
    <br />
<div id="kalender"  style="display:none;" class="ie-fix-opacity">
<br />
<div id="kalender_content" ie-fix-opacity></div>
</div>

<p></p>
	<p></p>
    	<p></p>
 </div>