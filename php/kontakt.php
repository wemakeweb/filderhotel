<!--kontakt-->
<meta charset="UTF-8">

<link rel="stylesheet" type="text/css" href="../css/components/datepicker.css">
<link rel="stylesheet" type="text/css" href="../css/ui-lightness/jquery-ui-1.8.2.custom.css"/>
<!--<link rel="stylesheet" type="text/css" href="../css/jquery-ajax-form-validate.css" rel="stylesheet" />-->
<script src="../js/components/form-select.js"></script>       
<script src="../js/components/datepicker.js"></script>
<script type="text/javascript" src="../js/jquery-1.4.2.js"></script>
<script type="text/javascript" src="../js/jquery-ui-1.8.2.custom.js"></script>
<script type="text/javascript" src="../js/jquery.validate.js"></script>
<script type="text/javascript" src="../js/jquery.form.js"></script>
<script type="text/javascript" src="../js/messages_de.js"></script>
<script type="text/javascript" src="../js/init-jquery-ajax-form-validate.js"></script>
<footer>
<div id="kontakt" class="kontakt">
<div class="uk-container uk-container-center uk-text-center uk-margin-large-bottom">
<div class="uk-width-small-1-1">
<h1 class="uk-heading-large" data-uk-scrollspy="{cls:'uk-animation-slide-top', repeat: true, delay:500}">Kontakt</h1>
<p data-uk-scrollspy="{cls:'uk-animation-slide-top', repeat: true, delay:200}"></div>
</div>
<div class="uk-grid uk-text-center" data-uk-grid-match="{target:'.uk-panel'}">
<div class="uk-width-medium-1-3 kontakt-kon-bg-1 uk-float-left">
<div class="uk-panel">
<h1 class="uk-margin-remove" data-uk-scrollspy="{cls:'uk-animation-slide-top', repeat: true, delay:400}">Rufen Sie an</h1>
<h1 class="uk-margin-remove" data-uk-scrollspy="{cls:'uk-animation-slide-top', repeat: true, delay:400}">
<i class="uk-icon-phone uk-text-success">&nbsp;&nbsp;</i><a href="tel:07113401950">+49 (0)711 340195 0</a></h1>
<span data-uk-scrollspy="{cls:'uk-animation-fade', repeat: true, delay:900}">
<i class="uk-icon-fax uk-text-success">&nbsp;&nbsp;</i>+49 (0)711 340195 55</span></div></div>
<div class="uk-width-medium-1-3 kontakt-kon-bg-2 uk-float-left">
<div class="uk-panel">
<h1 class="uk-margin-remove" data-uk-scrollspy="{cls:'uk-animation-slide-top', repeat: true, delay:400}">Schreiben Sie eine E-Mail</h1>
<button class="uk-button" data-uk-modal="{target:'#kontakt-form'}"><h2 data-uk-scrollspy="{cls:'uk-animation-slide-top', repeat: true, delay:600}">
<i class="uk-icon-envelope-o uk-icon-medium" data-uk-tooltip title="E-Mail"></i></h2></button>
<div id="kontakt-form" class="uk-modal">

<div class="uk-modal-dialog">

<a class="uk-modal-close uk-close"></a>

<!--kontakt-->
<section id="kontakt">
<div class="uk-text-center">
<h1 class="uk-margin-large-bottom">E-Mail Formular</h1>
<form id="signup" class="uk-form" method="post" action="../kontakt/form.php">
<div class="uk-form-row">

<button class="uk-button" type="button" disabled>
<i class="uk-icon-user uk-text-success">&nbsp;&nbsp;</i></button>
<input placeholder="Name *" class="uk-form-medium" style="margin: 0px; width: 275px; height: 25px;" type="text" id="name" name="name" required>
 </div>
 <br>                               
<!--<div class="uk-form-row">
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
</div>-->
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
<div class="uk-form-row">
<p>* Pflichtfelder</p> 
</div>
<div class="uk-form-row">


<div class="uk-form-row uk-text-center kontakt-captcha">

<div class="uk-form-row">
<button class="uk-button" type="button" disabled>
<i class="uk-icon-refresh uk-text-success">&nbsp;&nbsp;</i></button>
<img src="../kontakt/captcha/captcha.php" border="1" title="sicherheitscode"/>
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













</div><!--uk-modul-dialog-->
</div><!--kontakt-form-->
</div><!--uk-panel-->
</div><!--uk-medium-->
<div class="uk-width-medium-1-3 kontakt-kon-bg-3 uk-float-left">
<div class="uk-panel">
<h1 class="uk-margin-remove" data-uk-scrollspy="{cls:'uk-animation-slide-top', repeat: true, delay:400}">Postanschrift</h1>
<div data-uk-scrollspy="{cls:'uk-animation-slide-top', repeat: true, delay:900}">
<strong>Filderhotel Heide Otto KG</strong><br>In den Anlagen 1 - D-73760 Ostfildern</div>
<br><br>
<a href="#jo-impress" data-uk-offcanvas><i class="uk-icon-paragraph uk-text-success">&nbsp;&nbsp;</i>Impressum<a/></div>
</div>
</div>
<div class="kontakt-sm">
<div class="uk-container uk-container-center uk-text-center">
<a href="https://www.facebook.com/pages/Filderhotel-Ostfildern/142561105804215" target="_blank" class="kontakt-sm-icon uk-icon-facebook" data-uk-tooltip title="Facebook"></a>

</div>  
</div>