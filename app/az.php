<!DOCTYPE html>
    <head>
    <title>Freizeit im FILDERHOTEL</title>

	<link rel="stylesheet" href="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.css" />
	<script src="http://code.jquery.com/jquery-1.8.2.min.js"></script>
	<script src="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.js"></script>

	
	<link rel="stylesheet" href="styles/styles.css" />
	
	<meta charset='UTF-8'> 
	
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<link rel="apple-touch-icon-precomposed" href="bilder/icon-ipad.png" sizes="72x72" />
	<link rel="apple-touch-icon-precomposed" href="bilder/icon-iphone-retina.png" sizes="114x114" />
	<link rel="apple-touch-icon-precomposed" href="bilder/icon-ipad-retina.png" sizes="144x144" />
	<link rel="apple-touch-icon-precomposed" href="bilder/icon-iphone.png" />

	<script type="text/javascript" src="https://www.google.com/jsapi"></script>      
        <script type="text/javascript">
			google.load("maps", "3", {'other_params':'sensor=true'});
		</script>
	<script src="js/jquery.ui.map.full.min.js" type="text/javascript"></script>
<style>
 .ui-listview .ui-li.ui-btn {
    background-image: none;
    border-color: #222;
}
[data-role=listview] h2 {
	font-family: 'Roboto', serif;
font-weight: normal;
color:#990000;
font-size:1.2em;
line-height:0.8em;
text-shadow: 1px 1px 0px rgba(255, 255, 255, 1);
padding-left:30px;
}
</style>
</head>
<body> 

<!-- Menue Seite -->
<div data-role="page" id="menue">

<div data-role="header" data-theme="c" data-position="fixed" data-tap-toggle="false">
<a href="index.php" data-role="button" data-icon="home" data-iconpos="notext">Dieser Text wird nicht angezeigt.</a>
<h1>Hotelinformationen A - Z</h1>
</div>
<div data-role="content">
<p>Folgende Seiten helfen Ihren Aufenthalt
angenehm zu gestalten. Gerne sind Ihnen auch die Damen an der Rezeption behilflich.</p>
<h3>Ärzte</h3>

<p>Ein Ärzteverzeichnis erhalten Sie an der Rezeption.</p>

<h3>Anreise / Abreise</h1>

<p>check in: 	     ab 14:00 Uhr  bis 23:00 Uhr</p>
<p>early check in:  	zuzüglich 40% des 	Zimmerpreises</p>

<p>Bei Spätanreisen wird der Zimmerschlüssel<br> im Schlüsselsafe am Nachteingang deponiert.</p>

<p>check out: 	     bis 11:00 Uhr</p> 
<p>late check out:  bis 18:00 Uhr,<br> zuzüglich 80% des Zimmerpreises,</p>
<p>nach 18:00 Uhr werden 100% berechnet</p>

<p>Sie möchten vor 6:30 Uhr abreisen, bitte informieren Sie am Vorabend die Rezeption.</p>

<p>Die Hotelrechnung ist bei Abreise zu begleichen, als Zahlungsmittel akzeptieren wir Girocard, alle gängigen Kreditkarten und Euro.</p>


<h3>Apotheken</h3>

<p>Die Rezeption gibt Ihnen gerne Auskunft über die diensthabende Apotheke.</p>


<h3>Autohaus</h3>

<p>Ein Verzeichnis erhalten Sie an der Rezeption.</p>


<h3>Autovermietungen</h3>
<ul>
<li>Avis</li>
<li>Flughafen</li>
<li>Terminal 3, Ebene 2</li>
<li>70629 Stuttgart</li>
<li>Tel. 0711 9484451</li>
</ul>
<h3>Hertz</h3>
<ul>
<li>Flughafen</li>
<li>Terminal 3, Ebene 2</li>
<li>70629 Stuttgart</li>	
<li>Telefon: 0711 9484339</li>
</ul>
<h3>Europcar</h3>
<ul>
<li>
Schorndorfer Str. 14 </li>
<li>73730 Esslingen</li>
<li>Telefon: 0711 9392170</li>
</ul>

<h3>Bademantel </h3>

<p>Gerne stellen wir Ihnen einen Bademantel zur Verfügung.</p>


<h3>Blumen</h3>
<ul>
<li>Blumen Siegle</li>
<li>Riegelstraße 33</li>
<li>73760 Ostfildern-Nellingen</li>
<li>Telefon: 0711 343414</li>
</ul>
<h3>Blumen Sonn</h3>
<ul>
<li>Hindenburgstr. 14</li>
<li>73760 Ostfildern-Nellingen</li>
<li>Telefon: 0711 3411395</li>
</ul>

<h3>Bank</h3>

<p>Eine Übersicht erhalten Sie an der Rezeption (Siehe auch unter Geldautomaten).</p>


<h3>Bus</h3>

<p>Siehe öffentliche Verkehrsmittel</p>


<h3>Einkaufen</h3>

<p>Stuttgart: Kaufhaus Breuninger, Markthalle,<br>
 Köningsbau-Passagen, Das Gerber,<br>
  Milaneo</p>
<p>Metzingen: Outlet-City,Hugo Boss, Windsor,
 Schiesser, <br>Gerry Weber und 
viele mehr. </p>

<h3>Fax</h3>

<p>Faxversand je Einheit	  0,15 €</p>
<h3>Faxempfang</h3>
<p>die ersten 5 Seiten sind für Sie kostenfrei,<br>
 ab der 6. Seite jede weitere Seite	0,20 €</p>



<h3>Fitness Center</h3>
<ul>
<li>Vitalis Fitness & Freizeit</li>
<li>Bonhoefferstr. 1</li>
<li>73760 Ostfildern</li>
<li>Telefon: 0711 3482820</li>	
</ul>

<h3>Fotokopien</h3>

<p>Kleine Anzahl Kopien erledigen wir gerne<br> für Sie an unserer Rezeption.</p>
<p>Die ersten 5 Seiten sind für Sie kostenfrei,<br> ab der 6. Seite/ je weitere Seite	   0,30 €</p>


<h3>Freizeit</h3>

Informationen über Sehenswürdigkeiten, Museen, Ausflugsziele usw. erhalten Sie an der Rezeption: 

Stuttgart: Zoologisch-Botanischer Garten 'Wilhelma', Höhenpark Killesberg, Planetarium, Markthalle, Altes und Neues Schloß, Fernsehturm
Esslingen: historische Altstadt,  
Gerlingen: Schloss Solitude, 
Ludwigsburg: Barock-Schloss
Schwäbische Alb mit Albtrauf bei Weilheim/Teck und Burg Hohenneuffen

Mineralbäder Bad Cannstatt, Berg und Leuze und Schwabenquellen in Stuttgart, Panoramatherme Beuren, Merkelbad Esslingen


Friseur

Happy Hair
Riegelstr. 62
73760 Ostfildern-Nellingen
Telefon: 0711 343432

Pit's Friseurlädle
Denkendorfer Str. 15
73760 Ostfildern-Nellingen
Telefon: 0711 343499







Frühstück

Montag – Freitag	7:00 – 10:00 Uhr
Samstag + Sonntag	8:00 – 10:00 Uhr

Möchten Sie außerhalb dieser Zeiten frühstücken, wenden Sie sich bitte an die Rezeption.

Preise: (falls nicht im Logispreis enthalten)

Gäste von außerhalb: 11,00 € pro Person
- bitte am Vortag anmelden.

Geldautomaten

Kreissparkasse Esslingen-Nürtingen
Filiale Hindenburgstraße 1

BW-Bank
Filiale Hindenburgstrasse 5


Hallenbad Nellingen

Gegenüber des Filderhotels:
Telefon: 0711 349855

Beckengröße: 	12,5 x 25m
Wassertiefe: 	1,00 – 3,60m
Sprungturm: 	3m   

An der Rezeption erhalten Sie Information über die Öffnungszeiten und einen Coupon, der Sie zum kostenlosen Eintritt in das Hallenbad berechtigt. Wir statten Sie auch gerne mit Bademantel und Badetuch aus.


Haustiere

Haustiere pro Tier / Nacht	 12,00 €


Internetzugang

Im gesamten Haus ist W-LAN kostenfrei möglich, Tickets bekommen Sie an der Rezeption.

Ein Gäste-Notebook  oder iPad können Sie, gegen Vorlage einer Kreditkarte, gratis ausleihen.







Jogging

Eine gelenkeschonende Baumrindenbahn führt um das Nellinger Stadion hinter der Technischen Akademie.


Krankenhaus

Paracelsus Krankenhaus Ruit
Hedelfinger Str. 166
73760 Ostfildern-Ruit
Telefon: 0711 4488-0

Städtische Kliniken Esslingen
Hirschlandstr. 97
73730 Esslingen
Telefon: 0711 3103-0


Kino

'Traumpalast'
Kollwitzstr. 1
73730 Esslingen
Telefon:  0711 550907-0


Minibar

Gerne bestücken wir eine Minibar nach Ihren Wünschen und stellen sie in Ihr Zimmer.

Preise:

Zwiefalter Abt Naturtrüb	
0,33 l
2,30 €
Teinacher Gourmet Mineralwasser
0,25 l
1,60 €
Orangensaft	
0,20 l
1,70 €
Coca-Cola (1,2)	
0,33 l
1,70 €
Baden-Württemberger Weißwein
0,25 l
3,50 €
Baden-Württemberger Rotwein
0,25 l 
3,55 €
Asbach Uralt Weinbrand
4 cl
3,00 €
Whiskey
5 cl
4,30 €
Campari (2)	
4 cl
3,30 €
Dornkaat	
4 cl
2,40 €
Jägermeister
2 c
2,50 €
Underberg
2 cl
1,70 €
Zusatzstoffe : (1) koffeeinhaltig, (2) mit Farbstoff	



Sie können auch unsere Minibarpauschale für € 11,00/Tag wählen:

2 Zwiefalter Klosterpils 0,33 l, 
1 Orangensaft 0,2 l, 1 Coca-Cola 0,33 l, 
1 Asbach Uralt 4 cl, Underberg 2 cl, 
Erdnüsse 150g, Mars Schokoriegel 


Museen - Musical - Kabarett - Varieté

Informationen erhalten Sie an der Rezeption. Tickets besorgen wir gerne für Sie.


Notruf

von Ihrem Hotelzimmer aus:
Rezeption	9
Polizei	             0 110
Feuer		0 112
Notarzt		0 19222
Polizeirevier	0 7091-3 


Öffnungszeiten Rezeption

Die Rezeption ist Montag bis Donnerstag von 6:30 Uhr bis 23:00 Uhr besetzt,
Freitag bis Sonntag von 07:00 bis 21:00 Uhr.

Unabhängig von diesen Zeiten, öffnet Ihr Zimmerschlüssel jederzeit den Nachtein-gang an der Seite des Gebäudes. Sie gelangen über das Treppenhaus in Ihr Zimmer. Bitte nehmen Sie dehalb Ihren Zimmerschlüssel mit, wenn Sie das Hotel verlassen.

Bitte beachten Sie: In den Schulferien und an Feiertagen können sich gegenüber den regulären Öffnungszeiten Änderungen ergeben.


Öffentliche Verkehrsmittel

Mit der U7 kommen Sie bequem in ca. 20 Minuten in die Stadtmitte von Stuttgart und mit der U8 zum Musicalcenter. Die Haltestelle erreichen Sie in 2 Minuten zu Fuß. Fahrpläne und Informationen erhalten Sie an der Rezeption.

Gute Busverbindungen bestehen Richtung Esslingen, Richtung Denkendorf, Wolfschlugen und zum Flughafen.


Fortsetzung- Öffentliche Verkehrsmittel

Die Bushaltestelle für die Fahrt Richtung Esslingen befindet sich an der Endhaltestelle der U-Bahn auf der gegenüberliegenden Straßenseite.
Die Haltestelle für die Fahrt Richtung Denkendorf befindet sich von hier aus gesehen, links von der Endhaltestelle der U-Bahn.

Die Haltestelle für die Fahrt Richtung Wolfschlugen/ Neuhausen
befindet sich an der Hindenburgstrasse/ Ecke Riegelstrasse. 

Fahrpläne und Informationen, sowie die günstigen 3-Tage-Tickets für Hotel- und Kongressgäste erhalten Sie an der Rezeption.


Parken

Auf dem hoteleigenen Parkplatz und den hoteleigenen Stellplätzen in der 
Tiefgarage parken Sie kostenfrei. Auf dem gegenüberliegenden Parkplatz 
parken Sie von 12.30 Uhr bis 08.00 Uhr kostenfrei.


Post

Briefmarken halten wir an der Rezeption vorrätig, gerne bringen wir Ihre Post auf den Weg.
Postfiliale Nellingen, Ludwig-Jahn-Str. 60 (bei der Endhaltestelle)


Rasierset

Sie haben Ihren Rasierer vergessen - wir helfen Ihnen gerne aus. 


Reinigung

Gerne bringen wir Ihre Kleidungsstücke dorthin, und holen sie wieder ab.

'Jacke wie Hose'
Ludwig-Jahn-Str. 60
73760 Ostfildern-Nellingen
Telefon: 0711 3002169





Restaurants/Gaststätten

Schwäbisch und saisonale Küche
KuBinO's Restaurant                                           
In den Anlagen 6                                                  
73760 Ostfildern-Nellingen 
Telefon: 0711 469091-0
Montag Ruhetag
Samstag ab 18:00 Uhr geöffnet
Sonntagabend geschlossen


Restaurant Schlemmertöpfle
An der Akademie 4 
73760 Ostfildern-Nellingen
Telefon: 0711 30020603
Dienstag + Mittwoch Ruhetag


Bauernstüble/ Chez Valerie
Hindenburgstraße 29
73760 Ostfildern-Nellingen
Telefon: 0711 4567000
Donnerstag – Samstag abends geöffnet Sonntag - Mittwoch geschlossen


Angelika's Schwäbischer Treffpunkt                   
Denkendorferstr. 1
73760 Ostfildern-Nellingen                                               Telefon: 0711 3411674
Freitag Ruhetag
Sonntag nur bis 21 Uhr geöffnet


Gaststätte Sonne
Wilhelmstr. 43
73760 Ostfildern-Nellingen
Telefon: 0711 3455594
Montag geschlossen


Alte Wache
Claude-Dornier-Str. 4
73760 Ostfildern-Scharnhauser Park
Telefon: 0711 3481365
Täglich: 11:30 -14:00 Uhr und
              17:30- 24:00 Uhr 


Italienische Küche
Pizza Pazza Bistro
Riegelstr. 50
73760 Ostfildern-Nellingen
Telefon: 0711 3009110
Montag 10:00 -15:00 Uhr
Dienstag – Sonntag 10:00 - 22:00 Uhr




AL CAMINO
Wilhelmstr. 26
73760 Ostfildern-Nellingen
Telefon: 0711 3411386
täglich: 11.30 – 14.30 Uhr und
            17:30 – 23.30 Uhr 


Da Zia Anna
Hedelfinger Str. 5
73760 Ostfildern-Ruit
Telefon: 0711 415239
Samstag Ruhetag


Asiatische Küche

New-Wok-Men Restaurant
Niemöllerstr. 13	
73760 Ostfildern
Telefon: 0711 3428388
U-Bahnhaltestelle 
täglich: 11:30 - 15:00 Uhr und
            17:30 - 23:00 Uhr


Sonstige

McDonald's
Felix-Wankel-Str 5
73760 Ostfildern-Nellingen
Telefon: 0711 348947
Sonntag bis Donnerstag: 07:00 - 01:00 Uhr Freitag und Samstag: 09:00 – 04:00 Uhr


Snacks

Snacks, Suppen und Salate können Sie an der Rezeption bestellen.


Tankstellen

ARAL
Marie-Curie-Str. 2
73770 Denkendorf
Telefon: 0711 3482625

SHELL	
Felix-Wankel-Str. 3
73760 Ostfildern-Nellingen
Telefon: 0711 343838









Taxi 

Taxi-Zentrale
Bahnhofplatz 2
73728 Esslingen
Telefonnummer vom Hotelzimmer: 8007
vom Mobiltelefon: 0711 353366




Telefon

Zentrale		9
Rezeption		139
Notruf intern  		9
Notruf extern		0 110
Notruf Feuer		0 112
Notarzt			0 19222
Amtsleitung		0 

Sie sind telefonisch direkt im Zimmer erreichbar 0049 711 340195 + Ihre Zimmernummer 

Auslandsvorwahlen finden Sie auf der letzten Seite. 


Tennis

Außenplätze und Plätze in der Halle finden Sie bei der Tennishütte 
In den Anlagen 17.


Tickets -  Theater -  Varieté

Informationen erhalten Sie an der Rezeption. Gerne reservieren wir für Sie Tickets.


U-Bahn

Siehe Öffentliche Verkehrsmittel









Wäscheservice

Gerne waschen und bügeln wir Ihre Wäsche.

Preise:

T-Shirt
2,60 €
Sweatshirt
2,80 €
Oberhemd/Bluse/Pulli
4,60 €
Unterwäsche
2,10 €
Schlafanzug		
4,60 €
Paar Socken
2,30 €
Jeans o.ä.
7,20 €
Hose aufbügeln
7,20 €
Anzug aufbügeln
12,90 €



Weckruf

Bis 23:00 Uhr nimmt die Rezeption gerne Ihren Weckauftrag entgegen.

Über Ihr Telefon im Zimmer können Sie sich auch selbst wecken lassen:
Hörer abnehmen
Sie wählen zuerst die 7, dann tippen Sie die gewünschte Weckzeit als vierstellige  
Zahl ein und legen den Hörer
wieder auf. 	


Wireless LAN 

Im gesamten Haus ist W-LAN kostenfrei möglich, Tickets bekommen Sie an der Rezeption. Ein Gäste-Notebook  oder iPad
können Sie, gegen Vorlage einer Kreditkarte, gratis ausleihen.








</div><!--content-->
	
<div data-role="footer" data-id="footernav" data-tap-toggle="false" data-position="fixed" data-theme="c">
<div data-role="navbar" data-theme="c">
<ul>
<li><a href="menue.php" data-icon="action" data-transition="fade" class="ui-btn-active">FREIZEIT</a></li>
<li><a href="ruf.php" data-icon="alert" data-transition="fade">EMPFANG</a></li>
<li><a href="anfahrt.php" data-icon="location" data-transition="fade">ANFAHRT</a></li>
<li><a href="restaurant.php" data-icon="info" data-transition="fade">RESTAURANT</a></li>
</ul>
</div>
</div>

</div>

</body>
</html>