
<meta charset="UTF-8">
<!--kontakt-->
<section id="kontakt">
<div class="uk-text-left">
<h1 class="uk-margin-large-bottom">E-Mail Formular</h1>
<form id="signup" class="uk-form" method="post" action="form.php">
<div class="uk-form-row">

<button class="uk-button" type="button" disabled>
<i class="uk-icon-user uk-text-success">&nbsp;&nbsp;</i></button>
<input placeholder="Name *" class="uk-form-medium" style="margin: 0px; width: 275px; height: 25px;" type="text" id="name" name="name" required>
 </div>
 <br>                               
<div class="uk-form-row">
<button class="uk-button" type="button" disabled>
<i class="uk-icon-calendar uk-text-success">&nbsp;&nbsp;</i></button>
<input placeholder="Anreise *" data-uk-datepicker="{format:'DD.MM.YYYY'}" class="uk-form-medium" style="margin: 0px; width: 275px; height: 25px;"
type="text" id="dateA" name="dateA" required>
</div>
<br>
<div class="uk-form-row">
<button class="uk-button" type="button" disabled>
<i class="uk-icon-calendar uk-text-success">&nbsp;&nbsp;</i></button>
<input placeholder="Abreise *" data-uk-datepicker="{format:'DD.MM.YYYY'}" class="uk-form-medium" style="margin: 0px; width: 275px; height: 25px;" 
type="text" id="dateB" name="dateB" required>
</div>
<br>
<div class="uk-form-row">
<button class="uk-button" type="button" disabled>
<i class="uk-icon-envelope-o uk-text-success">&nbsp;&nbsp;</i></button>
<input placeholder="E-Mail *" class="uk-form-medium" style="margin: 0px; width: 275px; height: 25px;" type="text" id="email" name="email" required>
</div>
<br>
<div class="uk-form-row">
<button class="uk-button" type="button" disabled>
<i class="uk-icon-file-text-o uk-text-success">&nbsp;&nbsp;</i></button>
<textarea cols="30" rows="5" style="margin: 0px; width: 275px; height: 75px;" placeholder="Ihre Nachricht *" id="message" name="message" required></textarea>
</div>
<p>* Pflichtfelder</p> 
<div class="uk-form-row">


<div class="uk-form-row uk-text-left kontakt-captcha">

<div class="uk-form-row">
<button class="uk-button" type="button" disabled>
<i class="uk-icon-refresh uk-text-success">&nbsp;&nbsp;</i></button>

<img src="captcha/captcha.php" border="1" title="sicherheitscode"/>
<button class="uk-button" type="button" disabled>sicherheitscode</button>
</div><!--uk-form-->
<div class="uk-form-row">
<button class="uk-button" type="button" disabled>
<i class="uk-icon-refresh uk-text-success">&nbsp;&nbsp;</i></button>

<textarea cols="10" rows="1" style="margin: 0px; width: 275px; height: 25px;" placeholder="Sicherheitscode eintragen" id="captcha_spam" name="sicherheitscode">
</textarea></div>
</div>
<div class="uk-form-row" style="margin: 20px; padding: 30px;">
  <button class="uk-button-primary uk-button-large" type="submit"  id="contact-submit">Absenden</button></div>
<div class="controls"><?php echo $ausgabe;?></div>
</form>
</div><!--uk-text-left-->
</section>