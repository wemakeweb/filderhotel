<meta charset="utf-8">
<?php
session_start();
if(isset($_SESSION['captcha_spam']) AND $_POST["sicherheitscode"] == $_SESSION['captcha_spam']){
unset($_SESSION['captcha_spam']);
$name = $_POST["name"];
$email = $_POST["email"];
$dateA = $_POST["dateA"];
$dateB = $_POST["dateB"];
$message = $_POST["message"];
 if($name=="") 
   {
   $name="<font color=\"red\">Keine Angabe</font>";  /* wenn sie leer ist schreib ich in die Variable in roter Farbe Keine Angabe */
   }
  if($email=="")  /* hier ÃƒÆ’Ã‚Â¼berprÃƒÆ’Ã‚Â¼f ich mit einer If ob die Variable $fax == "" [ob variable gleich leer ist] */
   {
   $email="<font color=\"red\">Keine Angabe</font>";  /* wenn sie leer ist schreib ich in die Variable in roter Farbe Keine Angabe */
   }
if($dateA=="")  /* hier ÃƒÆ’Ã‚Â¼berprÃƒÆ’Ã‚Â¼f ich mit einer If ob die Variable $fax == "" [ob variable gleich leer ist] */
   {
   $dateA="<font color=\"red\">Keine Angabe</font>";  /* wenn sie leer ist schreib ich in die Variable in roter Farbe Keine Angabe */
   }
if($dateB=="")  /* hier ÃƒÆ’Ã‚Â¼berprÃƒÆ’Ã‚Â¼f ich mit einer If ob die Variable $fax == "" [ob variable gleich leer ist] */
   {
   $dateB="<font color=\"red\">Keine Angabe</font>";  /* wenn sie leer ist schreib ich in die Variable in roter Farbe Keine Angabe */
   }   
   if($message=="")  /* hier ÃƒÆ’Ã‚Â¼berprÃƒÆ’Ã‚Â¼f ich mit einer If ob die Variable $fax == "" [ob variable gleich leer ist] */
   {
   $message="<font color=\"red\">Keine Angabe</font>";  /* wenn sie leer ist schreib ich in die Variable in roter Farbe Keine Angabe */
   } 
   

if($name=="" OR $email=="" OR $dateA =="" OR $dateB=="" OR $message=="" ) 
/* Hier wird ÃƒÆ’Ã…â€œberprÃƒÆ’Ã‚Â¼ft ob die Felder Name ODER das Feld Telefon ODER das feld Strasse.... */
{																		/* Leer sind - wenn ja dann schreib in Variable $ausgabe "Fehler" rein */
$ausgabe="<h3>Fehler</h3>
 <strong>Ihrer Buchungsanfrage ist fehlgeschlagen,<br>bitte fÃƒÂ¼llen sie alle Felder aus</strong>";
} else { /* wenn also ÃƒÆ’Ã‚Â¼ber all Was drin steht dann fÃƒÆ’Ã‚Â¤ngt er mit dem Senden der Email an dazu */
$empfaenger = "info@filderhotel.de";
/* wird der EmpfÃƒÆ’Ã‚Â¤nger festgelegt */							
$nachricht = "Neue Kontaktanfrage- FILDERHOTEL";							/* der Betreff */
$from= "Content-Type: text/html; charset=utf-8\n";							/* der Typ des Email */
$text = "<meta http-equiv=\"Content-Type\" content=\"text/plain; charset=iso-8859-1\" />
      Neue Kontaktanfrage - Homepage des FILDERHOTELS - Englische Seite <br><br>
		
		<strong>name:</strong> $name<br><br>
		<strong>email:</strong>$email<br><br>
		<strong>anreise:</strong>$dateA<br><br>
		<strong>abreise:</strong>$dateB<br><br>
		<strong>mitteilung:</strong>$message<br><br>
		";
/* und der Email Text alle $variable werden durch die werte ersetzt 
also bei $vornamen joachim usw. */	
mail($empfaenger, $nachricht, $text, $from);  
 

$ausgabe="	
<h3>Completion of a form was succesful.<br/>
 We look forward to your request.
 <br>
Yours FILDERHOTEL</h3> " ; 
}
} else {
exit("Der Sicherheitscode ist falsch!!!");
}
?>
<!DOCTYPE html>
<html class="uk-notouch" dir="ltr" lang="de">
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="google-site-verification" content="gUxB7q3vJMy4hDc6WbsRCndl7Nfta1tlJLNphSdZz5E"/>
<title>Filderhotel Ostfildern | Hotel Esslingen | Hotel Stuttgart | Hotel Ostfildern</title>
<!--[if lt IE 7]>
<p class="chromeframe">Das ist eine einzigartige Website, die mit den neuesten Web-Technologien wie z.B. HTML 5 und CSS 3 entwickelt wurde. Leider unterstÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¼tzt Ihr Browser diese Technologien nicht.<strong>Bitte aktualisieren Sie Ihren Browser!</strong><a href="http://browsehappy.com/"></a> oder<a href="http://www.google.com/chromeframe/?redirect=true">activate Google Chrome Frame</a></p>
<![endif]-->
<meta name="keywords" content="hotel ostfildern,hotel esslingen"/>
<meta name="Description" content="Filderhotel in Ostfildern bei Esslingen.Zwischen Messe Stuttgart, ICS Kongresszentrum, Flughafen Stuttgart, Hauptbahnhof Stuttgart, Autobahn A8.Technischen Akademie ."/>
<meta name="page-topic" content="hotel ostfildern,ostfildern hotel, hotel esslingen, flughafen stuttgart hotel" />
<meta name="language" content="de,de-at,de-ch"/>
<meta http-equiv="Cache-control" content="public"/>
<meta name="author" content="Filderhotel Heide Otto KG"/>
<link rel="canonical" href="http://www.filderhotel.de"/>
<meta name="revisit-after" content="12 days"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta name="robots" content="index, follow"/>
<meta name="geo.placename" content="ostfildern"/>
<meta name="geo.position" content="48.425589;9.1736.93"/>
<link rel="shortcut icon" href="../../img/logo/favicon.ico"/>
<link href="http://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet" type="text/css">
<link href='http://fonts.googleapis.com/css?family=Handlee' rel='stylesheet' type='text/css'>
<link rel="shortcut icon" href="http://getuikit.com/docs/images/favicon.ico" type="image/x-icon">
<link rel="apple-touch-icon-precomposed" href="http://getuikit.com/docs/images/apple-touch-icon.png">
<link rel="stylesheet" type="text/css" href="../../css/uikit.css">
<link rel="stylesheet" type="text/css" href="../../css/basis.css">
<link rel="stylesheet" type="text/css" href="../../css/components/slideshow.min.css">
<link rel="stylesheet" type="text/css" href="../../css/components/slidenav.min.css">
<link rel="stylesheet" type="text/css" href="../../css/components/dotnav.min.css">
<link rel="stylesheet" type="text/css" href="../../css/components/datepicker.css">
<link rel="stylesheet" type="text/css" href="../../css/components/accordion.css">
<link rel="stylesheet" type="text/css" href="../../css/components/sticky.almost-flat.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.2/jquery.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/2.18.0/js/uikit.js"></script>
<script src="../../js/components/slideshow.min.js"></script>
<script src="../../js/components/slidenav.min.js"></script>
<script src="../../js/components/form-select.js"></script>       
<script src="../../js/components/datepicker.js"></script>
<script src="../../js/components/sticky.min.js"></script>

</head>
<body>
<?php include("../../php/navigation.php"); ?>   
<div class="uk-grid" data-uk-grid-margin>
<div class="uk-small-1-1 uk-width-medium-1-1">
<!--uk-vertical-align--> 
<div class="uk-container uk-container-center uk-text-center">
<div data-uk-scrollspy="{cls:'uk-animation-slide-bottom', repeat:true, delay:900}"> <a href="#willkommen" data-uk-smooth-scroll><i class="uk-text-left uk-icon-angle-down uk-icon-large kontakt-icon-intro"></i><br>
</a></div>
</div> <!--uk-container-->     
</div><!--uk-small-->
</div>  <!--uk-grid-->
<div class="uk-container uk-container-center uk-text-center">
<div class="uk-container">
<div class="uk-width-1-1">
<!--impress-->
<h3 class="uk-heading-large uk-text-center">
<div data-uk-scrollspy="{cls:'uk-animation-slide-top', repeat: true, delay:100}">Kontaktformular</div>
</h3>
</div><!--uk-text-center-->
</div><!--uk-width-1-1-->   
<!--section-willkommen-->  
<section id="willkommen">
<div class="uk-width-1-1">
<div class="uk-grid uk-text-center uk-margin-large-top uk-margin-large-bottom"  data-uk-grid-margin>
<div class="uk-container uk-width-medium-5-10 uk-width-small-1-1 uk-container-center">
<div class="uk-panel info-box">
<div class="uk-text-center" style="margin:12px 7px 7px 7px;">
<h3>Completion of a form was succesful.<br/>
 We look forward to your request.
 <br>
Yours FILDERHOTEL</h3>

 

</div><!--uk-text-left--> 
</div><!--uk-panel-->
</div><!--uk-width-medium-3-10-->
</div><!--uk-grid-->
</div><!--uk-width-1-1-->
</section><!--section-willkommen-->   
<!--ansprechpartner-->
<?php include("../../php/partner.php"); ?>
<!--ansprechpartner--> 
</div>
</div>
<hr class="uk-grid-divider">
</div>
<!--kontakt-->
<?php include("../../php/kontakt.php"); ?>
<!--kontakt--> 
<!--backtotop-->
<div class="uk-container uk-container-center uk-text-center">
  <div data-uk-scrollspy="{cls:'uk-animation-slide-bottom', repeat:true, delay:900}"> <a href="#jo-main" data-uk-smooth-scroll><i class="uk-icon-angle-up uk-icon-large kontakt-icon-intro"></i><br>
    Back to top</a></div>
</div>
<!--uk-scrollspy--> 
<!--uk-container-->
</div>
</div>
<!--backtotop--> 
<!--impresscanvas-->
<?php include("../../php/impress.php"); ?>
<!--impresscanvas--> 
<!--footnote-->
<?php include("../../php/footnote.php"); ?>
<!--footnote-->
</footer>
</section>
<!--section-kontakt--> 
<!--navoffcanvas-->
<?php include("../../php/offcanvas.php"); ?>
<!--navoffcanvas-->

</div>
</div>
</div>
<!--uk-container--> 
<!--my-js--> 
<script src="../../js/jo.js"></script> 
<!--typekit--> 
<script type="text/javascript" src="//use.typekit.net/ryk1idr.js" defer></script>
</body>
</html>

