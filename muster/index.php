<!DOCTYPE html>
<html lang="en-gb" dir="ltr">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <script src="_test.js"></script>
    <link rel="stylesheet" href="muster.css" media="screen" charset="utf-8">
    <link rel="stylesheet" href="theme.css" media="screen" charset="utf-8">
    <link rel="icon" type="image/png" href="images/favicon.png">
    
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.2/jquery.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/2.18.0/js/uikit.js"></script>
	
	<script src="../js/components/sticky.js"></script>
    <script src="../js/components/slideshow.js"></script>
    <script src="../js/components/slideshow-fx.js"></script>
    <script src="../js/components/parallax.js"></script>
    <script src="../js/components/tooltip.js"></script>
    <script src="vendor.js"></script>
    <style>
    .loaded {
        display: none;
    }
    
    .loading {
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        z-index: 9999;
    }
    </style>
    <script>
    $(window).load(function() {
        // Animate loader off screen
        $(".loading").fadeOut("slow");
        $(".loaded").fadeIn("slow");
    });
    </script>
</head>

<body>
    <div class="uk-width-1-1 uk-block-large loading">
        <div class="uk-container uk-container-center uk-text-center">
            <ul class="uk-list uk-list-space">
                <li><i class="uk-icon-spinner uk-icon-spin"></i> Loading... </li>
            </ul>
        </div>
    </div>
    </div>
    <div class="loaded">
        <nav id="navbar" class="uk-navbar uk-hidden-small" data-uk-sticky="{top:'-90vh'}">
            <div class="uk-navbar-content uk-navbar-center">
                <div class="uk-navbar-content logo"><img src="../img/logo/logo.png" width="150px" alt="iNiApp.com"></div> <a href="#offcanvas-1" class="uk-navbar-toggle uk-visible-small" data-uk-offcanvas></a>
                <div class="uk-navbar-flip">
<ul class="uk-navbar-nav" data-uk-scrollspy-nav="{closest:'li', smoothscroll:true}">
 <li><a href="#section-0" data-uk-smooth-scroll="{offset: 90}"><i class="uk-icon-home"></i> Home</a></li>
                        <li><a href="#section-1" data-uk-smooth-scroll="{offset: 90}"><i class="uk-icon-user"></i> About me</a></li>
                        <li><a href="#section-3" data-uk-smooth-scroll="{offset: 90}"><i class="uk-icon-user"></i> Work Process</a></li>
                    </ul>
                </div>
            </div>
            <!-- <div class="uk-navbar-content uk-navbar-center"><img src="images/logo.png" width="97px" alt="iNiApp.com"></div> -->
        </nav>
        <section id="section-0" data-uk-slideshow="{kenburns:true,autoplay:true}">
            <div class="uk-slidenav-position">
                <ul class="uk-slideshow uk-overlay-active uk-slideshow-fullscreen">
                    <li>
                        <img src="mac7.jpg" alt="">
                        <div class="uk-overlay-panel uk-overlay-background uk-overlay-fade uk-flex uk-flex-center uk-flex-middle uk-text-center">
                            <div>
                                <h3>Hi</h3>
                                <p>I am Steven,
                                    <br>Web UI/UX &amp; Front End Developer
                                    <br>based in San Jose, Costa Rica</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="mac8.jpg" alt="">
                        <div class="uk-overlay-panel uk-overlay-background uk-overlay-fade uk-flex uk-flex-center uk-flex-middle uk-text-center">
                            <div>
                                <h3>Technologies</h3>
                                <p>HTML5, CSS3, Javascript,
                                    <br>PHP, Wordpress, Joomla... <a href="#section-1" class="view-more" data-uk-smooth-scroll>view more</a></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="mac9.jpg" alt="">
                        <div class="uk-overlay-panel uk-overlay-background uk-overlay-fade uk-flex uk-flex-center uk-flex-middle uk-text-center">
                            <div>
                                <h3>Services</h3>
                                <p>Web Design, Web Development, Graphic Design,
                                    <br>UI Design, Search Engine Optimization (SEO)</p>
                            </div>
                        </div>
                    </li>
                    
                </ul>
                <a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-previous uk-hidden-small" data-uk-slideshow-item="previous"></a>
                <a href="#" class="uk-slidenav uk-slidenav-contrast uk-slidenav-next uk-hidden-small" data-uk-slideshow-item="next"></a>
                <div class="go-down uk-text-center uk-hidden-small" data-uk-parallax="{target:'#section-0', opacity:0, y:-200, scale:1}">
                    <a href="#section-1" data-uk-smooth-scroll class="uk-icon-button uk-icon-arrow-circle-down" data-uk-tooltip="{pos:'top'}" title="Go Down"></a>
                </div>
                <ul class="uk-dotnav uk-dotnav-contrast uk-position-bottom uk-flex-center uk-hidden-small">
                    <li data-uk-slideshow-item="0"><a href="#">Item 1</a></li>
                    <li data-uk-slideshow-item="1"><a href="#">Item 2</a></li>
                    <li data-uk-slideshow-item="2"><a href="#">Item 3</a></li>
                   
                </ul>
            </div>
        </section>
        <section id="section-1" class="uk-width-1-1 uk-block-large uk-padding-bottom-remove white-bg">
            <div class="uk-container uk-container-center">
                <h2 data-uk-scrollspy="{cls:'uk-animation-slide-right',delay:300}">About <span>Me</span></h2>
                <p class="uk-clearfix" data-uk-scrollspy="{cls:'uk-animation-slide-left',delay:300}">
                    <img class="uk-align-medium-right" src="images/me.png" width="300" height="200" alt="Steven Sanchez Marin">I am a web developer (UI/UX) and graphic designer based in Costa Rica with over 9 years of experience. Computers have been part of my life since I was a teenager time where I enrolled in the Information Technology world at high school, I continued the bachelor's degree path at college (software development). I've always been a guy who likes the self-learning, I like to improve my skills so I keep learning new stuff.
                    <br>
                    <br>Drawing is one of the big passions in my life so I've taken graphic design courses at college as well. At 2015 I started the Bachelor's Degree in Advertising Design.
                    <br>
                    <br> I have a passion for detailed design, creative and modern websites, I'm always keeping an eye on the latest trends and technologies over the web. I love to revamp websites and create useful and beautiful websites from scratch as well. My skills cover many aspects of graphic design, web design, web development and technical knowledge.</p>
                <div class="uk-grid">
                    <div class="uk-width-1-1 uk-width-medium-1-2">
                        <div class="uk-grid">
                            <div class="uk-width-1-1 uk-width-small-1-2 feature-1">
                                <i class="uk-icon-code uk-icon-large" data-uk-scrollspy="{cls:'uk-animation-slide-left',delay:300}"></i>
                                <h5 data-uk-scrollspy="{cls:'uk-animation-slide-right',delay:300}">MY EXPERTISE</h5>
                                <ul class="uk-list uk-list-striped" data-uk-scrollspy="{cls:'uk-animation-slide-left',delay:300}">
                                    <li>Web &amp; Mobile Web Applications</li>
                                    <li>User Interface Design</li>
                                    <li>Front End Development</li>
                                    <li>Responsive Website Design</li>
                                    <li>Graphic Design</li>
                                </ul>
                            </div>
                            <div class="uk-width-1-1 uk-width-small-1-2 feature-1">
                                <i class="uk-icon-crop uk-icon-large" data-uk-scrollspy="{cls:'uk-animation-slide-left',delay:300}"></i>
                                <h5 data-uk-scrollspy="{cls:'uk-animation-slide-right',delay:300}">GRAPHIC DESIGN</h5>
                                <ul class="uk-list uk-list-space" data-uk-scrollspy="{cls:'uk-animation-slide-left',delay:300}">
                                    <li>Photoshop</li>
                                    <li>Illustrator</li>
                                    <li>Sketch</li>
                                    <li>Avocode</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="uk-width-1-1 uk-width-medium-1-2">
                        <div class="uk-grid">
                            <div class="uk-width-1-1 uk-width-small-1-2 feature-1" data-uk-scrollspy="{cls:'uk-animation-slide-right',delay:300}">
                                <i class="uk-icon-tv uk-icon-large"></i>
                                <h5 data-uk-scrollspy="{cls:'uk-animation-slide-left',delay:300}">WEB DESIGN</h5>
                                <ul class="uk-list uk-list-striped" data-uk-scrollspy="{cls:'uk-animation-slide-right',delay:300}">
                                    <li>Html - Html5 - Css3</li>
                                    <li>Compass - Sass - Less</li>
                                    <li>Javascript</li>
                                    <li>CoffeeScript</li>
                                    <li>Php</li>
                                    <li>MySql</li>
                                    <li>Wordpress</li>
                                    <li>Joomla</li>
                                    <li>Drupal</li>
                                </ul>
                            </div>
                            <div class="uk-width-1-1 uk-width-small-1-2 feature-1">
                                <i class="uk-icon-large uk-icon-object-ungroup uk-icon-large" data-uk-scrollspy="{cls:'uk-animation-slide-right',delay:300}"></i>
                                <h5 data-uk-scrollspy="{cls:'uk-animation-slide-left',delay:300}">FRAMEWORKS</h5>
                                <ul class="uk-list uk-list-striped" data-uk-scrollspy="{cls:'uk-animation-slide-right',delay:300}">
                                    <li>jQuery</li>
                                    <li>AngularJS</li>
                                    <li>ReactJS</li>
                                    <li>KnockoutJS</li>
                                    <li>Laravel</li>
                                    <li>CodeIgniter</li>
                                    <li>Bootstrap</li>
                                    <li>Foundation</li>
                                    <li>UIKit</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="section-2" class="uk-width-1-1 uk-block gray-bg ss-style-zigzag" data-uk-parallax="{bg:-200}">
            <div class="uk-text-center">
                <div>
                    <h5 data-uk-scrollspy="{cls:'uk-animation-slide-left',delay:300}">LET'S WORK TOGETHER</h5>
                    <h6 data-uk-scrollspy="{cls:'uk-animation-slide-left',delay:300}">Interested in working with me? Get in touch and let’s grab a coffee <i class="uk-icon-coffee"></i>!</h6>
                    <ul class="social" data-uk-scrollspy="{cls:'uk-animation-slide-right',delay:300}">
                        <li>
                            <a href="files/StevenSanchezResume.pdf" class="uk-icon-button uk-icon-file-pdf-o" target="_blank" data-uk-tooltip="{pos:'bottom'}" title="Download Resume"></a>
                        </li>
                        <li>
                            <a href="tel:50671124852" class="uk-icon-button uk-icon-phone uk-icon-medium" target="_blank" data-uk-tooltip="{pos:'bottom'}" title="Call Me"></a>
                        </li>
                        <li>
                            <a href="mailto:stvn20@gmail.com" class="uk-icon-button uk-icon-button uk-icon-envelope" target="_blank" data-uk-tooltip="{pos:'bottom'}" title="Email Me"></a>
                        </li>
                    </ul>
                    <h5 data-uk-scrollspy="{cls:'uk-animation-slide-left',delay:300}">I'M AVAILABLE AT</h5>
                    <ul class="social" data-uk-scrollspy="{cls:'uk-animation-slide-right',delay:300}">
                        <li>
                            <a href="https://www.upwork.com/o/profiles/users/_~01e7eeac6ccf43b921/" target="_blank" class="uk-button uk-button-success" data-uk-tooltip="{pos:'bottom'}" title="Go to UpWork.com">UpWork.com</a>
                        </li>
                        <li>
                            <a href="https://www.freelancer.com/u/stvn20.html" target="_blank" class="uk-button uk-button-success" data-uk-tooltip="{pos:'bottom'}" title="Go to Freelancer.com">Freelancer.com</a>
                        </li>
                        <li>
                            <a href="https://www.peopleperhour.com/freelancer/steven/s-/senior-creative-engineer/452979" target="_blank" class="uk-button uk-button-success" data-uk-tooltip="{pos:'bottom'}" title="Go to PeoplePerHour.com">PeoplePerHour.com</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section id="section-3" class="uk-width-1-1 uk-block-large white-bg ss-style-zigzag ss-style-zigzag-end">
            <div class="uk-container uk-container-center">
                <div class=" uk-container uk-container-center space-top-bottom parallax modulebox">
                    <div class="uk-text-center" data-uk-scrollspy="{cls:'uk-animation-fade', delay:100}">
                        <h3>MY WORK PROCESS</h3>
                        <h6>My website designs are based on what I learn about your business</h6>
                    </div>
                    <!-- Time Line Short Code -->
                    <div class="timeline">
                        <div class="liner">
                            <div class="time-item left" data-uk-scrollspy="{cls:'uk-animation-fade', delay:300}">
                                <div class="center-line circle"> <i class="uk-icon-info"></i> </div>
                                <div class="content-line">
                                    <h2>Information Gathering</h2>
                                    <div class="content-text">The first step in designing a successful web site is to gather information. Many things need to be taken into consideration when the look and feel of your site is created.</div>
                                </div>
                            </div>
                            <div class="time-item right" data-uk-scrollspy="{cls:'uk-animation-fade', delay:600}">
                                <div class="center-line circle"> <i class="uk-icon-map"></i> </div>
                                <div class="content-line">
                                    <h2>Planning</h2>
                                    <div class="content-text">Using the information gathered from phase one, it is time to put together a plan for your web site. This is the point where a site map is developed.</div>
                                </div>
                            </div>
                            <div class="time-item left" data-uk-scrollspy="{cls:'uk-animation-fade', delay:300}">
                                <div class="center-line circle"> <i class="uk-icon-object-group"></i> </div>
                                <div class="content-line">
                                    <h2>Design</h2>
                                    <div class="content-text">Drawing from the information gathered up to this point, it’s time to determine the look and feel of your site.</div>
                                </div>
                            </div>
                            <div class="time-item right" data-uk-scrollspy="{cls:'uk-animation-fade', delay:600}">
                                <div class="center-line circle"> <i class="uk-icon-language"></i> </div>
                                <div class="content-line">
                                    <h2>Development</h2>
                                    <div class="content-text">The developmental stage is the point where the web site itself is created. At this time, I will take all of the individual graphic elements from the prototype and use them to create the actual functional site.</div>
                                </div>
                            </div>
                            <div class="time-item left" data-uk-scrollspy="{cls:'uk-animation-fade', delay:300}">
                                <div class="center-line circle"> <i class="uk-icon-sliders"></i> </div>
                                <div class="content-line">
                                    <h2>Testing and Delivery</h2>
                                    <div class="content-text">At this point, I will attend to the final details and test your web site. I will test things such as the complete functionality of forms or other scripts, as well last testing for last minute compatibility issues (viewing differences between different web browsers), ensuring that your web site is optimized to be viewed properly in the most recent browser versions.</div>
                                </div>
                            </div>
                            <div class="time-item right" data-uk-scrollspy="{cls:'uk-animation-fade', delay:600}">
                                <div class="center-line circle"> <i class="uk-icon-server"></i> </div>
                                <div class="content-line">
                                    <h2>Maintenance</h2>
                                    <div class="content-text">The development of your web site is not necessarily over, though. One way to bring repeat visitors to your site is to offer new content or products on a regular basis. I will be more than happy to continue working together with you, to update the information on your web site. I can offer maintenance packages at reduced rates, based on how often you anticipate making changes or additions to your web site.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End Time Line Short Code -->
                </div>
            </div>
        </section>
        <footer id="footer">
            <div id="section-3">
                <div class="uk-text-center">
                    <div class="social">
                        <div class="uk-container uk-container-center">
                            <div class="uk-grid">
                                <div class="uk-width-1-1 uk-margin-top uk-margin-bottom">
                                    <h5 data-uk-scrollspy="{cls:'uk-animation-slide-left',delay:300}">FIND ME ON</h5>
                                    <ul class="social" data-uk-scrollspy="{cls:'uk-animation-slide-right',delay:300}">
                                        <li>
                                            <a href="https://github.com/steven-github" class="uk-icon-button uk-icon-github" target="_blank" data-uk-tooltip="{pos:'top'}" title="Github"></a>
                                        </li>
                                        <li>
                                            <a href="https://cr.linkedin.com/in/stevensanchezmarin" class="uk-icon-button uk-icon-linkedin" target="_blank" data-uk-tooltip="{pos:'top'}" title="LinkedIn"></a>
                                        </li>
                                        <li>
                                            <a href="skype:stvn_webmaster?call" class="uk-icon-button uk-icon-skype" target="_blank" data-uk-tooltip="{pos:'top'}" title="Skype"></a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/Stvn20" class="uk-icon-button uk-icon-facebook" target="_blank" data-uk-tooltip="{pos:'top'}" title="Facebook"></a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/twitteven" class="uk-icon-button uk-icon-twitter" target="_blank" data-uk-tooltip="{pos:'top'}" title="Twitter"></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="copyright">
                        <div class="uk-container uk-container-center">
                            <div class="uk-grid">
                                <div class="uk-width-1-1 uk-margin-top uk-margin-bottom">
                                    <p data-uk-scrollspy="{cls:'uk-animation-slide-left',delay:300}">
                                        Copyright &copy; 2016 <a href="http://www.iniapp.com" target="_blank">iNiApp</a></p>
                                    <a href="#section-0" data-uk-smooth-scroll class="uk-icon-button uk-icon-arrow-circle-up" data-uk-tooltip="{pos:'top'}" title="Go Top" data-uk-scrollspy="{cls:'uk-animation-slide-right',delay:300}"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div id="offcanvas-1" class="uk-offcanvas">
            <div class="uk-offcanvas-bar">
                <a onclick="jQuery.UIkit.offcanvas.hide();" class="uk-close uk-close-alt close-canvas"></a>
                <div class="uk-panel">Lorem ipsum dolor sit amet, <a href="#" onclick="jQuery.UIkit.offcanvas.hide();">close</a> sadipscing elitr.</div>
            </div>
        </div>
    </div>
    <!-- Google Analytics -->
    <script>
    (function(i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function() {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-8476260-3', 'auto');
    ga('send', 'pageview');

    $(document).ready(function() {
        setTimeout(function() {
            $("html, body").animate({
                scrollTop: 0
            }, '500', 'swing', function() {
                //alert("Finished animating");
            });
        }, 1500);
    });
    </script>
</body>

</html>