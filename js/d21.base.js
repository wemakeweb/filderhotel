var positionX, positionY;
var numberOfMonths = 2;
var config = null;
var today = null;
var arrival = null;
var departure = null;
var arrivalChanged = false;
var searchedMonths = new Array();
var unavailableDates = new Array();

var App = {
    log: function (data) {
        try {
            if (window.location.search.indexOf('log') != -1) {
                //window.console.log(data);
            }
        } catch (e) {

        }
    },
    start: function () {
        $(document).ready(function () {


            d21_adjustHeader();

            //
            BrowserDetect.init();

            $(document).mousemove(function (e) {
                positionX = e.pageX;
                positionY = e.pageY;
            });

            $('h2.toggle').each(function () {
                var alerts = $(this).next('div').find('span[class*="alert"]');

                if (alerts.length > 0) {
                    d21_toggle($(this).find('.toggleButton'), this);
                }
            });

            $('.datepicker').each(function () {
                $(this).datepicker({
                    changeMonth: true,
                    changeYear: true,
                    numberOfMonths: 1,
                    dateFormat: d21_dateFormatPicker,
                    maxDate: ($(this).attr('data-maxDate') != null ? $(this).attr('data-maxDate') : '+10y'),
                    yearRange: "-100:+0",
                    onSelect: function (selectedDate) {
                        d21_setHiddenDate($(this));
                    }
                });
            });

            $('.datepicker').focus(function () {
                //window.console.log('datepicker');
                this.select();
            });

            $('.datepicker').change(function () {
                var inputVal = $(this).val();
                var input = $(this);

                if (input.val() == '') {
                    d21_setHiddenDate(input);
                    return;
                }

                $.ajax({
                    url: '/api/util/parseDate',
                    dataType: 'json',
                    data: {
                        inputVal: inputVal,
                        dateFormat: d21_dateFormat,
                        minDate: d21_formatDate(input.datepicker('option', 'minDate'), d21_dateFormatPicker),
                        maxDate: d21_formatDate(input.datepicker('option', 'maxDate'), d21_dateFormatPicker)
                    },
                    success: function (data) {
                        input.val(data);
                        input.datepicker('setDate', data);

                        d21_setHiddenDate(input);
                    },
                    error: function (a, b, c) {
                    }
                });
            });

            // toggle
            $('.toggleHeader').click(function () {
                d21_toggle($(this).find('.toggleButton'), this);
            });

            $('.toggleButton').click(function () {
                d21_toggle(this, $(this).closest('.toggleHeader'));
            });

            $('.toggleButtonExpanded').each(function () {
                d21_toggle(this, $(this).closest('.toggleHeader'), true);
            });

            $('.emptyMessage').focus(function () {

                var emptyMessage = $(this).attr('emptyMessage');
                if (!emptyMessage) return;

                $(this).removeClass('em');
                if ($(this).val() == emptyMessage) {
                    $(this).val('');
                }
            });

            $('.emptyMessage').blur(function () {
                var emptyMessage = $(this).attr('emptyMessage');
                if (!emptyMessage) return;

                if ($(this).val().length == 0) {
                    $(this).addClass('em');
                    $(this).val(emptyMessage);
                }
            });

            $('.hotelPicture').each(function () {
                $(this).fancybox(d21_lightBoxImageSettings);
            });

            function d21_lightbox_open(rel) {
                if (rel != null && rel.length > 0) {
                    var elements = $('a[rel="' + rel + '"]');
                    d21_lightBoxImageSettings.beforeLoad = function () {
                        var title = $(this.element).attr('title');
                        var description = $(this.element).attr('data-description');
                        if (title != null && title != '') {
                            this.title = '<b>' + title + '</b>';

                            if (description != null && description != '') {
                                this.title += '<br /><br />';
                            }
                        }
                        if (description != null && description != '') {
                            this.title += $(this.element).attr('data-description');
                        }
                    };
                    $.fancybox.open(elements, d21_lightBoxImageSettings);
                    d21_lightBoxImageSettings.beforeLoad = null;
                }
            }

            $('.showImages').click(function () {
                var rel = $(this).attr('data-rel');
                d21_lightbox_open(rel);
                return false;
            });

            $('.standardPicture').click(function () {
                var rel = $(this).attr('rel');
                d21_lightbox_open(rel);
                return false;
            });

            var toolBarHideBg = false;
            $('body').click(function () {
                //alert('alaaaaaarm!!! body main click');
                if (toolBarHideBg) {
                    var bg = $('#toolBarDarken');
                    if (bg) $(bg).hide();

                    $.each($('.toolBar .sub'), function () { $(this).hide(); });
                    toolBarHideBg = false;
                    $('.toolBar .main').data('clicked', false);

                    $.each($('.toolBar .subRate'), function () { $(this).hide(); });
                    toolBarHideBg = false;
                    $('.toolBar .mainRate').data('clicked', false);

                    $.each($('.toolBar .subPartner'), function () { $(this).hide(); });
                    toolBarHideBg = false;
                    $('.toolBar .mainPartner').data('clicked', false);
                }
            });

            $('.toolBar .main').click(function () {
                //alert('alaaaaaarm!!! toolbar main click');
                $.each($('.toolBar .sub'), function () { $(this).hide(); });
                $('#toolBarDarken').show();
                $(this).closest('.toolBar').find('.sub').show('fast',
                    function () { toolBarHideBg = true; });
                $(this).data('clicked', true);
            });

            $('.toolBar .mainRate').click(function () {
                //alert('alaaaaaarm!!! toolbar mainRate click');
                $.each($('.toolBar .subRate'), function () { $(this).hide(); });
                $('#toolBarDarken').show();
                $(this).closest('.toolBar').find('.subRate').show('fast',
                    function () { toolBarHideBg = true; });
                $(this).data('clicked', true);
            });

            $('.toolBar .mainPartner').click(function () {
                //alert('alaaaaaarm!!! toolbar mainPartner click');
                $.each($('.toolBar .subPartner'), function () { $(this).hide(); });
                $('#toolBarDarken').show();
                $(this).closest('.toolBar').find('.subPartner').show('fast',
                    function () { toolBarHideBg = true; });
                $(this).data('clicked', true);
            });

            $('.barItemLink').click(function () {
                //alert('alaaaaaarm!!! bar item click');
                $(this).find('input[type="submit"]').postback();
            });

            $('.toolBar .sub').mouseleave(function () {
                //alert('alaaaaaarm!!!');
                // $('#toolBarDarken').hide();
                // $(this).hide();
                // toolBarHideBg = false;
            });

            $('.toolBar .rateCodeError').find('.sub').show('fast', function () {
                $('#toolBarDarken').show();
                toolBarHideBg = true;
            });

            $('.toolBar ul').click(function () {
                //alert('alaaaaaarm!!! toolbar ul click');
                toolBarHideBg = false;
            });

            $('.toolBar ul').mouseleave(function () {
                //alert('alaaaaaarm!!!');
                toolBarHideBg = true;
            });

            $('.toolBar ul ul li').click(function () {
                //alert('alaaaaaarm!!! toolbar ul ul li click');
                if ($(this).hasClass('subHeader')) return;
                $(this).closest('ul').find('input[type="hidden"]').val($(this).attr('data-value'));
                $(this).closest('ul').find('input[type="submit"]').postback();
            });

            $('.layout-grid .imageContainer.tooltip').removeClass('tooltip');

            $('.tooltip').each(function () {

                var tooltipClass = $(this).attr('data-tooltipClass');
                $(this).tooltip({
                    tooltipClass: tooltipClass
                });
            });

            $('.tooltipmax').each(function () {

                var tooltipClass = $(this).attr('data-tooltipClass');
                $(this).tooltip({
                    tooltipClass: tooltipClass
                });
            });

            $('td.toggle').click(function () {
                $(this).closest('.addresstable').find('.toggleItem').each(function (index) { $(this).toggle('fast', function () { }); });
            });

            $('div.toggle').click(function () {
                var toggleParent = $(this).closest('.toggleParent');
                if ($(toggleParent).hasClass('toggleParent')) {
                    toggleParent.find('.toggleItem').toggle();
                }
                else $(this).closest('tr').next().toggle();

                $.fancybox.update();
            });

            // extensions
            $.fn.extend({
                postback: function () {
                    return this.each(function () {
                        if ('undefined' != typeof this.click) this.click();
                        else if (this.tagName.toLowerCase() == 'a' && this.href.indexOf('javascript:') == 0) eval(this.href.url().replace('javascript:', ''));
                    });
                },
            });

            $.fn.hasOverflow = function () {
                var $this = $(this);
                var $children = $this.find('*');
                var len = $children.length;

                if (len) {
                    var maxWidth = 0,
                        maxHeight = 0;

                    $children.map(function () {
                        maxWidth = Math.max(maxWidth, $(this).outerWidth(true));
                        maxHeight = Math.max(maxHeight, $(this).outerHeight(true));
                    });

                    return maxWidth > $this.width() || maxHeight > $this.height();
                }

                return false;
            };

            $.fn.hasAttr = function (name) {
                return this.attr(name) !== undefined;
            };

            $('.dialogTrigger').click(function () {
                if (typeof Page_IsValid != "undefined") {
                    if (!Page_IsValid) return false;
                }
                var trigger = $(this);
                var confirmMessage = trigger.attr('confirmMessage');
                var confirmTitle = trigger.attr('confirmTitle');
                var confirmOkText = trigger.attr('confirmOkText');
                var confirmCancelText = trigger.attr('confirmCancelText');

                $('#dialog-confirm-content').html(confirmMessage);
                $('#dialog-confirm').dialog({
                    resizable: false,
                    modal: true,
                    draggable: false,
                    title: confirmTitle,
                    minWidth: 300,
                    minHeight: 100,
                    buttons: [
                        {
                            text: confirmOkText,
                            click: function () {
                                $(this).dialog("close");
                                trigger.parent().find('.dialogConfirm').get(0).click();
                            }
                        },
                        {
                            text: confirmCancelText,
                            click: function () {
                                $(this).dialog("close");
                            }
                        }
                    ]
                });

                return false;
            });

            $('.disableOnClick').click(function () {
                if ($(this).prop('disabled') == 'disabled') return false;
                $(this).attr('enable-message', $(this).prop('value'));
                $(this).prop('value', $(this).attr('disable-message'));
            });

            $('.saveBookingButton').click(function () {
                if (typeof Page_IsValid != "undefined") {
                    if (!Page_IsValid) {
                        return false;
                    }
                    else {
                        if ($(this).prop('disabled') == 'disabled') return false;
                        $(this).prop('disabled', true);
                        $(this).attr('enable-message', $(this).prop('value'));
                        $(this).prop('value', $(this).attr('disable-message'));
                    }
                }
            });

            // search via bing maps
            $('.geoSearchBox').autocomplete({
                source: function (request, response) {
                    $.ajax({
                        url: 'http://dev.virtualearth.net/REST/v1/Locations',
                        dataType: 'jsonp',
                        data: { key: 'AmAEdc3hyeA8rMa7lwyllFEZGeDZ4PiHp4rBQ4UmrAvQ90OYih72NJoQFhdNnZBx', q: request.term },
                        jsonp: 'jsonp',
                        success: function (data) {
                            var result = data.resourceSets[0];
                            if (result && result.estimatedTotal > 0) {
                                displayLocations(result.resources);
                            }
                        }
                    });
                },
                minLength: 1
            });
            $('.geoSearchBox').focus(function () {
                $(this).val('');
                $('.geoCoordinates').val('');
            });

            $('.d21_reservationDetail').click(function () {
                $.fancybox($('#dialog-reservation-detail'), {
                    autoSize: false,
                    maxWidth: $('.d21_width').width() * 0.85,
                    height: $('#dialog-reservation-detail').height() * 1.25
                });
            });

            $('.wish input').click(function () {
                var isChecked = $(this).attr('checked') ? true : false;
                if (isChecked) $(this).closest('div').addClass('selectedWish');
                else $(this).closest('div').removeClass('selectedWish');
            });

            $('.affiliate .inputDefault').click(function () {
                var wasSelected = $(this).find('input:radio').attr('checked') ? true : false;
                if (!wasSelected) {
                    $(this).find('input:radio').attr('checked', true);
                    $(this).find('input:submit').postback();
                }
            });

            $('.bahnClass input').click(function () {
                var isChecked = $(this).attr('checked') ? true : false;
                if (isChecked) $('.bahnClass').each(function () { $(this).removeClass('inputSelected'); $(this).addClass('inputDefault'); });
                if (isChecked) $(this).closest('div').addClass('inputSelected');
            });

            $('.bookPackageClient').click(function () {
                $(this).hide();
                $(window).scrollTop($(document).height() + 500);
                $('.bookPackageSearch').fadeIn(1000);
            });

            $('.roomText').each(function () {
                var link = $(this).find('.roomTextShow');
                var txt = $(this).find('.roomTextValue');
                var height = txt.height();
                if (height <= 52) link.hide();
            });

            $('.toggleOccupancy').click(function () {
                $(this).fadeOut(100, function () {
                    $(this).closest('.persons').find('.person').not('.toggleOccupancy').fadeIn();
                });
            });

            d21_initCreditCardMask();

            /* ====================== SUCHE ================== */
            window.setTimeout(function () { initSearch(); }, 50);

            /* ====================== PERIODISCH ================== */

            // setting height of rate table, hence, setting height of room-grid-item
            window.setInterval(function () {
                var max = 0;
                $('.layout-grid .rate-list').each(function (index) {
                    max = Math.max(max, $(this).find('li').not('.rate-invisible').length);
                }); 
                
                $('.layout-grid .rate-list').each(function (index) {
                    $(this).css('height', max * 27 + 'px');
                });

            }, 100);
        });

        function initSearch() {
            $(".arrivalDate").datepicker({
                showButtonPanel: false,
                changeMonth: false,
                changeYear: false,
                numberOfMonths: numberOfMonths,
                dateFormat: d21_dateFormatPicker,
                minDate: 0,
                beforeShow: function (input, sender) {
                    loadSearchConfig();

                    if (config != null) {
                        today = new Date();
                        today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
                        arrival = $(".arrivalDate").datepicker('getDate');
                        departure = config.IsAvailabilityCalendar ? new Date(arrival.getFullYear(), arrival.getMonth(), arrival.getDate() + parseInt($('.countNights').val())) : $(".departureDate").datepicker('getDate');

                        if (config.IsAvailabilityCalendar) updateCalendar($(this).datepicker('getDate'), true);
                    }
                },
                beforeShowDay: onBeforeShowDay,
                onChangeMonthYear: changeMonth,
                onSelect: function (selectedDate) {
                    loadSearchConfig();

                    if (config != null && !config.IsAvailabilityCalendar) {
                        var date = $(this).datepicker('getDate');
                        date.setDate(date.getDate() + 1);
                        $(".departureDate").datepicker("option", "minDate", date);
                        $(".departureDate").datepicker("setDate", date);
                    }
                    setHiddenDates();
                },
                onClose: function (date, sender) {
                    //window.console.log(arrivalChanged.toString());
                    if (arrivalChanged) {
                        $('.departureDate').focus();
                    }
                    arrivalChanged = false;
                }
            });

            $(".departureDate").datepicker({
                showButtonPanel: false,
                changeMonth: false,
                changeYear: false,
                dateFormat: d21_dateFormatPicker,
                numberOfMonths: numberOfMonths,
                minDate: '+1D',
                beforeShow: function (input, sender) {
                    loadSearchConfig();

                    if (config != null) {
                        today = new Date();
                        today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
                        arrival = $(".arrivalDate").datepicker('getDate');
                        departure = config.IsAvailabilityCalendar ? new Date(arrival.getFullYear(), arrival.getMonth(), arrival.getDate() + parseInt($('.countNights').val())) : $(".departureDate").datepicker('getDate');

                        if (config.IsAvailabilityCalendar) updateCalendar($(this).datepicker('getDate'), true);
                    }
                },
                beforeShowDay: function (date) {
                    today = new Date();
                    today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
                    arrival = $(".arrivalDate").datepicker('getDate');
                    departure = $(".departureDate").datepicker('getDate');

                    return setDateStyles(date, $(".departureDate").datepicker("option", "minDate"), $(".arrivalDate").datepicker('getDate'), $(".departureDate").datepicker('getDate'));
                },
                onSelect: function (selectedDate) { setHiddenDates(); },
            });

            $('.arrivalDate, .departureDate').focus(function () {
                //window.console.log(this.name.toString());
                this.select();
            });

            $('.arrivalDate, .departureDate').change(function () {
                var inputVal = $(this).val();
                var input = $(this);

                $.ajax({
                    url: '/api/util/parseDate',
                    dataType: 'json',
                    data: {
                        inputVal: inputVal,
                        dateFormat: d21_dateFormat,
                        minDate: d21_formatDate(input.datepicker('option', 'minDate'), d21_dateFormatPicker)
                    },
                    success: function (data) {
                        input.val(data);
                        input.datepicker('setDate', data);

                        if (input.hasClass('arrivalDate')) {
                            var departure = input.datepicker('getDate');
                            departure.setDate(departure.getDate() + 1);
                            $(".departureDate").datepicker("option", "minDate", departure);
                            $(".departureDate").datepicker("setDate", departure);
                        }

                        setHiddenDates();
                    },
                    error: function (a, b, c) {
                        // alert(a + ', ' + b + ', ' + c);
                    }
                });

                $('.countNights').change(function () {
                    // reset for new search
                    searchedMonths = new Array();
                    unavailableDates = new Array();
                });
            });
        }
    }
};

window.setTimeout(function () {
    App.start();
}, 1000);

function loadSearchConfig() {
    if (config == null) {
        var clientConfig = $('#hSearchClientConfig');

        if (clientConfig != null && clientConfig.length > 0) {
            config = JSON.parse(clientConfig.val());
        }
    }
}

$(window).load(function () {
    // reorder
    $('.roomResult .selectionItem[data-sort]').sortElements(function (a, b) {
        var indexA = parseInt($(a).attr('data-sort'));
        var indexB = parseInt($(b).attr('data-sort'));
        return indexA < indexB ? -1 : 1;
    });
});

/* new funky alert */
window.alert = function (msg) {
    var html = msg.toString();

    for (var i = 0; i < 1000; i++) {
        html = html.replace('\r\n', '<br />');
    }

    $.fancybox(html, {
        autoSize: true,
        maxWidth: 600
    });
};

var isInIFrame = window.location != window.parent.location ? true : false;

var d21_lightBoxImageSettings = {
    prevEffect: 'elastic',
    nextEffect: 'elastic',
    topRatio: 0.0,
    loop: false,
    arrows: true,
    fitToView: isInIFrame ? true : false,
    padding: 5,
    autoResize: true,
    maxWidth: isInIFrame ? window.innerWidth * 0.92 : window.innerWidth * 1,
    minWidth: isInIFrame ? window.innerWidth * 0.92 : window.innerWidth * 0.33,
    margin: [20, 10, 5, 10],
    helpers: {
        title: {
            type: 'inside'
        }
    }
};

/* d21 toolbar - start */
function d21_showToolBarMessages() {
    $(document).ready(function () {
        $('.barItemContentOnLoad').css('display', 'inline');
    });
}
/* d21 toolbar - end */

/* d21 rooms - start */
function d21_toggle(button, header, noSlide) {
    var expanded = $(button).hasClass('rotate180');
    var content = $(header).next();
    var submit = $(header).find('.toggleSubmit');

    // confirm(submit);
    if (submit.length) {
        submit.postback();
    }
    else if (expanded) {
        if (noSlide) {
            content.hide();
            $(button).removeClass('rotate180');
        }
        else {
            content.slideUp(function () {
                $(button).removeClass('rotate180');
            });
        }
    }
    else {
        if (noSlide) {
            content.show();
            $(button).addClass('rotate180');
        }
        else {
            content.slideDown(function () {
                $(button).addClass('rotate180');
            });
        }
    }
}

function d21_toggle_detail(button, header, selectorDetail) {
    var expanded = $(button).hasClass('rotate180');
    var content = $(header).next();

    if (expanded) {
        $(content).find(selectorDetail).slideUp(function () {
            $(button).removeClass('rotate180');
        });
    }
    else {
        $(content).find(selectorDetail).slideDown(function () {
            $(button).addClass('rotate180');
        });
    }
}

function d21_selectRoom(buttonId) {
    var button = $('#' + buttonId);
    var content = button.closest('.selectionItem');

    // content.find('.roomPrice').hide();
    content.find('.roomSelection').css({ 'opacity': '0' });
    content.find('.roomSelection').animate({ 'opacity': '1' });
}

function d21_selectRate(sender) {
    $(sender).closest('table').find('.rate').each(function (i) { $(this).find('input').removeAttr('checked'); });
    $(sender).find('input').prop('checked', 'checked');
    $(sender).closest('form').submit();
}
/* d21 rooms - ende */

/* d21 availabilityCalendar - start */
var d21_moving = false;
function d21_availabilityCalendar_showDate(sender, persistent) {
    /* td markieren */
    if (d21_moving) {
        d21_moving = false;
        return;
    }
    var active = $(sender).closest('.calendar').find('.calendarCellSelected');
    if (active != null) $(active).removeClass('calendarCellSelected').attr('data-persistent', false);
    $(sender).attr('data-persistent', persistent);
    $(sender).removeClass('calendarCellSelected').addClass('calendarCellSelected');
}

function d21_availabilityCalendar_prevDate(sender) {
    var prev = $(sender).parent().parent().prev();
    d21_availabilityCalendar_showDate(prev);

    d21_moving = true;
}

function d21_availabilityCalendar_nextDate(sender) {
    var next = $(sender).parent().parent().next();
    d21_availabilityCalendar_showDate(next);

    d21_moving = true;
}

function d21_availabilityCalendar_hideDate(sender) {
    /* td markieren */
    if ($(sender).attr('data-persistent') == 'false') {
        $(sender).removeClass("calendarCellSelected");
    }
}

function d21_availabilityCalendar_closeRates(sender) {
    $(sender).closest('.d21_infoToolTip').hide();
}
/* d21 availabilityCalendar - end */

/* d21 address */
function d21_checkCreditCard(input) {
    var number = input.val().replace(/-/g, '');
    var errorLabel = $('span[FieldKey="cvAddressFormCardNumber"]');

    var cardNumber = new Number(number);

    if (number.length == 0) {
        errorLabel.fadeOut();
        input.removeClass('invalid');
        input.removeClass('valid');
    }
    else if (!isNaN(cardNumber)) {
        var cardType = $(input).closest('.creditCardForm').find('.ddCreditCard').val();

        $.ajax({
            url: '/api/util/isValidCreditCard?cardType=' + parseInt(cardType) + '&cardNumber=' + number,
            success: function (data) {
                var oldClass = '';
                var newClass = '';

                if (!data && !input.hasClass('invalid')) {
                    errorLabel.hide().fadeIn();
                    newClass = 'invalid';
                    oldClass = 'valid';
                }
                else if (data && !input.hasClass('valid')) {
                    errorLabel.fadeOut();
                    newClass = 'valid';
                    oldClass = 'invalid';
                }

                input.removeClass(oldClass).addClass(newClass);
            },
            error: function (r, q, s) {
                alert(r + q + s);
            }
        });
    }
    else {
        errorLabel.hide().fadeIn();
        input.addClass('invalid');
        input.removeClass('valid');
    }
}

function d21_initCreditCardMask() {
    var input = $('.inputCCNumber');

    if (input != null && input.length > 0) {
        var ddCreditCard = $('.ddCreditCard'),
            mask;

        switch (ddCreditCard.val()) {
            case '3':
                // amex
                mask = '9999-999999-99999';
                break;
            case '4':
                // diners club
                mask = '9999-999999-9999';
                break;
            default:
                mask = '9999-9999-9999-9999';
                break;
        }

        $(input).mask(mask);
    }
}
/* d21 address - end */

/* d21 summary */
function d21_toggleSummary(sender) {
    var command = $(sender).attr('class');
    var container = $(sender).closest('.summary');
    var ctrlShow = container.find('.showDetails');
    var ctrlHide = container.find('.hideDetails');
    var rows = container.find('tr.extendedInfo');

    if (command == 'showDetails') {
        container.find('tr.summaryInfo').hide();
        rows.css('opacity', '0.0').show(1, function () { $(this).animate({ 'opacity': '1.0' }, function () { ctrlShow.hide(); ctrlHide.show(); }); });
    }
    else {
        rows.animate({ 'opacity': '0.0' }, function () { $(this).hide(1, function () { ctrlHide.hide(); ctrlShow.show(); }); container.find('tr.summaryInfo').show(); });
    }
}

function d21_toggle_simple(sender, clientID, anchor) {
    var expanded = $(sender).find('.toggleImg').hasClass('rotate180');
    if (expanded) { $(sender).find('.toggleImg').removeClass('rotate180'); $('#' + clientID).hide(); }
    else { $(sender).find('.toggleImg').addClass('rotate180'); $('#' + clientID).show(); }

    if (anchor && anchor.length) window.location.hash = anchor;
    $.fancybox.update();
}
/* d21 summary - end */

String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "");
};

/* validation */
function validateControl(source, args) {
    var controlName = source.getAttribute('ControlID') ? source.getAttribute('ControlID') : source.controltovalidate;
    var control = $('#' + controlName);
    //var reg = new RegExp('^\\d*$');
    if (control.is('input:text')) {
        //if (source.getAttribute('ID').match(/.*refPhoneForRIT.*/)) {
        //    if (control.val().trim() == "" || (control.attr('emptyMessage') != null && control.attr('emptyMessage') == control.val())
        //        || reg.test(control.val()) == false || control.val().length < 6) {
        //        control.addClass("error");
        //        args.IsValid = false;
        //    }
        //}
        //else {

        if (false && control.attr('name').contains('Birthday')) {
            var isDate = function (value) {
                if (value.indexOf(',') > 0) value = value.split(',')[1].trim();
                var dateFormat;
                if (toString.call(value) === '[object Date]') {
                    return true;
                }
                if (typeof value.replace === 'function') {
                    value.replace(/^\s+|\s+$/gm, '');
                }
                dateFormat = /(^\d{1,4}[\.|\\/|-]\d{1,2}[\.|\\/|-]\d{1,4})(\s*(?:0?[1-9]:[0-5]|1(?=[012])\d:[0-5])\d\s*[ap]m)?$/;
                return dateFormat.test(value);
            }
            args.IsValid = isDate(control.val());
        }
        else if (control.val().trim() == "" || (control.attr('emptyMessage') != null && control.attr('emptyMessage') == control.val())) {
            control.addClass("error");
            args.IsValid = false;
        }
        else {
            control.removeClass("error");
            args.IsValid = true;
        }
        //}
    }
    else if (control.is('input:checkbox')) {
        if (!control.prop('checked')) {
            control.next().addClass("error");
            args.IsValid = false;
        }
        else {
            control.next().removeClass("error");
            args.IsValid = true;
        }
    }
    else if (control.is('select')) {
        if (control.val() == "-1") {
            control.addClass("error");
            args.IsValid = false;
        }
        else {
            control.removeClass("error");
            args.IsValid = true;
        }
    }
}
/* validation - end */

/* d21 rates */
function d21_showRates(sender) {
    // wird auch zum oeffnen der tischreservierung benutzt !!!
    var parent = $(sender).has('selectRate') ? sender : $(sender).closest('.selectRate');
    var target = $(parent).find('.rate-table');
    var width = $('.d21_width').width().toString().replace('px') * 0.85;
    var clipActive = BrowserDetect.browser != 'Explorer'; //|| BrowserDetect.version <= 10;

    $.fancybox(
        target,
        {
            minWidth: width,
            maxWidth: width,
            closeSpeed: 0,
            closeEffect: 'none',
            autoCenter: false,
            beforeShow: function () {
                if (clipActive) $('.fancybox-wrap').css({ 'clip': 'rect(0 0 0 0)' });
            },
            afterShow: function (current, previous) {
                var top = $('.fancybox-wrap').offset().top,
                    diff = -1 * (top - positionY + parseInt($('.fancybox-wrap').height() / 2)),
                    treshold = 18;

                if ((top + diff) < treshold) diff = -1 * top + treshold;
                
                $('.fancybox-wrap').css({ 'clip': '' });

                if (diff > 0) {
                    $('.fancybox-wrap').css({ 'margin-top': diff + 'px' });
                }

                $('.rateRow h2').each(function () {
                    if ($(this).height() > 30) {
                        $(this).find('span').css({
                            'font-size': '11px',
                            'line-height': '15px'
                        });
                    }
                });
            }
        });

    target.find('.selector').click(function () {
        $.fancybox.close(true);
        $.fancybox.showLoading();
    });

    var _maxItems = 3;

    if ($(target).hasClass('rate-table-h') || $(target).hasClass('rate-table-v')) {
        var direction = $(target).hasClass('rate-table-h') ? 'h' : 'v';

        // hoehenanpassung fuer ausklappbare elemente (stornokosten, vorauszahlung)
        $(target).find('.rate-table-item, .rate-table-header').each(function () {
            $(this).find('ul li').each(function (index, item) {
                $(item).attr('data-key', 'li-' + index);
            });
        });

        // 
        var headerItems = target.find('.rate-table-header ul li'),
            rateItems = target.find('.rate-table-item');

        if (direction == 'v') {
            $(headerItems).closest('ul').find('.rate-table-item-details').remove();

            rateItems.each(function() {
                var detailItem = $(this).find('.rate-table-item-details'),
                    nameItem = $(this).find('.rate-table-item-name');

                nameItem.append(
                    $('<div />')
                    .addClass(detailItem.attr('class'))
                    .append(detailItem.find('*'))
                    .hide()
                );

                $(detailItem).remove();
            });
        }

        headerItems.each(function (headerIndex, header) {
            var key = $(header).attr('data-key'),
                related = $(target).find('li[data-key="' + key + '"]');

            if (related && related.length > 0) {
                // 
                for (var i = 0; i < related.length; i++) {
                    var item = related[i];

                    if ($(item).find('span.hint').length > 0) {
                        var toggle = $(header).find('.toggle');

                        if (!toggle || toggle.length == 0) {
                            toggle = $('<span class="toggle" />').appendTo(header);
                        }

                        $(related)
                            .addClass('collapsible')
                            .click(function () {
                                if ($(header).hasClass('expanded')) {
                                    $(related).removeClass('expanded');
                                    $(header).removeAttr('style');
                                    $(toggle).removeClass('rotate180');

                                    if (direction == 'h') {
                                        $(header).css('height', 'auto');
                                        $(related).css('height', 'auto');
                                    }
                                }
                                else {
                                    $(related).addClass('expanded');
                                    $(toggle).addClass('rotate180');

                                    if (direction == 'h') {
                                        var maxHeight = 0;

                                        $(related).each(function () {
                                            maxHeight = Math.max(maxHeight, $(this).height());
                                        });

                                        $(header).height(maxHeight);
                                        $(related).height(maxHeight);
                                    }
                                }

                                $.fancybox.update();
                            });
                        break;
                    }
                }
            }
        });

        //
        var wrap = $(target).find('.rate-table-inner-wrap');

        // spezielle anweisungen je direction
        if ($(target).hasClass('rate-table-h')) {
            var items = $(target).find('.rate-table-item-selectable'),
                itemWidth = $(wrap).parent().width() / Math.min(_maxItems, items.length);

            if (items.length > _maxItems) {
                $(wrap).data('firstSlide', 0);

                // next/prev
                var slideNext = $(target).find('.rate-table-slidebutton[data-direction="next"]'),
                    slidePrev = $(target).find('.rate-table-slidebutton[data-direction="prev"]'),
                    updateSlideButtons = function () {
                        var firstSlide = $(wrap).data('firstSlide');

                        if (firstSlide == 0) {
                            $(slidePrev).hide();
                            $(slideNext).show();
                        }
                        else if ((firstSlide + _maxItems) >= items.length) {
                            $(slidePrev).show();
                            $(slideNext).hide();
                        }
                        else if (firstSlide > 0) {
                            $(slidePrev).show();
                            $(slideNext).show();
                        }
                    };

                $(target).find('.rate-table-slidebutton')
                    .css('line-height', $(target).height() + 'px')
                    .click(function() {
                        var currentOffset = parseFloat($(wrap).css('margin-left').replace('px', '')),
                            direction = $(this).attr('data-direction') == 'next' ? -1 : 1,
                            offset = currentOffset + (itemWidth * direction);

                        $(wrap).data('firstSlide', $(wrap).data('firstSlide') - direction);

                        wrap.css('margin-left', offset);

                        updateSlideButtons();
                    });

                updateSlideButtons();

                // compare
                var compareItems = function () {
                    return $(wrap).find('.compare input[type="checkbox"]');
                };

                compareItems().each(function (index, item) {
                    $(item).change(function () {
                        var current = $(item).closest('.rate-table-item-selectable');

                        if ($(item).get(0).checked) {
                            var lastChecked = $(wrap).find('.compare input:checked').not('#' + $(item).attr('id')).last();

                            if (lastChecked.length == 0) {
                                $(current).slideUp(function () {
                                    $(current).prependTo(wrap);
                                    $(current).slideDown();
                                });
                            }
                            else {
                                var last = $(lastChecked).closest('.rate-table-item-selectable');
                                $(last).after(current);
                            }
                        }
                        else {
                            $(current).appendTo(wrap);
                        }
                    });
                });
            }

            items.css('width', itemWidth);

            // details
            var detailItems = $(target).find('.rate-table-item-details'),
                toggleRateInfo = function (item, detailItem) {
                    var toggle = $(detailItem).find('a.toggle');

                    if ($(detailItem).data('expanded')) {
                        // 
                        $(detailItems)
                            .css('height', 'auto')
                            .removeClass('expanded');
                        $(detailItem)
                            .data('expanded', false)
                            .removeAttr('style');

                        //
                        $(item).removeClass('selected');

                        //
                        toggle.find('.show').show();
                        toggle.find('.hide').hide();

                        //
                        lastSelected = null;
                    } else {
                        var headerWidth = $(item).closest('.rate-table').find('.rate-table-header').width(),
                            itemWidth = $(target).width() - headerWidth,
                            itemLeft = $(item).position().left;

                        //
                        $(item).addClass('selected');

                        //
                        toggle.find('.show').hide();
                        toggle.find('.hide').show();

                        //
                        $(detailItem)
                            .data('expanded', true)
                            .css({
                                'left': -Math.abs(itemLeft),
                                'width': itemWidth
                            });
                        $(detailItems)
                            .height($(detailItem).height())
                            .addClass('expanded');

                        //
                        lastSelected = { item: item, detailItem: detailItem };
                    }
                },
                lastSelected = null;

            $(items).each(function(index, item) {
                var detailItem = $(item).find('.rate-table-item-details'),
                    detailText = detailItem.text().replace(/(\r\n|\n|\r| )/gm, '');

                if (detailText.length > 0) {
                    $(detailItem).find('a.toggle').click(function () {
                        if (detailItem.data('expanded')) {
                            toggleRateInfo(item, detailItem);
                        }
                        else {
                            if (lastSelected) toggleRateInfo(lastSelected.item, lastSelected.detailItem);

                            toggleRateInfo(item, detailItem);
                        }

                        $.fancybox.update();
                    });
                }
            });
        }
        else if ($(target).hasClass('rate-table-v')) {
            
        }

        $.fancybox.update();
    }
}
/* d21 rates - end */

function get_browser_version() {
    var N = navigator.appName, ua = navigator.userAgent, tem;
    var M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null) M[2] = tem[1];
    M = M ? [M[1], M[2]] : [N, navigator.appVersion, '-?'];
    return M[1];
}
function d21_formatDate(dateVal, format) {
    if (!Date.parse(dateVal)) {
        // kein datum
        if (dateVal == '0') {
            return $.datepicker.formatDate(format, new Date());
        }
        else if (dateVal == '+1D') {
            return $.datepicker.formatDate(format, new Date() + 1);
        }
        else {
            return null;
        }
    }
    else {
        return $.datepicker.formatDate(format, dateVal);
    }
}

function d21_setHiddenDate(sender) {
    if ($(sender).val() == '') {
        $(sender).next().val('');
    }
    else {
        $(sender).next().val($.datepicker.formatDate('dd.mm.yy', $(sender).datepicker('getDate')));
    }

    // ev. submit
    if ($(sender).attr('submit') == 'true') {
        document.forms[0].submit();
    }
}

function d21_adjustHeader() {
    $('.selectionItem').not('.layout-item').find('h2 header').each(function () {
        if ($(this).height() > 30) {
            $(this).addClass('small');
        }
    });

}

var roomDescriptionHeightLess;
function d21_showFullText(sender, txtLess) {
    var div = $(sender).closest('div');
    
    if ($(div).hasClass('roomTextFull')) {
        var txt = $(sender).attr('data-txt');
        $(sender).text(txt);
        $(sender).removeAttr('data-txt');
        $(div).removeClass('roomTextFull');
        $(sender).parent().parent().height(roomDescriptionHeightLess);
    }
    else {
        $(sender).attr('data-txt', $(sender).text());
        $(sender).text(txtLess);
        $(div).addClass('roomTextFull');
        roomDescriptionHeightLess = $(sender).parent().parent().height();
        var roomTextValueHeight = $(sender).siblings('.roomTextValue').height();

        if (roomDescriptionHeightLess < roomTextValueHeight + $(sender).height())
            $(sender).parent().parent().height(roomTextValueHeight + $(sender).height());
    }

     //$('#' + target).html(html);
     //$('#' + target).closest('div').find('.shortenShow').hide();
     //$('#' + target).closest('div').animate({ 'max-height': '1000px', 'padding-bottom': '8px' }, 500, function () { });
}

function d21_hideFullText(sender) {
    var div = $(sender).closest('div');
    if (div.length) {
        var val = $(div).attr('data-txt');
        if (val && val.length) {
            $(div).removeAttr('data-txt');
            $(div).find('span').html(val);
            $(div).find('.shortenShow').show();
            $(div).animate({ 'max-height': '50px', 'padding-bottom': '0' }, 0, function () { });
        }
    }
}

function d21_paymentShow(url) {
    // hide send-button
    $('.saveBookingButton').hide();

    // payment
    $.fancybox({
        'href': decodeURIComponent(url),
        'padding': 0,
        'modal': true,
        'autoScale': true,
        'autoSize': true,
        'transitionIn': 'none',
        'transitionOut': 'none',
        'showCloseButton': true,
        'type': 'iframe'
    });
}

function d21_paymentConfirmed(proceeed) {
    // close fancybox
    $.fancybox.close();

    // show confirmation-page
    if (proceeed) {
        $('.saveBookingButton').hide();
        $('.paymentConfirm').postback();
    }
    else {
        $('.saveBookingButton').show();
    }
}

function displayLocations(items) {
    var list = "";
    for (var i = 0; i < items.length; i++) {
        if (items[i].address.locality != null) list += ('<li onclick="selectLocation(\'' + items[i].address.locality + '\', \'' + items[i].point.coordinates + '\')"><div class="label">' + items[i].address.locality + '</div><div class="subLabel">' + items[i].address.adminDistrict + ', ' + items[i].address.countryRegion + '</div></li>');
    }

    // anzeigen
    if (list != "") {
        $('.geoSearchResult').width($('.geoSearchBox').width() + 5);
        $('.geoSearchResult').show();
        $('.geoSearchResult').empty();
        $('.geoSearchResult').append('<ul>' + list + '</ul>');

        $('.geoSearchResult').mouseleave(function () { $(this).hide(); });
    }
    else {
        $('.geoSearchResult').hide();
    }
}

function selectLocation(name, coordinates) {
    $('.geoSearchBox').val(name);
    $('.geoCoordinates').val(coordinates);
    $('.geoSearchResult').hide();
}

function displaySelectedItem(item) {
    // $('#geoSearchResult').empty().append('Result: ' + item.name).append(' (Latitude: ' + item.point.coordinates[0] + ' Longitude: ' + item.point.coordinates[1] + ')');
}

function StopPropagation(e) {
    e.cancelBubble = true;
    if (e.stopPropagation) {
        e.stopPropagation();
    }
}

/* ====================== SUCHE ================== */
function setHiddenDates() {
    var arrival = $(".arrivalDate").datepicker('getDate');
    var strArrival = $.datepicker.formatDate('dd.mm.yy', arrival);
    arrivalChanged = strArrival != $('.hArrival input[type=hidden]').val();
    $('.hArrival input[type=hidden]').val(strArrival);

    if (!config.IsAvailabilityCalendar) {
        var departure = $(".departureDate").datepicker('getDate');
        $('.hDeparture input[type=hidden]').val($.datepicker.formatDate('dd.mm.yy', departure));
    }
}

function onBeforeShowDay(date) {
    return setDateStyles(date, today, arrival, departure);
}

function setDateStyles(date, min, arrival, departure) {
    if (date >= arrival && date <= departure) {
        return [true, 'activeDate'];
    }
    else if (date < min) {
        return [false, 'ui-datepicker-unselectable ui-state-disabled'];
    }
    else if (!config.IsAvailabilityCalendar) {
        return [true, ''];
    }
    else {
        // woche startet am sonntag mit 0
        var day = (date.getDay() == 0) ? 7 : date.getDay();
        if (date < min) {
            return [true, ''];
        }
        else if (config.ArrivalDays.indexOf(day.toString()) == -1) {
            return [false, ''];
        }
        else {
            var m = date.getMonth() + 1, d = date.getDate(), y = date.getFullYear();
            var strCurrent = y + '-' + m + '-' + d;
            return $.inArray(strCurrent, unavailableDates) != -1 ? [false, 'unavailableDate'] : [true, 'availableDate ' + strCurrent];
        }
    }
}

/* utility functions */
function changeMonth(year, month, sender) {
    if (config.IsAvailabilityCalendar) updateCalendar(new Date(year, month, 1));
}

function updateCalendar(firstDate, addOneMonth) {

    var currentMonths = new Array();
    for (i = 0; i < 2; i++) {
        var m = firstDate.getMonth() + i, y = firstDate.getFullYear();
        if (m == 0 || addOneMonth) m += 1;

        var strCurrent = y + '-' + (m < 9 ? '0' + m : m) + '-01';
        if ($.inArray(strCurrent, searchedMonths) == -1) {
            searchedMonths.push(strCurrent);
            currentMonths.push(strCurrent);
        }
    }

    if (currentMonths.length > 0) {
        var nights = $('.countNights').val();
        var url = '/api/util/packageAvailability?' + 'knr=' + config.UID + '&bmid=' + config.BMID + '&pid=' + config.PackageID + '&start=' + currentMonths[0] + '&months=' + currentMonths.length + '&nights=' + nights;

        $.ajax({
            url: url,
            dataType: 'json',
            success: function (data) {
                for (i = 0; i < data.Unavailable.length; i++) $('.' + data.Unavailable[i]).addClass('unavailableDate');
                unavailableDates = $.merge(unavailableDates, data.Unavailable);
            },
            error: function (a, b, c) {
                // alert(c);
            }
        });
    }
}

var BrowserDetect = {
    init: function () {
        this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
        this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
        this.OS = this.searchString(this.dataOS) || "an unknown OS";
    },
    searchString: function (data) {
        for (var i = 0; i < data.length; i++) {
            var dataString = data[i].string;
            var dataProp = data[i].prop;
            this.versionSearchString = data[i].versionSearch || data[i].identity;
            if (dataString) {
                if (dataString.indexOf(data[i].subString) != -1)
                    return data[i].identity;
            }
            else if (dataProp)
                return data[i].identity;
        }
    },
    searchVersion: function (dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index == -1) return -1;
        return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
    },
    dataBrowser: [
		{
		    string: navigator.userAgent,
		    subString: "Chrome",
		    identity: "Chrome"
		},
		{
		    string: navigator.userAgent,
		    subString: "OmniWeb",
		    versionSearch: "OmniWeb/",
		    identity: "OmniWeb"
		},
		{
		    string: navigator.vendor,
		    subString: "Apple",
		    identity: "Safari",
		    versionSearch: "Version"
		},
		{
		    prop: window.opera,
		    identity: "Opera",
		    versionSearch: "Version"
		},
		{
		    string: navigator.vendor,
		    subString: "iCab",
		    identity: "iCab"
		},
		{
		    string: navigator.vendor,
		    subString: "KDE",
		    identity: "Konqueror"
		},
		{
		    string: navigator.userAgent,
		    subString: "Firefox",
		    identity: "Firefox"
		},
		{
		    string: navigator.vendor,
		    subString: "Camino",
		    identity: "Camino"
		},
		{		// for newer Netscapes (6+)
		    string: navigator.userAgent,
		    subString: "Netscape",
		    identity: "Netscape"
		},
		{
		    string: navigator.userAgent,
		    subString: "MSIE",
		    identity: "Explorer",
		    versionSearch: "MSIE"
		},
		{
		    string: navigator.userAgent,
		    subString: "Gecko",
		    identity: "Mozilla",
		    versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
		    string: navigator.userAgent,
		    subString: "Mozilla",
		    identity: "Netscape",
		    versionSearch: "Mozilla"
		}
    ],
    dataOS: [
		{
		    string: navigator.platform,
		    subString: "Win",
		    identity: "Windows"
		},
		{
		    string: navigator.platform,
		    subString: "Mac",
		    identity: "Mac"
		},
		{
		    string: navigator.userAgent,
		    subString: "iPhone",
		    identity: "iPhone/iPod"
		},
		{
		    string: navigator.platform,
		    subString: "Linux",
		    identity: "Linux"
		}
    ]
};


jQuery.fn.sortElements = (function () {

    var sort = [].sort;

    return function (comparator, getSortable) {

        getSortable = getSortable || function () { return this; };

        var placements = this.map(function () {

            var sortElement = getSortable.call(this),
                parentNode = sortElement.parentNode,

                // Since the element itself will change position, we have
                // to have some way of storing its original position in
                // the DOM. The easiest way is to have a 'flag' node:
                nextSibling = parentNode.insertBefore(
                    document.createTextNode(''),
                    sortElement.nextSibling
                );

            return function () {
                //tt
                if (parentNode === this) {
                    throw new Error(
                        "You can't sort elements if any one is a descendant of another."
                    );
                }

                // Insert before flag:
                parentNode.insertBefore(this, nextSibling);
                // Remove flag:
                parentNode.removeChild(nextSibling);

            };

        });

        return sort.call(this, comparator).each(function (i) {
            placements[i].call(getSortable.call(this));
        });

    };

})();