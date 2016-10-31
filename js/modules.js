$(function($){
  if(app.rQ.length > 0){
    var len = app.rQ.length;
    while(len--){
      app.rQ[len]();
    }
  }
});


var BookForm = (function(){
  var DatePicker = function(element, options, cb) {

    //state
    this.startDate = Date.today();
    this.endDate = Date.today();
    this.ranges = {};
    this.opens = 'right';
    this.cb = function() { };
    this.format = 'dd.MM.yyyy';

    if(options.startDate){
      this.startDate = options.startDate
    }

    this.leftCalendar = {
      month: Date.today().set({day: 1, month: this.startDate.getMonth(), year: this.startDate.getFullYear()}),
      calendar: Array()
    };

    this.rightCalendar = {
      month: Date.today().set({day: 1, month: this.endDate.getMonth(), year: this.endDate.getFullYear()}),
      calendar: Array()
    }

    //element that triggered the date range picker
    this.element = $(element);

    if (this.element.hasClass('pull-right'))
      this.opens = 'left';

    if (this.element.is('input')) {
      this.element.on({
        click: $.proxy(this.show, this),
        focus: $.proxy(this.show, this),
        blur: $.proxy(this.hide, this)
      });
    } else {
      this.element.on('click', $.proxy(this.show, this));
    }

    //the date range picker
    this.container = $(DRPTemplate).appendTo('body');

    if (typeof options == 'object') {
      if (typeof options.ranges == 'object') {
        for (var range in options.ranges) {

          var start = options.ranges[range][0];
          var end = options.ranges[range][1];

          if (typeof start == 'string')
            start = Date.parse(start);
          if (typeof end == 'string')
            end = Date.parse(end);

          this.ranges[range] = [start, end];
        }

        var list = '<ul>';
        for (var range in this.ranges) {
          list += '<li>' + range + '</li>';
        }
        list += '</ul>';
        this.container.find('.ranges').prepend(list);

      }

      if (typeof options.format == 'string')
        this.format = options.format

      if (typeof options.opens == 'string')
        this.opens = options.opens;

    }

    if (this.opens == 'right') {
      //swap calendar positions
      var left = this.container.find('.calendar.left');
      var right = this.container.find('.calendar.right');
      left.removeClass('left').addClass('right');
      right.removeClass('right').addClass('left');
    }

   // if (typeof options == 'undefined' || typeof options.ranges == 'undefined')
      this.container.find('.calendar').show();

    if (typeof cb == 'function')
      this.cb = cb;

    this.container.addClass('opens' + this.opens);

    //event listeners
    this.container.on('mousedown', $.proxy(this.mousedown, this));
    this.container.find('.calendar').on('click', '.prev', $.proxy(this.clickPrev, this));
    this.container.find('.calendar').on('click', '.next', $.proxy(this.clickNext, this));
    this.container.find('.ranges').on('click', 'button', $.proxy(this.clickApply, this));

    this.container.find('.calendar').on('click', 'td', $.proxy(this.clickDate, this));
    this.container.find('.calendar').on('mouseleave', 'td', $.proxy(this.updateView, this));

    this.container.find('.ranges').on('click', 'li', $.proxy(this.clickRange, this));
    this.container.find('.ranges').on('mouseenter', 'li', $.proxy(this.enterRange, this));
    this.container.find('.ranges').on('mouseleave', 'li', $.proxy(this.updateView, this));

    this.updateView();
    this.updateCalendars();

  };

  DatePicker.prototype = {

    constructor: DatePicker,

    mousedown: function(e) {
      e.stopPropagation();
      e.preventDefault();
    },

    updateView: function() {
      this.leftCalendar.month.set({month: this.startDate.getMonth(), year: this.startDate.getFullYear()});
      this.rightCalendar.month.set({month: this.endDate.getMonth(), year: this.endDate.getFullYear()});

      this.container.find('input[name=daterangepicker_start]').val(this.startDate.toString(this.format));
      this.container.find('input[name=daterangepicker_end]').val(this.endDate.toString(this.format));

    },

    notify: function() {
      this.updateView();

      if (this.element.is('input')) {
        this.element.val(this.startDate.toString(this.format));
      }
      this.cb(this.startDate);
    },

    move: function() {
      if (this.opens == 'left') {
        this.container.css({
          top: this.element.offset().top + this.element.outerHeight(),
          right: $(window).width() - this.element.offset().left - this.element.outerWidth(),
          left: 'auto'
        });
      } else {
        this.container.css({
          top: this.element.offset().top + this.element.outerHeight(),
          left: this.element.offset().left,
          right: 'auto'
        });
      }
    },

    show: function(e) {
      if (e) {
        e.stopPropagation();
        e.preventDefault();
      }

      if(this.elementClicked){
        this.elementClicked = false;
        return; 
      }

      this.container.show();
      this.move();

      $(document).on('mousedown', $.proxy(this.hide, this));
    },

    hide: function(e) {
      if(e && (!!this.element.has(e.target).length || this.element.get(0) === e.target)){
        this.elementClicked = true;
      }

      this.container.hide();
      $(document).off('mousedown', this.hide);
    },

    enterRange: function(e) {
      var label = e.target.innerHTML;
      if (label == "Datum") {
        this.updateView();
      } else {
        var dates = this.ranges[label];
        this.container.find('input[name=daterangepicker_start]').val(dates[0].toString(this.format));
        this.container.find('input[name=daterangepicker_end]').val(dates[1].toString(this.format));
      }
    },

    clickRange: function(e) {
      var label = e.target.innerHTML;
      if (label == "Datum") {
        this.container.find('.calendar').show();
      } else {
        var dates = this.ranges[label];

        this.startDate = dates[0];
        this.endDate = dates[1];

        this.leftCalendar.month.set({month: this.startDate.getMonth(), year: this.startDate.getFullYear()});
        this.rightCalendar.month.set({month: this.endDate.getMonth(), year: this.endDate.getFullYear()});
        this.updateCalendars();

        this.notify();
        this.hide();
      }
    },

    set : function(date){
      this.startDate = date;
      this.notify();
    },

    clickPrev: function(e) {
      var cal = $(e.target).parents('.calendar');     
      this.leftCalendar.month.add({ months: -1 });
      this.updateCalendars();
    },

    clickNext: function(e) {
      var cal = $(e.target).parents('.calendar');
      this.leftCalendar.month.add({ months: 1 });
      this.updateCalendars();
    },

    clickDate: function(e) {
      var title = $(e.target).attr('title');
      var row = title.substr(1,1);
      var col = title.substr(3,1);
      var cal = $(e.target).parents('.calendar');
      
      startDate = this.leftCalendar.calendar[row][col];
     

      cal.find('td').removeClass('active');

      $(e.target).addClass('active');
      this.startDate = startDate;
      this.notify();
      this.hide();
    },

    clickApply: function(e) {
        this.notify();
        this.hide();
    },

    updateCalendars: function() {
      this.leftCalendar.calendar = this.buildCalendar(this.leftCalendar.month.getMonth(), this.leftCalendar.month.getFullYear());
      this.container.find('.calendar').html(this.renderCalendar(this.leftCalendar.calendar, this.startDate));
    },

    buildCalendar: function(month, year) {

      var firstDay = Date.today().set({ day: 1, month: month, year: year });
      var lastMonth = firstDay.clone().add(-1).day().getMonth();
      var lastYear = firstDay.clone().add(-1).day().getFullYear();

      var daysInMonth = Date.getDaysInMonth(year, month);
      var daysInLastMonth = Date.getDaysInMonth(lastYear, lastMonth);

      var dayOfWeek = firstDay.getDay();

      //initialize a 6 rows x 7 columns array for the calendar
      var calendar = Array();
      for (var i = 0; i < 6; i++) {
        calendar[i] = Array();
      }

      //populate the calendar with date objects
      var startDay = daysInLastMonth - dayOfWeek + 1;
      if (dayOfWeek == 0)
        startDay = daysInLastMonth - 6;

      var curDate = Date.today().set({ day: startDay, month: lastMonth, year: lastYear });

      for (var i = 0, col = 0, row = 0; i < 42; i++, col++, curDate = curDate.clone().add(1).day()) {
        if (i > 0 && col % 7 == 0) {
          col = 0;
          row++;
        }
        calendar[row][col] = curDate;
      }

      return calendar;

    },

    renderCalendar: function(calendar, selected) {

      var html = '<table class="table-condensed">';
      html += '<thead>';
      html += '<tr>';
      html += '<th class="prev"><i class="icon-arrow-left"></i></th>';
      html += '<th colspan="5">' + calendar[1][1].toString("MMMM yyyy") + '</th>';
      html += '<th class="next"><i class="icon-arrow-right"></i></th>';
      html += '</tr>';
      html += '<tr><th>So</th><th>Mo</th><th>Di</th><th>Mi</th><th>Do</th><th>Fr</th><th>Sa</th></tr>';
      html += '</thead>';
      html += '<tbody>';

      for (var row = 0; row < 6; row++) {
        html += '<tr>';
        for (var col = 0; col < 7; col++) {
          var cname = (calendar[row][col].getMonth() == calendar[1][1].getMonth()) ? '' : 'off';
        

          if (calendar[row][col].equals(selected))
            cname = 'active';

          var title = 'r' + row + 'c' + col;
          html += '<td class="' + cname + '" title="' + title + '">' + calendar[row][col].getDate() + '</td>';
        }
        html += '</tr>';
      }

      html += '</tbody>';
      html += '</table>';

      return html;

    }

  };

  var DRPTemplate =   '<div class="daterangepicker dropdown-menu">' +
                    '<div class="ranges">' +
                      '<div class="range_inputs"></div>' +
                    '</div>' +
            '<div class="calendar"></div>' +
          '</div>';



var BookForm = function( container ){
    this.rangesArrival = JSON.parse('{"Heute, ' + Date.today().toString("dd.MM.yyyy") +'":["today", "today"],"Morgen, ' + Date.today().add(1).days().toString("dd.MM.yyyy") +'": ["tomorrow", "tomorrow"]}');

    this.rangesDeparture = JSON.parse('{"Morgen, ' + Date.today().add(1).days().toString("dd.MM.yyyy") +'": ["tomorrow", "tomorrow"]}');
    this.$container = $(container);
    this.init();
 };

 BookForm.prototype = {
  constructor : BookForm,

  init : function(){
    this.$container.find('.bookBtn').on('click', $.proxy(this.onBooking, this));
    this.$container.find('iframe').on('load', $.proxy(this.onIframeLoaded, this));
    this.$container.find('.modal-header .close').on('click', $.proxy(this.modalHide, this));
    $(document).on('keydown', $.proxy(this.modalHide, this));

    this.arrivalPicker = new DatePicker ( 
      this.$container.find(".arrival"),{
        ranges : this.rangesArrival
      },
    $.proxy(this.onSelectArrival, this)
    );
    this.departurePicker = new DatePicker ( 
      this.$container.find(".departure"),{
        ranges : this.rangesDeparture
      },
    $.proxy(this.onSelectDeparture, this)
    );

    this.$container.find(".arrival").on("blur", $.proxy(this.onSelectArrival, this));
    this.$container.find(".departure").on("blur", $.proxy(this.onSelectDeparture, this));

  },

  onSelectArrival : function(date){
    if(date.target){
      date = Date.parse(this.$container.find(".arrival").val());
    }
    var diff =  Date.compare(Date.today(), date),
        prefix = "";

    if(diff === 1){
      return false;
    }    
    if( diff === 0){
      prefix = "Heute, ";
    } else if( Date.equals(Date.today().add(1).days(), date) ){
      prefix = "Morgen, ";
    } 
    this.arrivalDate = date.toString("dd.MM.yyyy")
    this.departurePicker.set(date.add(1).days());
  },

  onSelectDeparture : function(date){
     if(date.target){
      date = Date.parse(this.$container.find(".departure").val());
    }
    var prefix = "";
           
    if( Date.equals(Date.today().add(1).days(), date) ){
      prefix = "Morgen, ";
    }
    this.departureDate = date.toString("dd.MM.yyyy");
    this.preFetch();
  },

  getValues : function(){
    this.arrivalDate = this.arrivalDate || this.$container.find(".arrival").val();
    this.departureDate = this.departureDate || this.$container.find(".departure").val();
  },

  preFetch : function(){
    this.getValues();

    this.preFetched = {
      arrival : this.arrivalDate,
      departure : this.departureDate,
      isLoaded : false 
    };

    this.onBooking(null, true);
  },

  onBooking : function(e, prefetching){
    this.getValues();

    var link = 'https://ibe.dirs21.de/(S(bppfdbnlafnuou4weet2djub))/Channels/filderhotelde/default.aspx?ez=1&sprache='+ app.language 
    +'&anreise=' + this.arrivalDate + '&abreise=' + this.departureDate,
        $loader = $('<i class="loader hide"></i>');

    if(!prefetching && this.preFetched && this.preFetched.arrival === this.arrivalDate && this.preFetched.departure === this.departureDate){
      if(this.preFetched.isLoaded){
        return this.onIframeLoaded();
      } else {
        this.preFetched.trigger = true;
        this.$container.find(".bookBtn").html("Angebot finden…").prepend($loader);
        $loader.fadeIn();
        return;
      }
    }

    this.$container.find("iframe").attr('src', link);

    if(!prefetching){
      this.$container.find(".bookBtn").html("Angebot finden…").prepend($loader);
      $loader.fadeIn();
    } 
  },

  onIframeLoaded : function(){
    if(this.preFetched && !this.preFetched.isLoaded){
      this.preFetched.isLoaded = true;

      if(!this.preFetched.trigger){
        return;
      }
      this.preFetched.trigger = false;
    }

    this.$container.find(".backdrop").removeClass('hide');
    $(document.body).addClass('overlay');
  },

  modalHide : function(){
    this.$container.find(".backdrop").addClass('hide');
    this.$container.find('.bookBtn').html("Angebote suchen")
    $(document.body).removeClass('overlay');
  }
};

return BookForm;         
}());


/*app.ready(function(){
  var hasFixClass = true,
      $win = $(window),
      $header = $('header'),
      check = function (){
        var top = $win.scrollTop();
        
        if(top < 32 ){
          $header.css("background", "rgba(255,255,255," + top/32 + ")");
          if(hasFixClass){
            hasFixClass = false;
            $header.removeClass("fix");
          }
        } else if(!hasFixClass && $win.scrollTop() > 32 ){
          hasFixClass = true;
          $header.addClass("fix");
          $header.css("background", "rgba(255,255,255,1)");

        }
      };
  

  $(window).on("scroll", check);
  check();
});*/

