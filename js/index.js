app.ready(function(){
	app.router = {
		push : function(){

		}
	};


	var sections = {
		$el : $('#intro'),
		$nav : $('nav'),
		initialize : function(){
			$(window).on('resize', $.proxy(this.size, this));
			$('[data-link]').on('click', this.link);
			this.size();
		},
		link : function(event){
			var tgt = $(this).data('link');
			
			event.preventDefault();
			$.smoothScroll({scrollTarget: '#' + tgt});

			sections.$nav.find('.active').removeClass('active');
			sections.$nav.find('[data-link="' + tgt + '"]').addClass('active');
		},
		
		size : function(){
			var h = $(window).height();
			this.$el.each(function(){
				$(this).css("height", h).find('.section-wrap').css('height', h)
			});
		}
	};

	var introSection = {
		$nav : $('section#intro .arrows'),
		$imgs : $('section#intro .slide-show img'),
		i : 0,
		initialize : function(){
			this.len = this.$imgs.length;
			this.$nav.on('click', 'div', $.proxy(this.navigate, this));
			this.$imgs.addClass('animated').eq(this.i).addClass('active fadeInRight');
		},
		navigate : function(event){
			var dir = $(event.target).data('dir'),
				$old = this.$imgs.eq(this.i);

			if(dir === 'right'){
				if(this.i + 1 === this.len){
					this.i = 0;
				} else {
					this.i++;
				}
			} else {
				if(this.i -1 === -1){
					this.i = this.len - 1;
				} else {
					this.i--;
				}
			}

			this.$imgs.eq(this.i).addClass('active fadeIn' + (dir === 'right' ? 'Right' : 'Left'));
			$old.removeClass('active fadeInRight fadeInLeft');
		}
	}

	introSection.initialize();
	sections.initialize();



	$('.image-fold').on('click', function(){
		$t = $(this);
		if($t.hasClass('unfold')){
			$t.removeClass("unfold");
			$t.parent().next().animate({
				paddingTop : 0
			});
			$('html, body').animate({scrollTop: $t.offset().top - 100}, 2000);
		} else {
			$t.addClass('unfold');
			$t.parent().next().animate({
				paddingTop : 800
			});
			$('html, body').animate({scrollTop: $t.offset().top - 100}, 2000);
		}
	});



});