$(function () {
   window.cookieconsent.initialise({
     palette: {
       popup: {
         background: '#ffffff'
       },
       button: {
         background: '#990000'
       }
     },
     content: {
       message: 'Wir benutzen Cookies, um Ihnen das beste Webseiten-Erlebnis zu ermöglichen.',
       link: 'Mehr',
       href: 'https://www.filderhotel.de/impressum#datenschutz',
       dismiss: 'Verstanden'
     }
   });
 });

/*scrollen sebastian otto */
$(function(){
var height, $nav, $win = $(window), klasse, hasClass = false;
 /* Config */
/* Scroll Weite in pixelen */
height = 690;
/* Element dem die klasse hinzugefügt wird */
$nav = $('.navbar-inner');
/* class die hinzugefügt wird */
klasse = 'scrolled';
$win.on('scroll', function(){
if( $win.scrollTop() > height && !hasClass ){
hasClass = true;
$nav.addClass(klasse);
} else if( $win.scrollTop() < height && hasClass ){
hasClass = false;
$nav.removeClass(klasse);
}
});
});





  WebFontConfig = {
    google: { families: [ 'Lato::latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();



var mainbottom = $('#jo-main').offset().top + $('#jo-main').height();

$(window).on('scroll',function(){

    // we round here to reduce a little workload
   var stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
        $('.jo-nav-bg').addClass('jo-nav-bg-on');
        $('.jo-nav-br').addClass('jo-nav-br-on');
        $('.uk-navbar-nav').addClass('uk-navbar-nav-on');
        $('.jo-nav-br-l').addClass('jo-nav-br-l-on');
        $('.jo-intro-bg').addClass('jo-intro-bg-on');
    } else {
        $('.jo-nav-bg').removeClass('jo-nav-bg-on');
        $('.jo-nav-br').removeClass('jo-nav-br-on');
        $('.uk-navbar-nav').removeClass('uk-navbar-nav-on');
        $('.jo-nav-br-l').removeClass('jo-nav-br-l-on');
        $('.jo-intro-bg').removeClass('jo-intro-bg-on');
    }

});



function pviiClassNew(obj, new_style) { //v2.6 by PVII
  obj.className=new_style;
}



 $(function(){
                $(document).on('mouseover', '[data-docs-animation]', function() {

                    var element   = $(this),
                        animation = element.data("docsAnimation");

                    if(element.data("anim-idle")) {
                        clearTimeout(element.data("anim-idle"));
                    }

                    element.removeClass(animation);

                    setTimeout(function(){
                        element.addClass(animation);

                        element.data("anim-idle", setTimeout(function(){
                                element.removeClass(animation);
                                element.data("anim-idle", false);
                        }, 500));
                    }, 50);
                });
            });





var highest_element = 0;

	// Prüfe, welches Element am höchsten ist
	$('.teaser').each(function() {
	  if ($(this).height() > highest_element) {
	    highest_element = $(this).height();
	  }
	});

	// Weise diese Höhe allen Elementen zu.
	$('.teaser').each(function() {
	  $(this).height(highest_element);
	});
