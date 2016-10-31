// ************************************
// Start of Simple Calendar Widget Code
// ************************************

// This date is used throughout to determine today's date.

var scwDateNow = new Date(Date.parse(new Date().toDateString()));

//******************************************************************************
//------------------------------------------------------------------------------
// Customisation section
//------------------------------------------------------------------------------
//******************************************************************************

// Set the bounds for the calendar here...
// If you want the year to roll forward you can use something like this...
//      var scwBaseYear = scwDateNow.getFullYear()-5;
// alternatively, hard code a date like this...
//      var scwBaseYear = 1990;

var scwBaseYear = scwDateNow.getFullYear() - 10;

// How many years do want to be valid and to show in the drop-down list?

var scwDropDownYears = 20;

// All language-dependent changes can be made here...

// If you wish to work in a single language (other than English) then
// just replace the English (in the function scwSetLanguage below) with
// your own text.

// Using multiple languages:
// In order to keep this script to a resonable size I have not included
// languages here.  You can set language fields in a function that you
// should call  scwSetLanguage  the script will use your languages.
// I have included all the translations that have been sent to me in
// such a function on the demonstration page.

var scwLanguage;

function scwSetDefaultLanguage() {
    try
            { scwSetLanguage(); }
    catch (exception) {// English
        scwToday = 'Today:';
        scwClear = 'Clear';
        scwDrag = 'click here to drag';
        scwArrMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                                       'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        scwArrWeekInits = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        scwInvalidDateMsg = 'The entered date is invalid.\n';
        scwOutOfRangeMsg = 'The entered date is out of range.';
        scwDoesNotExistMsg = 'The entered date does not exist.';
        scwInvalidAlert = ['Invalid date (', ') ignored.'];
        scwDateDisablingError = ['Error ', ' is not a Date object.'];
        scwRangeDisablingError = ['Error ',
                                       ' should consist of two elements.'];
    }
};

function scwSetLanguage() {
    if (d21Language == 'en-US') {
        scwToday = 'Today:';
        scwClear = 'Clear';
        scwDrag = 'click here to drag';
        scwArrMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        scwArrWeekInits = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
        scwInvalidDateMsg = 'Please verify entered date.\n';
        scwOutOfRangeMsg = 'Entered date lies in the past.';
        scwDoesNotExistMsg = 'Please verify entered date.';
        scwInvalidAlert = ['Invalid date (', ') ignored.'];
        scwDateDisablingError = ['Error ', ' is not a Date object.'];
        scwRangeDisablingError = ['Error ', ' should consist of two elements.'];
    }
    else {
        scwToday = 'Heute:';
        scwClear = 'Clear';
        scwDrag = 'click here to drag';
        scwArrMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
        scwArrWeekInits = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
        scwInvalidDateMsg = 'Bitte eingegebenes Datum �berpr�fen.\n';
        scwOutOfRangeMsg = 'Eingegebenes Datum ist in der Vergangenheit.';
        scwDoesNotExistMsg = 'Bitte eingegebenes Datum ueberpruefen.';
        // scwInvalidAlert = ['Invalid date (', ') ignored.'];
        // scwDateDisablingError = ['Error ', ' is not a Date object.'];
        // scwRangeDisablingError = ['Error ', ' should consist of two elements.'];
    }
}

// Note:  Always start the scwArrWeekInits array with your string for
//        Sunday whatever scwWeekStart (below) is set to.

// scwWeekStart determines the start of the week in the display
// Set it to: 0 (Zero) for Sunday, 1 (One) for Monday etc..

var scwWeekStart = 1;

// The week start day for the display is taken as the week start
// for week numbering.  This ensures that only one week number
// applies to one line of the calendar table.
// [ISO 8601 begins the week with Day 1 = Monday.]

// If you want to see week numbering on the calendar, set
// this to true.  If not, false.

var scwWeekNumberDisplay = false;

// Week numbering rules are generally based on a day in the week
// that determines the first week of the year.  ISO 8601 uses
// Thursday (day four when Sunday is day zero).  You can alter
// the base day here.

// See http://www.cl.cam.ac.uk/~mgk25/iso-time.html for more information

var scwWeekNumberBaseDay = 4;

// Each of the calendar's alert message types can be disabled
// independently here.

var scwShowInvalidDateMsg = true,
        scwShowOutOfRangeMsg = true,
        scwShowDoesNotExistMsg = true,
        scwShowInvalidAlert = true,
        scwShowDateDisablingError = true,
        scwShowRangeDisablingError = true;

// Set the allowed input date delimiters here...
// E.g. To set the rising slash, hyphen, full-stop (aka stop or point),
//      comma and space as delimiters use
//              var scwArrDelimiters   = ['/','-','.',',',' '];

var scwArrDelimiters = ['/', '-', '.', ',', ' '];

// Set the format for the displayed 'Today' date and for the output
// date here.
//
// The format is described using delimiters of your choice (as set
// in scwArrDelimiters above) and case insensitive letters D, M and Y.
//
// NOTE: If no delimiters are input then the date output format is used
//       to parse the value.  This allows less flexiblility in the input
//       value than using delimiters but an accurately entered date
//       remains parsable.
//
// Definition               Returns
// ----------               -------
// D            date in the month without zero filling
// DD           date in the month left zero filled
// M            month number without zero filling
// MM           month number left zero filled
// MMM          month string from scwArrMonthNames
// YY           year number in two digits
// YYYY         year number in four digits

// Displayed "Today" date format

//var scwDateDisplayFormat = (d21Language == 'en-US') ? 'MM-dd-yyyy' : 'dd.MM.yyyyy';     // e.g. 'MMM-DD-YYYY' for the US
var scwDateDisplayFormat = 'dd.MM.yyyy';     // e.g. 'MMM-DD-YYYY' for the US

// Output date format

var scwDateOutputFormat = scwDateDisplayFormat; // e.g. 'MMM-DD-YYYY' for the US

// Note: The delimiters used should be in scwArrDelimiters.

// scwZindex controls how the pop-up calendar interacts with the rest
// of the page.  It is usually adequate to leave it as 1 (One) but I
// have made it available here to help anyone who needs to alter the
// level in order to ensure that the calendar displays correctly in
// relation to all other elements on the page.

var scwZindex = 9999;

// Personally I like the fact that entering 31-Sep-2005 displays
// 1-Oct-2005, however you may want that to be an error.  If so,
// set scwBlnStrict = true.  That will cause an error message to
// display and the selected month is displayed without a selected
// day. Thanks to Brad Allan for his feedback prompting this feature.

var scwBlnStrict = false;

// If you are using ReadOnly or Disabled fields to return the date
// value into, it can be useful to show a button on the calendar
// that allows the value to be cleared.  If you want to do that,
// set scwClearButton = true;

var scwClearButton = true;

// The calendar will position itself aligned with the bottom left
// corner of the target element.  If automatic positioning is turned
// on  with  scwAutoPosition = true  then if that would cause the
// calendar to display off the visible screen, it is shifted to
// a position that is visible.

var scwAutoPosition = true;

// If you wish to disable any displayed day, e.g. Every Monday,
// you can do it by setting the following array.  The array elements
// match the displayed cells.
//
// You could put something like the following in your calling page
// to disable all weekend days;
//
//  for (var i=0;i<scwEnabledDay.length;i++)
//      {if (i%7%6==0) scwEnabledDay[i] = false;}
//
// The above approach will allow you to disable days of the week
// for the whole of your page easily.  If you need to set different
// disabled days for a number of date input fields on your page
// there is an easier way: You can pass additional arguments to
// scwShow. The syntax is described at the top of this script in
// the section:
//    "How to use the Calendar once it is defined for your page:"
//
// It is possible to use these two approaches in combination.

var scwEnabledDay = [true, true, true, true, true, true, true,
                              true, true, true, true, true, true, true,
                              true, true, true, true, true, true, true,
                              true, true, true, true, true, true, true,
                              true, true, true, true, true, true, true,
                              true, true, true, true, true, true, true];

// You can disable any specific date (e.g. 24-Jan-2006 or Today) by
// creating an element of the array scwDisabledDates as a date object
// with the value you want to disable.  Date ranges can be disabled
// by placing an array of two values (Start and End) into an element
// of this array.

var scwDisabledDates = new Array();

// e.g. To disable 10-Dec-2005:
//          scwDisabledDates[0] = new Date(2005,11,10);
//
//      or a range from 2004-Dec-25 to 2005-Jan-01:
//          scwDisabledDates[1] = [new Date(2004,11,25),new Date(2005,0,1)];
//
// Remember that Javascript months are Zero-based.

// The disabling by date and date range does prevent the current day
// from being selected.  Disabling days of the week does not so you can set
// the scwActiveToday value to false to prevent selection.

var scwActiveToday = true;

// Dates that are out of the displayed month are shown at the start
// (unless the month starts on the first day of the week) and end of each
// month.
//
// Set scwOutOfMonthDisable to  true  to disable these dates (or  false
// to allow their selection).
//
// Set scwOutOfMonthHide    to  true  to hide    these dates (or  false
// to make them visible).

var scwOutOfMonthDisable = false;
var scwOutOfMonthHide = false;

// Dates that are out of the specified range can be displayed at the start
// of the very first month and end of the very last.  Set
// scwOutOfRangeDisable to  true  to disable these dates (or  false  to
// allow their selection).

var scwOutOfRangeDisable = true;

// If you want a special format for the cell that contains the current day
// set this to true.  This sets a thin border around the cell in the colour
// set by scwTodayCellBorderColour.

var scwFormatTodayCell = true;
var scwTodayCellBorderColour = 'red';

// You can allow the calendar to be dragged around the screen by
// using the setting scwAllowDrag to true.
// I can't say I recommend it because of the danger of the user
// forgetting which date field the calendar will update when there
// are multiple date fields on a page.

var scwAllowDrag = false;

// Closing the calendar by clicking on it (rather than elsewhere on the
// main page) can be inconvenient.  The scwClickToHide boolean value
// controls this feature.

var scwClickToHide = false;

//******************************************************************************
//------------------------------------------------------------------------------
// End of customisation section
//------------------------------------------------------------------------------
//******************************************************************************

//  Variables required by both scwShow and scwShowMonth

var     scwTargetEle,
        scwTarget2Ele,
        scwTriggerEle,
        scwMonthSum = 0,
        scwBlnFullInputDate = false,
        scwPassEnabledDay = new Array(),
        scwSeedDate = new Date(),
        scwParmActiveToday = true,
        scwWeekStart = scwWeekStart % 7,
        scwToday,
        scwClear,
        scwDrag,
        scwArrMonthNames,
        scwArrWeekInits,
        scwInvalidDateMsg,
        scwOutOfRangeMsg,
        scwDoesNotExistMsg,
        scwInvalidAlert,
        scwDateDisablingError,
        scwRangeDisablingError;

// Add a method to format a date into the required pattern

Date.prototype.scwFormat =
        function(scwFormat) {
            var charCount = 0,
                 codeChar = '',
                 result = '';

            for (var i = 0; i <= scwFormat.length; i++) {
                if (i < scwFormat.length && scwFormat.charAt(i) == codeChar) {// If we haven't hit the end of the string and
                    // the format string character is the same as
                    // the previous one, just clock up one to the
                    // length of the current element definition
                    charCount++;
                }
                else {
                    switch (codeChar) {
                        case 'y': case 'Y':
                            result += (this.getFullYear() % Math.
                                            pow(10, charCount)).toString().
                                            scwPadLeft(charCount);
                            break;
                        case 'm': case 'M':
                            // If we find an M, check the number of them to
                            // determine whether to get the month number or
                            // the month name.
                            result += (charCount < 3)
                                            ? (this.getMonth() + 1).
                                                toString().scwPadLeft(charCount)
                                            : scwArrMonthNames[this.getMonth()];
                            break;
                        case 'd': case 'D':
                            // If we find a D, get the date and format it
                            result += this.getDate().toString().
                                            scwPadLeft(charCount);
                            break;
                        default:
                            // Copy any unrecognised characters across
                            while (charCount-- > 0) { result += codeChar; }
                    }

                    if (i < scwFormat.length) {// Store the character we have just worked on
                        codeChar = scwFormat.charAt(i);
                        charCount = 1;
                    }
                }
            }
            return result;
        };

// Add a method to left pad zeroes

String.prototype.scwPadLeft =
        function(padToLength) {
            var result = '';
            //for (var i = 0; i < (padToLength - this.length); i++) { result += '0'; }
            for (var i = 0; i < (padToLength - this.length); i++) { result = result; }
            return (result + this);
        };

// Set up a closure so that any next function can be triggered
// after the calendar has been closed AND that function can take
// arguments.

Function.prototype.runsAfterSCW =
        function() {
            var func = this,
                         args = new Array(arguments.length);

            for (var i = 0; i < args.length; ++i) { args[i] = arguments[i]; }

            return function() {// concat/join the two argument arrays
                for (var i = 0; i < arguments.length; ++i) { args[args.length] = arguments[i]; }
                return (args.shift() == scwTriggerEle) ? func.apply(this, args) : null;
            };
        };

// Set up some shortcuts

function scwID(id) {
    if (document.getElementById(id) || (!document.getElementById(id) && document.getElementsByName(id).length == 0))
    // IF   An ID attribute is assigned
    // OR   No ID attribute is assigned but using IE and Opera
    //          (which will find the NAME attribute value using getElementById)
    // OR   No element has this ID or NAME attribute value
    //          (used internally by the script)
    // THEN Return the required element.
    { return document.getElementById(id); }
    else {
        if (document.getElementsByName(id).length == 1)
        // IF   No ID attribute is assigned
        // AND  Using a standards-based browser
        // AND  Only one element has the NAME attribute set to the value
        // THEN Return the required element (using the NAME attribute value).
        { return document.getElementsByName(id)[0]; }
        else {
            if (document.getElementsByName(id).length > 1) {   // IF   No ID attribute is assigned
                // AND  using a standards-based browser
                // AND  more than one element has the NAME attribute set to the value
                // THEN alert developer to fix the fault.
                alert('SCW' +
                                    ' \nCannot uniquely identify element named: ' + id +
                                    '.\nMore than one identical NAME attribute defined' +
                                    '.\nSolution: Assign the required element a unique ID attribute value.');
            }
        }
    }
};

// Use a global variable for the return value from the next action
// IE fails to pass the function through if the target element is in
// a form and scwNextAction is not defined.

var scwNextActionReturn, scwNextAction;

// ****************************************************************************
// Start of Function Library
//
//  Exposed functions:
//
//      scwShow             Entry point for display of calendar,
//                              called in main page.
//      showCal             Legacy name of scwShow:
//                              Passes only legacy arguments,
//                              not the optional day disabling arguments.
//
//      scwShowMonth        Displays a month on the calendar,
//                              Called when a month is set or changed.
//
//      scwBeginDrag        Controls calendar dragging.
//
//      scwCancel           Called when the calendar background is clicked:
//                              Calls scwStopPropagation and may call scwHide.
//      scwHide             Hides the calendar, called on various events.
//      scwStopPropagation  Stops the propagation of an event.
//
// ****************************************************************************

function showCal(scwEle, scwSource) { scwShow(scwEle, scwSource); };
function scwShow(scwEle, scwEle2, scwSource) {
    if (!scwSource) { scwSource = window.event; }

    if (scwSource.tagName) // Second parameter isn't an event it's an element
    {
        var scwSourceEle = scwSource;

        if (scwID('scwIE')) { window.event.cancelBubble = true; }
        else { scwSourceEle.parentNode.addEventListener('click', scwStopPropagation, false); }
    }
    else   // Second parameter is an event
    {
        var scwSourceEle = (scwSource.target)
                                    ? scwSource.target
                                    : scwSource.srcElement;

        // Stop the click event that opens the calendar from bubbling up to
        // the document-level event handler that hides it!
        if (scwSource.stopPropagation) { scwSource.stopPropagation(); }
        else { scwSource.cancelBubble = true; }
    }

    scwTriggerEle = scwSourceEle;

    // Take any parameters that there might be from the third onwards as
    // day numbers to be disabled 0 = Sunday through to 6 = Saturday.

    scwParmActiveToday = true;

    for (var i = 0; i < 7; i++) {
        scwPassEnabledDay[(i + 7 - scwWeekStart) % 7] = true;
        for (var j = 2; j < arguments.length; j++) {
            if (arguments[j] == i) {
                scwPassEnabledDay[(i + 7 - scwWeekStart) % 7] = false;
                if (scwDateNow.getDay() == i) { scwParmActiveToday = false; }
            }
        }
    }

    //   If no value is preset then the seed date is
    //      Today (when today is in range) OR
    //      The middle of the date range.

    scwSeedDate = scwDateNow;

    // Find the date and Strip space characters from start and
    // end of date input.

    var scwDateValue = '';

    if (scwEle.value) { scwDateValue = scwEle.value.replace(/^\s+/, '').replace(/\s+$/, ''); }
    else {
        if (typeof scwEle.value == 'undefined') {
            var scwChildNodes = scwEle.childNodes;
            for (var i = 0; i < scwChildNodes.length; i++) {
                if (scwChildNodes[i].nodeType == 3) {
                    scwDateValue = scwChildNodes[i].nodeValue.replace(/^\s+/, '').replace(/\s+$/, '');
                    if (scwDateValue.length > 0) {
                        scwTriggerEle.scwTextNode = scwChildNodes[i];
                        scwTriggerEle.scwLength = scwChildNodes[i].nodeValue.length;
                        break;
                    }
                }
            }
        }
    }

    // Set the language-dependent elements

    scwSetDefaultLanguage();

    scwID('scwDragText').innerHTML = scwDrag;

    scwID('scwMonths').options.length = 0;
    for (var i = 0; i < scwArrMonthNames.length; i++)
    { scwID('scwMonths').options[i] = new Option(scwArrMonthNames[i], scwArrMonthNames[i]); }

    scwID('scwYears').options.length = 0;
    for (var i = 0; i < scwDropDownYears; i++)
    { scwID('scwYears').options[i] = new Option((scwBaseYear + i), (scwBaseYear + i)); }

    for (var i = 0; i < scwArrWeekInits.length; i++)
    { scwID('scwWeekInit' + i).innerHTML = scwArrWeekInits[(i + scwWeekStart) % scwArrWeekInits.length]; }

    if (((new Date(scwBaseYear + scwDropDownYears, 0, 0)) > scwDateNow &&
              (new Date(scwBaseYear, 0, 0)) < scwDateNow) ||
             (scwClearButton && (scwEle.readOnly || scwEle.disabled))
            ) {
        scwID('scwFoot').style.display = 'none';
        scwID('scwNow').innerHTML = scwToday + ' ' + scwDateNow.scwFormat(scwDateDisplayFormat);
        scwID('scwClearButton').value = scwClear;
        if ((new Date(scwBaseYear + scwDropDownYears, 0, 0)) > scwDateNow &&
                     (new Date(scwBaseYear, 0, 0)) < scwDateNow
                    ) {
            scwID('scwNow').style.display = '';
            if (scwClearButton && (scwEle.readOnly || scwEle.disabled)) {
                scwID('scwClear').style.display = '';
                scwID('scwClear').style.textAlign = 'left';
                scwID('scwNow').style.textAlign = 'right';
            }
            else {
                scwID('scwClear').style.display = 'none';
                scwID('scwNow').style.textAlign = 'center';
            }
        }
        else {
            scwID('scwClear').style.textAlign = 'center';
            scwID('scwClear').style.display = '';
            scwID('scwNow').style.display = 'none';
        }
    }
    else { scwID('scwFoot').style.display = 'none'; }

    if (scwDateValue.length == 0) {// If no value is entered and today is within the range,
        // use today's date, otherwise use the middle of the valid range.

        scwBlnFullInputDate = false;

        if ((new Date(scwBaseYear + scwDropDownYears, 0, 0)) < scwSeedDate ||
                 (new Date(scwBaseYear, 0, 1)) > scwSeedDate
                )
        { scwSeedDate = new Date(scwBaseYear + Math.floor(scwDropDownYears / 2), 5, 1); }
    }
    else {
        function scwInputFormat() {
            var scwArrSeed = new Array(),
                     scwArrInput = scwDateValue.split(new RegExp('[\\' + scwArrDelimiters.join('\\') + ']+', 'g'));

            // "Escape" all the user defined date delimiters above -
            // several delimiters will need it and it does no harm for
            // the others.

            // Strip any empty array elements (caused by delimiters)
            // from the beginning or end of the array. They will
            // still appear in the output string if in the output
            // format.

            if (scwArrInput[0] != null) {
                if (scwArrInput[0].length == 0) { scwArrInput.splice(0, 1); }
                if (scwArrInput[scwArrInput.length - 1].length == 0) { scwArrInput.splice(scwArrInput.length - 1, 1); }
            }

            scwBlnFullInputDate = false;

            scwDateOutputFormat = scwDateOutputFormat.toUpperCase();

            // List all the allowed letters in the date format
            var template = ['D', 'M', 'Y'];

            // Prepare the sequence of date input elements
            var result = new Array();

            for (var i = 0; i < template.length; i++) {
                if (scwDateOutputFormat.search(template[i]) > -1)
                { result[scwDateOutputFormat.search(template[i])] = template[i]; }
            }

            var scwDateSequence = result.join('');

            // Separate the elements of the date input
            switch (scwArrInput.length) {
                case 1:
                    {
                        if (scwDateOutputFormat.indexOf('Y') > -1 &&
                             scwArrInput[0].length > scwDateOutputFormat.lastIndexOf('Y')) {
                            scwArrSeed[0] = parseInt(scwArrInput[0].substring(scwDateOutputFormat.indexOf('Y'),
                                                                               scwDateOutputFormat.lastIndexOf('Y') + 1), 10);
                        }
                        else { scwArrSeed[0] = 0; }

                        if (scwDateOutputFormat.indexOf('M') > -1 &&
                             scwArrInput[0].length > scwDateOutputFormat.lastIndexOf('M')) {
                            scwArrSeed[1] = scwArrInput[0].substring(scwDateOutputFormat.indexOf('M'),
                                                                      scwDateOutputFormat.lastIndexOf('M') + 1);
                        }
                        else { scwArrSeed[1] = '6'; }

                        if (scwDateOutputFormat.indexOf('D') > -1 &&
                             scwArrInput[0].length > scwDateOutputFormat.lastIndexOf('D')) {
                            scwArrSeed[2] = parseInt(scwArrInput[0].substring(scwDateOutputFormat.indexOf('D'),
                                                                               scwDateOutputFormat.lastIndexOf('D') + 1), 10);
                        }
                        else { scwArrSeed[2] = 1; }

                        if (scwArrInput[0].length == scwDateOutputFormat.length) { scwBlnFullInputDate = true; }
                        break;
                    }
                case 2:
                    {// Year and Month entry
                        scwArrSeed[0] =
                             parseInt(scwArrInput[scwDateSequence.
                                                    replace(/D/i, '').
                                                    search(/Y/i)], 10);  // Year
                        scwArrSeed[1] = scwArrInput[scwDateSequence.
                                                    replace(/D/i, '').
                                                    search(/M/i)];      // Month
                        scwArrSeed[2] = 1;                             // Day
                        break;
                    }
                case 3:
                    {// Day Month and Year entry

                        scwArrSeed[0] =
                             parseInt(scwArrInput[scwDateSequence.
                                                    search(/Y/i)], 10);  // Year
                        scwArrSeed[1] = scwArrInput[scwDateSequence.
                                                    search(/M/i)];      // Month
                        scwArrSeed[2] =
                             parseInt(scwArrInput[scwDateSequence.
                                                    search(/D/i)], 10);  // Day

                        scwBlnFullInputDate = true;
                        break;
                    }
                default:
                    {// A stuff-up has led to more than three elements in
                        // the date.
                        scwArrSeed[0] = 0;     // Year
                        scwArrSeed[1] = 0;     // Month
                        scwArrSeed[2] = 0;     // Day
                    }
            }

            // These regular expressions validate the input date format
            // to the following rules;
            //         Day   1-31 (optional zero on single digits)
            //         Month 1-12 (optional zero on single digits)
            //                     or case insensitive name
            //         Year  One, Two or four digits

            // Months names are as set in the language-dependent
            // definitions and delimiters are set just below there

            var scwExpValDay = new RegExp('^(0?[1-9]|[1-2][0-9]|3[0-1])$'),
                     scwExpValMonth = new RegExp('^(0?[1-9]|1[0-2]|' +
                                                  scwArrMonthNames.join('|') +
                                                  ')$', 'i'),
                     scwExpValYear = new RegExp('^([0-9]{1,2}|[0-9]{4})$');

            // Apply validation and report failures

            if (scwExpValYear.exec(scwArrSeed[0]) == null ||
                     scwExpValMonth.exec(scwArrSeed[1]) == null ||
                     scwExpValDay.exec(scwArrSeed[2]) == null
                    ) {
                if (scwShowInvalidDateMsg) {
                    alert(scwInvalidDateMsg +
                               scwInvalidAlert[0] + scwDateValue +
                               scwInvalidAlert[1]);
                }
                scwBlnFullInputDate = false;
                scwArrSeed[0] = scwBaseYear +
                                     Math.floor(scwDropDownYears / 2); // Year
                scwArrSeed[1] = '6';                            // Month
                scwArrSeed[2] = 1;                              // Day
            }

            // Return the  Year    in scwArrSeed[0]
            //             Month   in scwArrSeed[1]
            //             Day     in scwArrSeed[2]

            return scwArrSeed;
        };

        // Parse the string into an array using the allowed delimiters

        scwArrSeedDate = scwInputFormat();

        // So now we have the Year, Month and Day in an array.

        //   If the year is one or two digits then the routine assumes a
        //   year belongs in the 21st Century unless it is less than 50
        //   in which case it assumes the 20th Century is intended.

        if (scwArrSeedDate[0] < 100) { scwArrSeedDate[0] += (scwArrSeedDate[0] > 50) ? 1900 : 2000; }

        // Check whether the month is in digits or an abbreviation

        if (scwArrSeedDate[1].search(/\d+/) < 0) {
            for (i = 0; i < scwArrMonthNames.length; i++) {
                if (scwArrSeedDate[1].toUpperCase() == scwArrMonthNames[i].toUpperCase()) {
                    scwArrSeedDate[1] = i + 1;
                    break;
                }
            }
        }

        scwSeedDate = new Date(scwArrSeedDate[0], scwArrSeedDate[1] - 1, scwArrSeedDate[2]);
    }

    // Test that we have arrived at a valid date

    if (isNaN(scwSeedDate)) {
        if (scwShowInvalidDateMsg) { alert(scwInvalidDateMsg + scwInvalidAlert[0] + scwDateValue + scwInvalidAlert[1]); }
        scwSeedDate = new Date(scwBaseYear + Math.floor(scwDropDownYears / 2), 5, 1);
        scwBlnFullInputDate = false;
    }
    else {// Test that the date is within range,
        // if not then set date to a sensible date in range.

        if ((new Date(scwBaseYear, 0, 1)) > scwSeedDate) {
            if (scwBlnStrict && scwShowOutOfRangeMsg) { alert(scwOutOfRangeMsg); }
            scwSeedDate = new Date(scwBaseYear, 0, 1);
            scwBlnFullInputDate = false;
        }
        else {
            if ((new Date(scwBaseYear + scwDropDownYears, 0, 0)) < scwSeedDate) {
                if (scwBlnStrict && scwShowOutOfRangeMsg) { alert(scwOutOfRangeMsg); }
                scwSeedDate = new Date(scwBaseYear + Math.floor(scwDropDownYears) - 1, 11, 1);
                scwBlnFullInputDate = false;
            }
            else {
                if (scwBlnStrict && scwBlnFullInputDate &&
                          (scwSeedDate.getDate() != scwArrSeedDate[2] ||
                           (scwSeedDate.getMonth() + 1) != scwArrSeedDate[1] ||
                           scwSeedDate.getFullYear() != scwArrSeedDate[0]
                          )
                        ) {
                    if (scwShowDoesNotExistMsg) alert(scwDoesNotExistMsg);
                    scwSeedDate = new Date(scwSeedDate.getFullYear(), scwSeedDate.getMonth() - 1, 1);
                    scwBlnFullInputDate = false;
                }
            }
        }
    }

    // Test the disabled dates for validity
    // Give error message if not valid.

    for (var i = 0; i < scwDisabledDates.length; i++) {
        if (!((typeof scwDisabledDates[i] == 'object') && (scwDisabledDates[i].constructor == Date))) {
            if ((typeof scwDisabledDates[i] == 'object') && (scwDisabledDates[i].constructor == Array)) {
                var scwPass = true;

                if (scwDisabledDates[i].length != 2) {
                    if (scwShowRangeDisablingError)
                    { alert(scwRangeDisablingError[0] + scwDisabledDates[i] + scwRangeDisablingError[1]); }
                    scwPass = false;
                }
                else {
                    for (var j = 0; j < scwDisabledDates[i].length; j++) {
                        if (!((typeof scwDisabledDates[i][j] == 'object') && (scwDisabledDates[i][j].constructor == Date))) {
                            if (scwShowRangeDisablingError)
                            { alert(scwDateDisablingError[0] + scwDisabledDates[i][j] + scwDateDisablingError[1]); }
                            scwPass = false;
                        }
                    }
                }

                if (scwPass && (scwDisabledDates[i][0] > scwDisabledDates[i][1])) { scwDisabledDates[i].reverse(); }
            }
            else
            { if (scwShowRangeDisablingError) { alert(scwDateDisablingError[0] + scwDisabledDates[i] + scwDateDisablingError[1]); } }
        }
    }

    // Calculate the number of months that the entered (or
    // defaulted) month is after the start of the allowed
    // date range.

    scwMonthSum = 12 * (scwSeedDate.getFullYear() - scwBaseYear) + scwSeedDate.getMonth();

    scwID('scwYears').options.selectedIndex = Math.floor(scwMonthSum / 12);
    scwID('scwMonths').options.selectedIndex = (scwMonthSum % 12);

    // Check whether or not dragging is allowed and display drag handle if necessary

    scwID('scwDrag').style.display = (scwAllowDrag) ? '' : 'none';

    // Display the month

    scwShowMonth(0);

    // Position the calendar box

    // The object sniffing for Opera allows for the fact that Opera
    // is the only major browser that correctly reports the position
    // of an element in a scrollable DIV.  This is because IE and
    // Firefox omit the DIV from the offsetParent tree.

    scwTargetEle = scwEle;
    scwTarget2Ele = scwEle2;

    var offsetTop = parseInt(scwEle.offsetTop, 10) + parseInt(scwEle.offsetHeight, 10),
             offsetLeft = parseInt(scwEle.offsetLeft, 10);

    if (!window.opera) {
        while (scwEle.tagName != 'BODY' && scwEle.tagName != 'HTML') {
            offsetTop -= parseInt(scwEle.scrollTop, 10);
            offsetLeft -= parseInt(scwEle.scrollLeft, 10);
            scwEle = scwEle.parentNode;
        }
        scwEle = scwTargetEle;
    }

    do {
        scwEle = scwEle.offsetParent;
        offsetTop += parseInt(scwEle.offsetTop, 10);
        offsetLeft += parseInt(scwEle.offsetLeft, 10);
    }
    while (scwEle.tagName != 'BODY' && scwEle.tagName != 'HTML');

    if (scwAutoPosition) {
        var scwWidth = parseInt(scwID('scw').offsetWidth, 10),
                  scwHeight = parseInt(scwID('scw').offsetHeight, 10),
                  scwWindowLeft =
                     (document.body && document.body.scrollLeft)
                          ? document.body.scrollLeft                  //DOM compliant
                          : (document.documentElement && document.documentElement.scrollLeft)
                              ? document.documentElement.scrollLeft   //IE6+ standards compliant
                              : 0,                                    //Failed
                  scwWindowWidth =
                      (typeof (innerWidth) == 'number')
                          ? innerWidth                                //DOM compliant
                          : (document.documentElement && document.documentElement.clientWidth)
                              ? document.documentElement.clientWidth  //IE6+ standards compliant
                              : (document.body && document.body.clientWidth)
                                  ? document.body.clientWidth         //IE non-compliant
                                  : 0,                                //Failed
                  scwWindowTop =
                      (document.body && document.body.scrollTop)
                          ? document.body.scrollTop                   //DOM compliant
                          : (document.documentElement && document.documentElement.scrollTop)
                              ? document.documentElement.scrollTop    //IE6+ standards compliant
                              : 0,                                    //Failed
                  scwWindowHeight =
                      (typeof (innerHeight) == 'number')
                          ? innerHeight                               //DOM compliant
                          : (document.documentElement && document.documentElement.clientHeight)
                              ? document.documentElement.clientHeight //IE6+ standards compliant
                              : (document.body && document.body.clientHeight)
                                  ? document.body.clientHeight        //IE non-compliant
                                  : 0;                                //Failed

        offsetLeft -= (offsetLeft - scwWidth + parseInt(scwTargetEle.offsetWidth, 10) >= scwWindowLeft &&
                             offsetLeft + scwWidth > scwWindowLeft + scwWindowWidth
                            ) ? (scwWidth - parseInt(scwTargetEle.offsetWidth, 10)) : 0;

        offsetTop -= (offsetTop - scwHeight - parseInt(scwTargetEle.offsetHeight, 10) >= scwWindowTop &&
                            offsetTop + scwHeight > scwWindowTop + scwWindowHeight
                           ) ? (scwHeight + parseInt(scwTargetEle.offsetHeight, 10)) : 0;
    }

    scwID('scw').style.position = 'absolute';
    scwID('scw').style.top = '67px';
    scwID('scw').style.left = '0px';
    
    scwID('scwIframe').style.position = 'absolute';
    scwID('scwIframe').style.top = '67px';
    scwID('scwIframe').style.left = '0px';
    
    scwID('scwIframe').style.width = (scwID('scw').offsetWidth - (scwID('scwIE') ? 2 : 4)) + 'px';
    scwID('scwIframe').style.height = (scwID('scw').offsetHeight - (scwID('scwIE') ? 2 : 4)) + 'px';
    scwID('scwIframe').style.visibility = 'inherit';

    // Show it on the page
    scwID('scw').style.visibility = 'inherit';
};

function scwHide() {
    if (scwID('scw'))
    {
    	scwID('scw').style.visibility = 'hidden';
    	scwID('scwIframe').style.visibility = 'hidden';
	if (typeof scwNextAction != 'undefined' && scwNextAction != null) {
	   scwNextActionReturn = scwNextAction();
           // Explicit null set to prevent closure causing memory leak
           scwNextAction = null;
        }
    }
};

function scwCancel(scwEvt) {
    if (scwClickToHide) { scwHide(); }
    scwStopPropagation(scwEvt);
};

function scwStopPropagation(scwEvt) {
    if (scwEvt.stopPropagation)
    { scwEvt.stopPropagation(); }     // Capture phase
    else { scwEvt.cancelBubble = true; }   // Bubbling phase
};

function scwBeginDrag(event) {
    var elementToDrag = scwID('scw');

    var deltaX = event.clientX,
             deltaY = event.clientY,
             offsetEle = elementToDrag;

    do {
        deltaX -= parseInt(offsetEle.offsetLeft, 10);
        deltaY -= parseInt(offsetEle.offsetTop, 10);
        offsetEle = offsetEle.offsetParent;
    }
    while (offsetEle.tagName != 'BODY' &&
                offsetEle.tagName != 'HTML');

    if (document.addEventListener) {
        document.addEventListener('mousemove', moveHandler, true);        // Capture phase
        document.addEventListener('mouseup', upHandler, true);        // Capture phase
    }
    else {
        elementToDrag.attachEvent('onmousemove', moveHandler); // Bubbling phase
        elementToDrag.attachEvent('onmouseup', upHandler);   // Bubbling phase
        elementToDrag.setCapture();
    }

    scwStopPropagation(event);

    function moveHandler(scwEvt) {
        if (!scwEvt) scwEvt = window.event;

        elementToDrag.style.left = (scwEvt.clientX - deltaX) + 'px';
        elementToDrag.style.top = (scwEvt.clientY - deltaY) + 'px';

        scwID('scwIframe').style.left = (scwEvt.clientX - deltaX) + 'px';
        scwID('scwIframe').style.top = (scwEvt.clientY - deltaY) + 'px';

        scwStopPropagation(scwEvt);
    };

    function upHandler(scwEvt) {
        if (!scwEvt) scwEvt = window.event;

        if (document.removeEventListener) {
            document.removeEventListener('mousemove', moveHandler, true);     // Capture phase
            document.removeEventListener('mouseup', upHandler, true);     // Capture phase
        }
        else {
            elementToDrag.detachEvent('onmouseup', upHandler);   // Bubbling phase
            elementToDrag.detachEvent('onmousemove', moveHandler); // Bubbling phase
            elementToDrag.releaseCapture();
        }

        scwStopPropagation(scwEvt);
    };
};

function scwShowMonth(scwBias) {// Set the selectable Month and Year
    // May be called: from the left and right arrows
    //                  (shift month -1 and +1 respectively)
    //                from the month selection list
    //                from the year selection list
    //                from the showCal routine
    //                  (which initiates the display).

    var scwShowDate = new Date(Date.parse(new Date().toDateString())),
             scwStartDate = new Date();

    // Set the time to the middle of the day so that the handful of
    // regions that have daylight saving shifts that change the day
    // of the month (i.e. turn the clock back at midnight or forward
    // at 23:00) do not mess up the date display in the calendar.

    scwShowDate.setHours(12);

    scwSelYears = scwID('scwYears');
    scwSelMonths = scwID('scwMonths');

    if (scwSelYears.options.selectedIndex > -1) {
        scwMonthSum = 12 * (scwSelYears.options.selectedIndex) + scwBias;
        if (scwSelMonths.options.selectedIndex > -1) { scwMonthSum += scwSelMonths.options.selectedIndex; }
    }
    else
    { if (scwSelMonths.options.selectedIndex > -1) { scwMonthSum += scwSelMonths.options.selectedIndex; } }

    scwShowDate.setFullYear(scwBaseYear + Math.floor(scwMonthSum / 12), (scwMonthSum % 12), 1);

    // If the Week numbers are displayed, shift the week day names to the right.
    scwID('scwWeek_').style.display = (scwWeekNumberDisplay) ? '' : 'none';

    // Opera has a bug with setting the selected index.
    // It requires the following work-around to force SELECTs to display correctly.
    if (window.opera) {
        scwID('scwMonths').style.display = 'inherit';
        scwID('scwYears').style.display = 'inherit';
    }

    // Set the drop down boxes.
    scwTemp = (12 * parseInt((scwShowDate.getFullYear() - scwBaseYear), 10)) + parseInt(scwShowDate.getMonth(), 10);

    if (scwTemp > -1 && scwTemp < (12 * scwDropDownYears)) {
        scwSelYears.options.selectedIndex = Math.floor(scwMonthSum / 12);
        scwSelMonths.options.selectedIndex = (scwMonthSum % 12);

        scwCurMonth = scwShowDate.getMonth();

        scwShowDate.setDate((((scwShowDate.
                                    getDay() - scwWeekStart) < 0) ? -6 : 1) +
                                 scwWeekStart - scwShowDate.getDay());

        // This statement moved by Michael Cerveny to make version 3.55
        var scwCompareDateValue = new Date(scwShowDate.getFullYear(),
                                                scwShowDate.getMonth(),
                                                scwShowDate.getDate()).valueOf();

        scwStartDate = new Date(scwShowDate);

        if ((new Date(scwBaseYear + scwDropDownYears, 0, 0)) > scwDateNow &&
                 (new Date(scwBaseYear, 0, 0)) < scwDateNow) {
            var scwNow = scwID('scwNow');

            function scwNowOutput() { scwSetOutput(scwDateNow); };

            if (scwDisabledDates.length == 0) {
                if (scwActiveToday && scwParmActiveToday) {
                    scwNow.onclick = scwNowOutput;
                    scwNow.className = 'scwNow';

                    if (scwID('scwIE')) {
                        scwNow.onmouseover = scwChangeClass;
                        scwNow.onmouseout = scwChangeClass;
                    }

                }
                else {
                    scwNow.onclick = null;
                    scwNow.className = 'scwNowDisabled';

                    if (scwID('scwIE')) {
                        scwNow.onmouseover = null;
                        scwNow.onmouseout = null;
                    }

                    if (document.addEventListener)
                    { scwNow.addEventListener('click', scwStopPropagation, false); }
                    else { scwNow.attachEvent('onclick', scwStopPropagation); }
                }
            }
            else {
                for (var k = 0; k < scwDisabledDates.length; k++) {
                    if (!scwActiveToday || !scwParmActiveToday ||
                             ((typeof scwDisabledDates[k] == 'object') &&
                                 (((scwDisabledDates[k].constructor == Date) &&
                                   scwDateNow.valueOf() == scwDisabledDates[k].valueOf()
                                  ) ||
                                  ((scwDisabledDates[k].constructor == Array) &&
                                   scwDateNow.valueOf() >= scwDisabledDates[k][0].valueOf() &&
                                   scwDateNow.valueOf() <= scwDisabledDates[k][1].valueOf()
                                  )
                                 )
                             )
                            ) {
                        scwNow.onclick = null;
                        scwNow.className = 'scwNowDisabled';

                        if (scwID('scwIE')) {
                            scwNow.onmouseover = null;
                            scwNow.onmouseout = null;
                        }

                        if (document.addEventListener)
                        { scwNow.addEventListener('click', scwStopPropagation, false); }
                        else { scwNow.attachEvent('onclick', scwStopPropagation); }
                        break;
                    }
                    else {
                        scwNow.onclick = scwNowOutput;
                        scwNow.className = 'scwNow';

                        if (scwID('scwIE')) {
                            scwNow.onmouseover = scwChangeClass;
                            scwNow.onmouseout = scwChangeClass;
                        }
                    }
                }
            }
        }

        function scwSetOutput(scwOutputDate) {
            if (typeof scwTargetEle.value == 'undefined')
            { scwTriggerEle.scwTextNode.replaceData(0, scwTriggerEle.scwLength, scwOutputDate.scwFormat(scwDateOutputFormat)); }
            else {
                scwTargetEle.value = scwOutputDate.scwFormat(scwDateOutputFormat);
                if (scwTarget2Ele != null) {
                    var targetDate = scwTarget2Ele.value;
                    var endDate = new Date(scwOutputDate.getTime() + 86400000);
                    scwTarget2Ele.value = endDate.scwFormat(scwDateOutputFormat);
                }
            }
            scwHide();
        };

        function scwCellOutput(scwEvt) {
            var scwEle = scwEventTrigger(scwEvt),
                     scwOutputDate = new Date(scwStartDate);

            if (scwEle.nodeType == 3) scwEle = scwEle.parentNode;

            scwOutputDate.setDate(scwStartDate.getDate() + parseInt(scwEle.id.substr(8), 10));

            scwSetOutput(scwOutputDate);
        };

        function scwChangeClass(scwEvt) {
            var scwEle = scwEventTrigger(scwEvt);

            if (scwEle.nodeType == 3) { scwEle = scwEle.parentNode; }

            switch (scwEle.className) {
                case 'scwCells':
                    scwEle.className = 'scwCellsHover';
                    break;
                case 'scwCellsHover':
                    scwEle.className = 'scwCells';
                    break;
                case 'scwCellsExMonth':
                    scwEle.className = 'scwCellsExMonthHover';
                    break;
                case 'scwCellsExMonthHover':
                    scwEle.className = 'scwCellsExMonth';
                    break;
                case 'scwCellsWeekend':
                    scwEle.className = 'scwCellsWeekendHover';
                    break;
                case 'scwCellsWeekendHover':
                    scwEle.className = 'scwCellsWeekend';
                    break;
                case 'scwNow':
                    scwEle.className = 'scwNowHover';
                    break;
                case 'scwNowHover':
                    scwEle.className = 'scwNow';
                    break;
                case 'scwInputDate':
                    scwEle.className = 'scwInputDateHover';
                    break;
                case 'scwInputDateHover':
                    scwEle.className = 'scwInputDate';
            }

            return true;
        }

        function scwEventTrigger(scwEvt) {
            if (!scwEvt) { scwEvt = event; }
            return scwEvt.target || scwEvt.srcElement;
        };

        function scwWeekNumber(scwInDate) {// The base day in the week of the input date
            var scwInDateWeekBase = new Date(scwInDate);

            scwInDateWeekBase.setDate(scwInDateWeekBase.getDate()
                                            - scwInDateWeekBase.getDay()
                                            + scwWeekNumberBaseDay
                                            + ((scwInDate.getDay() >
                                                scwWeekNumberBaseDay) ? 7 : 0));

            // The first Base Day in the year
            var scwFirstBaseDay = new Date(scwInDateWeekBase.getFullYear(), 0, 1);

            scwFirstBaseDay.setDate(scwFirstBaseDay.getDate()
                                            - scwFirstBaseDay.getDay()
                                            + scwWeekNumberBaseDay
                                        );

            if (scwFirstBaseDay < new Date(scwInDateWeekBase.getFullYear(), 0, 1))
            { scwFirstBaseDay.setDate(scwFirstBaseDay.getDate() + 7); }

            // Start of Week 01
            var scwStartWeekOne = new Date(scwFirstBaseDay
                                                - scwWeekNumberBaseDay
                                                + scwInDate.getDay());

            if (scwStartWeekOne > scwFirstBaseDay)
            { scwStartWeekOne.setDate(scwStartWeekOne.getDate() - 7); }

            // Subtract the date of the current week from the date of the
            // first week of the year to get the number of weeks in
            // milliseconds.  Divide by the number of milliseconds
            // in a week then round to no decimals in order to remove
            // the effect of daylight saving.  Add one to make the first
            // week, week 1.  Place a string zero on the front so that
            // week numbers are zero filled.

            var scwWeekNo = '0' + (Math.round((scwInDateWeekBase - scwFirstBaseDay) / 604800000, 0) + 1);

            // Return the last two characters in the week number string

            return scwWeekNo.substring(scwWeekNo.length - 2, scwWeekNo.length);
        };

        // Treewalk to display the dates.
        // I tried to use getElementsByName but IE refused to cooperate
        // so I resorted to this method which works for all tested
        // browsers.

        var scwCells = scwID('scwCells');

        for (i = 0; i < scwCells.childNodes.length; i++) {
            var scwRows = scwCells.childNodes[i];
            if (scwRows.nodeType == 1 && scwRows.tagName == 'TR') {
                if (scwWeekNumberDisplay) {//Calculate the week number using scwShowDate
                    scwTmpEl = scwRows.childNodes[0];
                    scwTmpEl.innerHTML = scwWeekNumber(scwShowDate);
                    scwTmpEl.style.borderColor =
                             (scwTmpEl.currentStyle)
                                ? scwTmpEl.currentStyle['backgroundColor']
                                : (window.getComputedStyle)
                                    ? document.defaultView.getComputedStyle(scwTmpEl, null).getPropertyValue('background-color')
                                    : '';
                    scwTmpEl.style.display = '';
                }
                else
                { scwRows.childNodes[0].style.display = 'none'; }

                for (j = 1; j < scwRows.childNodes.length; j++) {
                    var scwCols = scwRows.childNodes[j];
                    if (scwCols.nodeType == 1 && scwCols.tagName == 'TD') {
                        scwRows.childNodes[j].innerHTML =
                                scwShowDate.getDate();
                        var scwCell = scwRows.childNodes[j],
                                 scwDisabled =
                                    ((scwOutOfRangeDisable &&
                                        (scwShowDate <
                                            (new Date(scwBaseYear, 0, 1,
                                                      scwShowDate.getHours()))
                                         ||
                                         scwShowDate >
                                            (new Date(scwBaseYear +
                                                      scwDropDownYears, 0, 0,
                                                      scwShowDate.getHours()))
                                        )
                                     ) ||
                                     (scwOutOfMonthDisable &&
                                        (scwShowDate <
                                            (new Date(scwShowDate.getFullYear(),
                                                      scwCurMonth, 1,
                                                      scwShowDate.getHours()))
                                         ||
                                         scwShowDate >
                                            (new Date(scwShowDate.getFullYear(),
                                                      scwCurMonth + 1, 0,
                                                      scwShowDate.getHours()))
                                        )
                                     )
                                    ) ? true : false;

                        scwCell.style.visibility =
                                (scwOutOfMonthHide &&
                                    (scwShowDate <
                                        (new Date(scwShowDate.getFullYear(),
                                                  scwCurMonth, 1,
                                                  scwShowDate.getHours()))
                                     ||
                                     scwShowDate >
                                        (new Date(scwShowDate.getFullYear(),
                                                  scwCurMonth + 1, 0,
                                                  scwShowDate.getHours()))
                                    )
                                ) ? 'hidden' : 'inherit';

                        for (var k = 0; k < scwDisabledDates.length; k++) {
                            if ((typeof scwDisabledDates[k] == 'object') &&
                                     (scwDisabledDates[k].constructor == Date) &&
                                     scwCompareDateValue == scwDisabledDates[k].valueOf()
                                    )
                            { scwDisabled = true; }
                            else {
                                if ((typeof scwDisabledDates[k] == 'object') &&
                                         (scwDisabledDates[k].constructor == Array) &&
                                         scwCompareDateValue >= scwDisabledDates[k][0].valueOf() &&
                                         scwCompareDateValue <= scwDisabledDates[k][1].valueOf()
                                        )
                                { scwDisabled = true; }
                            }
                        }

                        if (scwDisabled ||
                                 !scwEnabledDay[j - 1 + (7 * ((i * scwCells.childNodes.length) / 6))] ||
                                 !scwPassEnabledDay[(j - 1 + (7 * (i * scwCells.childNodes.length / 6))) % 7]
                                ) {
                            scwRows.childNodes[j].onclick = null;

                            if (scwID('scwIE')) {
                                scwRows.childNodes[j].onmouseover = null;
                                scwRows.childNodes[j].onmouseout = null;
                            }

                            scwCell.className =
                                    (scwShowDate.getMonth() != scwCurMonth)
                                        ? 'scwCellsExMonthDisabled'
                                        : (scwBlnFullInputDate &&
                                          scwShowDate.toDateString() ==
                                          scwSeedDate.toDateString())
                                            ? 'scwInputDateDisabled'
                                            : (scwShowDate.getDay() % 6 == 0)
                                                ? 'scwCellsWeekendDisabled'
                                                : 'scwCellsDisabled';

                            scwCell.style.borderColor =
                                     (scwFormatTodayCell && scwShowDate.toDateString() == scwDateNow.toDateString())
                                        ? scwTodayCellBorderColour
                                        : (scwCell.currentStyle)
                                            ? scwCell.currentStyle['backgroundColor']
                                            : (window.getComputedStyle)
                                                ? document.defaultView.getComputedStyle(scwCell, null).getPropertyValue('background-color')
                                                : '';
                        }
                        else {
                            scwRows.childNodes[j].onclick = scwCellOutput;

                            if (scwID('scwIE')) {
                                scwRows.childNodes[j].onmouseover = scwChangeClass;
                                scwRows.childNodes[j].onmouseout = scwChangeClass;
                            }

                            scwCell.className =
                                     (scwShowDate.getMonth() != scwCurMonth)
                                        ? 'scwCellsExMonth'
                                        : (scwBlnFullInputDate &&
                                          scwShowDate.toDateString() ==
                                          scwSeedDate.toDateString())
                                            ? 'scwInputDate'
                                            : (scwShowDate.getDay() % 6 == 0)
                                                ? 'scwCellsWeekend'
                                                : 'scwCells';

                            scwCell.style.borderColor =
                                     (scwFormatTodayCell && scwShowDate.toDateString() == scwDateNow.toDateString())
                                        ? scwTodayCellBorderColour
                                        : (scwCell.currentStyle)
                                            ? scwCell.currentStyle['backgroundColor']
                                            : (window.getComputedStyle)
                                                ? document.defaultView.getComputedStyle(scwCell, null).getPropertyValue('background-color')
                                                : '';
                        }

                        scwShowDate.setDate(scwShowDate.getDate() + 1);
                        scwCompareDateValue = new Date(scwShowDate.getFullYear(), scwShowDate.getMonth(), scwShowDate.getDate()).valueOf();
                    }
                }
            }
        }
    }

    // Opera has a bug with setting the selected index.
    // It requires the following work-around to force SELECTs to display correctly.
    // Also Opera's poor dynamic rendering prior to 9.5 requires
    // the visibility to be reset to prevent garbage in the calendar
    // when the displayed month is changed.

    if (window.opera) {
        scwID('scwMonths').style.display = 'inline';
        scwID('scwYears').style.display = 'inline';
        scwID('scw').style.visibility = 'hidden';
        scwID('scw').style.visibility = 'inherit';
    }
};

// *************************
//  End of Function Library
// *************************
// ***************************
// Start of Calendar structure
// ***************************



// ***************************
//  End of Calendar structure
// ***************************

    document.writeln("<!--[if IE]><div id='scwIE'></div><![endif]-->");
    document.writeln("<!--[if lt IE 7]><div id='scwIElt7'></div><![endif]-->");
    
    if (!IsIE6())
    {
    	
    }
    
// ****************************************
// Start of document level event definition
// ****************************************

if (document.addEventListener)
{ document.addEventListener('click', scwHide, false); }
else { document.attachEvent('onclick', scwHide); }

// ****************************************
//  End of document level event definition
// ****************************************
// ************************************
//  End of Simple Calendar Widget Code
// ************************************

// variablen
d21BookingPage = '';
d21BookingLink = 'http://www.dirs21.de/dirs21_book/hotel-zum-test/default.aspx';
d21SubmitForm = true;
d21NewWindow = false;
d21AdjustHeight = true;
d21EZ = true;
d21DZ = true;
d21MZ = false;
d21AP = false;
d21ST = false;
d21FW = false;
d21RoomCount = 4;
d21Cities = null;

var d21FontSize = "12px";

var d21FrameWidth = "800px";
var d21FrameHeight = "400px";

var d21HeaderVisible = true;
var d21PackageLinkVisible = true;
var d21RateCodeVisible = false;
var d21CalIcon = 'https://www.dirs21.de/DIRS21_QuickBook/icon_cal.gif';

var d21Language = "de-DE";

var d21StrBookOnline, d21StrCheckIn, d21StrCheckOut, d21StrEZ, d21StrDZ, d21StrMZ, d21StrAP, d21StrST, d21StrFW, d21StrSearch, d21StrPackages, d21StrErrorMsg, d21StrCity, d21StrAny, d21StrRateCode;
var d21StrBookOnline_de, d21StrCheckIn_de, d21StrCheckOut_de, d21StrEZ_de, d21StrDZ_de, d21StrMZ_de, d21StrAP_de, d21StrST_de, d21StrFW_de, d21StrSearch_de, d21StrPackages_de, d21StrErrorMsg_de, d21StrCity_de, d21StrAny_de, d21StrRateCode_de;
var d21StrBookOnline_en, d21StrCheckIn_en, d21StrCheckOut_en, d21StrEZ_en, d21StrDZ_en, d21StrMZ_en, d21StrAP_en, d21StrST_en, d21StrFW_en, d21StrSearch_en, d21StrPackages_en, d21StrErrorMsg_en, d21StrCity_en, d21StrAny_en, d21StrRateCode_en;
var d21StrBookOnline_fr, d21StrCheckIn_fr, d21StrCheckOut_fr, d21StrEZ_fr, d21StrDZ_fr, d21StrMZ_fr, d21StrAP_fr, d21StrST_fr, d21StrFW_fr, d21StrSearch_fr, d21StrPackages_fr, d21StrErrorMsg_fr, d21StrCity_fr, d21StrAny_fr, d21StrRateCode_fr;
var d21StrBookOnline_it, d21StrCheckIn_it, d21StrCheckOut_it, d21StrEZ_it, d21StrDZ_it, d21StrMZ_it, d21StrAP_it, d21StrST_it, d21StrFW_it, d21StrSearch_it, d21StrPackages_it, d21StrErrorMsg_it, d21StrCity_it, d21StrAny_it, d21StrRateCode_it;
var d21StrBookOnline_es, d21StrCheckIn_es, d21StrCheckOut_es, d21StrEZ_es, d21StrDZ_es, d21StrMZ_es, d21StrAP_es, d21StrST_es, d21StrFW_es, d21StrSearch_es, d21StrPackages_es, d21StrErrorMsg_es, d21StrCity_es, d21StrAny_es, d21StrRateCode_es;
var d21StrBookOnline_nl, d21StrCheckIn_nl, d21StrCheckOut_nl, d21StrEZ_nl, d21StrDZ_nl, d21StrMZ_nl, d21StrAP_nl, d21StrST_nl, d21StrFW_nl, d21StrSearch_nl, d21StrPackages_nl, d21StrErrorMsg_nl, d21StrCity_nl, d21StrAny_nl, d21StrRateCode_nl;

function d21SetLanguage() {
    if (d21Language == 'en-US') {
        scwDateDisplayFormat = 'dd.MM.yyyyy';
        scwDateOutputFormat = scwDateDisplayFormat;

        if (d21StrBookOnline_en == null) d21StrBookOnline = ''
        else d21StrBookOnline = d21StrBookOnline_en;
        if (d21StrCheckIn_en == null) d21StrCheckIn = 'Arrival'
        else d21StrCheckIn = d21StrCheckIn_en;
        if (d21StrCheckOut_en == null) d21StrCheckOut = 'Depart'
        else d21StrCheckOut = d21StrCheckOut_en;
        if (d21StrEZ_en == null) d21StrEZ = 'Single room'
        else d21StrEZ = d21StrEZ_en;
        if (d21StrDZ_en == null) d21StrDZ = 'Double room'
        else d21StrDZ = d21StrDZ_en;
        if (d21StrMZ_en == null) d21StrMZ = 'Multi-bed room'
        else d21StrMZ = d21StrMZ_en;
        if (d21StrAP_en == null) d21StrAP = 'Apartment'
        else d21StrAP = d21StrAP_en;
        if (d21StrST_en == null) d21StrST = 'Suite'
        else d21StrST = d21StrST_en;
        if (d21StrFW_en == null) d21StrFW = 'Lodge'
        else d21StrFW = d21StrFW_en;
        if (d21StrSearch_en == null) d21StrSearch = 'Check Availabity'
        else d21StrSearch = d21StrSearch_en;
        if (d21StrPackages_en == null) d21StrPackages = ''
        else d21StrPackages = d21StrPackages_en;
        if (d21StrErrorMsg_en == null) d21StrErrorMsg = 'Please verify variable \'d21BookingPage\'!'
        else d21StrErrorMsg = d21StrErrorMsg_en;
        if (d21StrCity_en == null) d21StrCity = 'City'
        else d21StrCity = d21StrCity_en;
        if (d21StrAny_en == null) d21StrAny = 'any'
        else d21StrAny = d21StrAny_en;
        if (d21StrRateCode_en == null) d21StrRateCode = 'Rate Code'
        else d21StrRateCode = d21StrRateCode_en;
    }
    else if (d21Language == 'fr-FR') {
        scwDateDisplayFormat = 'dd.MM.yyyy';
        scwDateOutputFormat = scwDateDisplayFormat;

        if (d21StrBookOnline_fr == null) d21StrBookOnline = 'R&eacute;servez en ligne'
        else d21StrBookOnline = d21StrBookOnline_fr;
        if (d21StrCheckIn_fr == null) d21StrCheckIn = 'Arriv&eacute;e'
        else d21StrCheckIn = d21StrCheckIn_fr;
        if (d21StrCheckOut_fr == null) d21StrCheckOut = 'D&eacute;part'
        else d21StrCheckOut = d21StrCheckOut_fr;
        if (d21StrEZ_fr == null) d21StrEZ = 'Chambre simple'
        else d21StrEZ = d21StrEZ_fr;
        if (d21StrDZ_fr == null) d21StrDZ = 'Chambre double'
        else d21StrDZ = d21StrDZ_fr;
        if (d21StrMZ_fr == null) d21StrMZ = 'Chambre multiple'
        else d21StrMZ = d21StrMZ_fr;
        if (d21StrAP_fr == null) d21StrAP = 'Appartement'
        else d21StrAP = d21StrAP_fr;
        if (d21StrST_fr == null) d21StrST = 'Suite'
        else d21StrST = d21StrST_fr;
        if (d21StrFW_fr == null) d21StrFW = 'Appartement de vacances'
        else d21StrFW = d21StrFW_fr;
        if (d21StrSearch_fr == null) d21StrSearch = 'recherche'
        else d21StrSearch = d21StrSearch_fr;
        if (d21StrPackages_fr == null) d21StrPackages = 'nos offres'
        else d21StrPackages = d21StrPackages_fr;
        if (d21StrErrorMsg_fr == null) d21StrErrorMsg = 'Veuillez v&eacute;rifier la variable \'d21BookingPage\'!'
        else d21StrErrorMsg = d21StrErrorMsg_fr;
        if (d21StrCity_fr == null) d21StrCity = 'Place'
        else d21StrCity = d21StrCity_fr;
        if (d21StrAny_fr == null) d21StrAny = 'toute'
        else d21StrAny = d21StrAny_fr;
        if (d21StrRateCode_fr == null) d21StrRateCode = 'Rate Code'
        else d21StrRateCode = d21StrRateCode_fr;
    }
    else if (d21Language == 'nl-NL') {
        scwDateDisplayFormat = 'dd.MM.yyyy';
        scwDateOutputFormat = scwDateDisplayFormat;

        if (d21StrBookOnline_nl == null) d21StrBookOnline = 'Reserveer online'
        else d21StrBookOnline = d21StrBookOnline_nl;
        if (d21StrCheckIn_nl == null) d21StrCheckIn = 'Aankomst'
        else d21StrCheckIn = d21StrCheckIn_nl;
        if (d21StrCheckOut_nl == null) d21StrCheckOut = 'Vertrek'
        else d21StrCheckOut = d21StrCheckOut_nl;
        if (d21StrEZ_nl == null) d21StrEZ = 'Eenpersoonskamer'
        else d21StrEZ = d21StrEZ_nl;
        if (d21StrDZ_nl == null) d21StrDZ = 'Tweepersoonskamer'
        else d21StrDZ = d21StrDZ_nl;
        if (d21StrMZ_nl == null) d21StrMZ = 'Gedeelde kamers'
        else d21StrMZ = d21StrMZ_nl;
        if (d21StrAP_nl == null) d21StrAP = 'Appartement'
        else d21StrAP = d21StrAP_nl;
        if (d21StrST_nl == null) d21StrST = 'Suite'
        else d21StrST = d21StrST_nl;
        if (d21StrFW_nl == null) d21StrFW = 'Vakantiehuis'
        else d21StrFW = d21StrFW_nl;
        if (d21StrSearch_nl == null) d21StrSearch = 'Zoek'
        else d21StrSearch = d21StrSearch_nl;
        if (d21StrPackages_nl == null) d21StrPackages = 'Onze Arrangementen'
        else d21StrPackages = d21StrPackages_nl;
        if (d21StrErrorMsg_nl == null) d21StrErrorMsg = 'Controleert variabele \'d21BookingPage\'!'
        else d21StrErrorMsg = d21StrErrorMsg_nl;
        if (d21StrCity_nl == null) d21StrCity = 'City'
        else d21StrCity = d21StrCity_nl;
        if (d21StrAny_nl == null) d21StrAny = 'alles'
        else d21StrAny = d21StrAny_nl;
        if (d21StrRateCode_nl == null) d21StrRateCode = 'Rate Code'
        else d21StrRateCode = d21StrRateCode_nl;
    }
    else if (d21Language == 'it-IT') {
    	scwDateDisplayFormat = 'dd.MM.yyyy';
        scwDateOutputFormat = scwDateDisplayFormat;

        if (d21StrBookOnline_it == null) d21StrBookOnline = 'Prenota online'
        else d21StrBookOnline = d21StrBookOnline_it;
        if (d21StrCheckIn_it == null) d21StrCheckIn = 'Arrivo'
        else d21StrCheckIn = d21StrCheckIn_it;
        if (d21StrCheckOut_it == null) d21StrCheckOut = 'Partenza'
        else d21StrCheckOut = d21StrCheckOut_it;
        if (d21StrEZ_it == null) d21StrEZ = 'Camera singola'
        else d21StrEZ = d21StrEZ_it;
        if (d21StrDZ_it == null) d21StrDZ = 'Camera doppia'
        else d21StrDZ = d21StrDZ_it;
        if (d21StrMZ_it == null) d21StrMZ = 'Camera multipla'
        else d21StrMZ = d21StrMZ_it;
        if (d21StrAP_it == null) d21StrAP = 'Appartamento'
        else d21StrAP = d21StrAP_it;
        if (d21StrST_it == null) d21StrST = 'Suite'
        else d21StrST = d21StrST_it;
        if (d21StrFW_it == null) d21StrFW = 'Appartamento per vacanze'
        else d21StrFW = d21StrFW_it;
        if (d21StrSearch_it == null) d21StrSearch = 'ricerca'
        else d21StrSearch = d21StrSearch_it;
        if (d21StrPackages_it == null) d21StrPackages = 'nostra offerta'
        else d21StrPackages = d21StrPackages_it;
        if (d21StrErrorMsg_it == null) d21StrErrorMsg = 'Verificare la variabile \'d21BookingPage\'!'
        else d21StrErrorMsg = d21StrErrorMsg_it;
        if (d21StrCity_it == null) d21StrCity = 'Luogo'
        else d21StrCity = d21StrCity_it;
        if (d21StrAny_it == null) d21StrAny = 'qualsiasi'
        else d21StrAny = d21StrAny_it;
        if (d21StrRateCode_it == null) d21StrRateCode = 'Rate Code'
        else d21StrRateCode = d21StrRateCode_it;
    }
    else if (d21Language == 'es-ES') {
        scwDateDisplayFormat = 'dd.MM.yyyy';
        scwDateOutputFormat = scwDateDisplayFormat;

        if (d21StrBookOnline_es == null) d21StrBookOnline = 'Reservar online'
        else d21StrBookOnline = d21StrBookOnline_es;
        if (d21StrCheckIn_es == null) d21StrCheckIn = 'Llegada'
        else d21StrCheckIn = d21StrCheckIn_es;
        if (d21StrCheckOut_es == null) d21StrCheckOut = 'Partida'
        else d21StrCheckOut = d21StrCheckOut_es;
        if (d21StrEZ_es == null) d21StrEZ = 'Habitaci&oacute;n individual'
        else d21StrEZ = d21StrEZ_es;
        if (d21StrDZ_es == null) d21StrDZ = 'Habitaci&oacute;n doble'
        else d21StrDZ = d21StrDZ_es;
        if (d21StrMZ_es == null) d21StrMZ = 'Habitaci&oacute;n m&uacute;ltiple'
        else d21StrMZ = d21StrMZ_es;
        if (d21StrAP_es == null) d21StrAP = 'Apartamento'
        else d21StrAP = d21StrAP_es;
        if (d21StrST_es == null) d21StrST = 'Suite'
        else d21StrST = d21StrST_es;
        if (d21StrFW_es == null) d21StrFW = 'Piso de vacaciones'
        else d21StrFW = d21StrFW_es;
        if (d21StrSearch_es == null) d21StrSearch = 'Buscar'
        else d21StrSearch = d21StrSearch_es;
        if (d21StrPackages_es == null) d21StrPackages = 'El forfait'
        else d21StrPackages = d21StrPackages_es;
        if (d21StrErrorMsg_es == null) d21StrErrorMsg = 'Por favor revisar la variable \'d21BookingPage\'!'
        else d21StrErrorMsg = d21StrErrorMsg_es;
        if (d21StrCity_es == null) d21StrCity = 'Lugar'
        else d21StrCity = d21StrCity_es;
        if (d21StrAny_es == null) d21StrAny = 'Cualquier'
        else d21StrAny = d21StrAny_es;
        if (d21StrRateCode_es == null) d21StrRateCode = 'Ratencode'
        else d21StrRateCode = d21StrRateCode_es;
    }
    else {
        scwDateDisplayFormat = 'dd.MM.yyyy';
        scwDateOutputFormat = scwDateDisplayFormat;

        if (d21StrBookOnline_de == null) d21StrBookOnline = ''
        else d21StrBookOnline = d21StrBookOnline_de;
        if (d21StrCheckIn_de == null) d21StrCheckIn = 'Anreise'
        else d21StrCheckIn = d21StrCheckIn_de;
        if (d21StrCheckOut_de == null) d21StrCheckOut = 'Abreise'
        else d21StrCheckOut = d21StrCheckOut_de;
        if (d21StrEZ_de == null) d21StrEZ = 'Einzelzimmer'
        else d21StrEZ = d21StrEZ_de;
        if (d21StrDZ_de == null) d21StrDZ = 'Doppelzimmer'
        else d21StrDZ = d21StrDZ_de;
        if (d21StrMZ_de == null) d21StrMZ = 'Mehrbettzimmer'
        else d21StrMZ = d21StrMZ_de;
        if (d21StrAP_de == null) d21StrAP = 'Apartment'
        else d21StrAP = d21StrAP_de;
        if (d21StrST_de == null) d21StrST = 'Suite'
        else d21StrST = d21StrST_de;
        if (d21StrFW_de == null) d21StrFW = 'Ferienwohnung'
        else d21StrFW = d21StrFW_de;
        if (d21StrSearch_de == null) d21StrSearch = 'Anfrage'
        else d21StrSearch = d21StrSearch_de;
        if (d21StrPackages_de == null) d21StrPackages = 'Pauschalen'
        else d21StrPackages = d21StrPackages_de;
        if (d21StrErrorMsg_de == null) d21StrErrorMsg = 'd21BookingPage nicht korrekt gesetzt, bitte ueberpruefen Sie den automatisch generierten code.\nBitte generieren Sie den Code erneut falls das Problem bestehen gleibt.'
        else d21StrErrorMsg = d21StrErrorMsg_de;
        if (d21StrCity_de == null) d21StrCity = 'Ort'
        else d21StrCity = d21StrCity_de;
        if (d21StrAny_de == null) d21StrAny = 'beliebig'
        else d21StrAny = d21StrAny_de;
        if (d21StrRateCode_de == null) d21StrRateCode = 'Ratencode'
        else d21StrRateCode = d21StrRateCode_de;
    }
}

// URL PARAMS
function d21Gup(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    return (results == null) ? '' : results[1].replace('!', '?').replace('$', '&').replace(',', '&');
}

function d21QuickInit() {
    var txtRateCode = document.getElementById('txtD21RateCode');
    var txtArrival = document.getElementById('txtD21Arrival');
    var txtDeparture = document.getElementById('txtD21Departure');
    var ddCount = document.getElementById('ddD21Count');
    var ddRoom = document.getElementById('ddD21Room');

    var strArrival = d21Gup('anreise');
    var strDeparture = d21Gup('abreise');
    var ez = d21Gup('ez');
    var dz = d21Gup('dz');
    var mz = d21Gup('mz');
    var ap = d21Gup('ap');
    var st = d21Gup('st');
    var fw = d21Gup('fw');

    var count = 1;
    var roomSelectedIndex = 0;
    if (ez != '') { count = new Number(ez); ez = "ez=" + ez; roomSelectedIndex = 0; }
    if (dz != '') { count = new Number(dz); dz = "dz=" + dz; roomSelectedIndex = 1; }
    if (mz != '') { count = new Number(mz); mz = "mz=" + mz; roomSelectedIndex = 2; }
    if (ap != '') { count = new Number(ap); ap = "ap=" + ap; roomSelectedIndex = 3; }
    if (st != '') { count = new Number(st); st = "st=" + st; roomSelectedIndex = 4; }
    if (fw != '') { count = new Number(fw); fw = "fw=" + fw; roomSelectedIndex = 5; }

    //var s = "Anreise: " + strArrival + "Textbox: " + txtArrival.value;
    if (txtArrival.value == null || txtArrival.value == '') {
        txtArrival.value = strArrival != '' ? strArrival : new Date().scwFormat(scwDateOutputFormat);
    }
    //s += " Anreise: " + strArrival + "Textbox: " + txtArrival.value;
    //console.log(s);

    if (txtDeparture.value == null || txtDeparture.value == '') {
        var endDate = new Date(new Date().getTime() + 86400000);
        txtDeparture.value = strDeparture != '' ? strDeparture : endDate.scwFormat(scwDateOutputFormat);
    }
    ddCount.selectedIndex = count - 1;
    ddRoom.selectedIndex = roomSelectedIndex;
}

function d21IFrameLoad() {
    var d21IFrame = document.getElementById('d21IFrame');
	var s = "";
	
    if (d21IFrame != null) {
        var parentSite = '';
        var isFrameSet = top.location.href != window.location.href;
        if (!isFrameSet && d21AdjustHeight) {
            parentSite = 'parentSite=' + window.location.href.replace(/\?/g, '!').replace(/&/g, ',') + '&';
        }

		//s = " ParentSite: " + parentSite;
		//console.log(s);

        var src = d21BookingLink.indexOf('?') == -1 ? d21BookingLink + '?' : d21BookingLink + '&';
        //s += " SRC: " + src;
	    //console.log(s);
		var query = window.location.search.replace('?', '');
        //s += " Query: " + query;
        //console.log(s);
    
        if (query.indexOf('sprache') == -1) {
            if (d21Language == 'en-US') src = src + 'sprache=en&';
            else if (d21Language == 'fr-FR') src = src + 'sprache=fr&';
            else if (d21Language == 'it-IT') src = src + 'sprache=it&';
            else if (d21Language == 'nl-NL') src = src + 'sprache=nl&';
            else if (d21Language == 'es-ES') src = src + 'sprache=es&';
            else if (d21Language == 'nl-NL') src = src + 'sprache=nl&';
        }
	
		src = src + parentSite + query;
		//s += " SRC1: " + src;
		//console.log(s);
        
        if (d21Gup('intergastra') == 'tablebooker') {
            src = 'http://beta.dirs21.de/Channels/hotel-zum-test/restaurant.aspx';
        }        
        if (d21Gup('intergastra') == 'true') {
            src = 'http://beta.dirs21.de/Channels/zum-baeren/default.aspx?' + parentSite;
        }        
        d21IFrame.src = src;
    }
}

function d21Init() {
    if (d21AdjustHeight && document.getElementById('d21IFrame') != null) {
        setInterval(d21IFrameHeight, 200);
    }
}

function d21IFrameHeight() {
    var d21IFrame = document.getElementById('d21IFrame');
    if (d21IFrame != null && window.location.hash.toString().indexOf('#height_') != -1) {
        document.getElementById('d21IFrame').style.height = window.location.hash.toString().replace(/#height_/, '') + 'px';
    }
}

function d21Search(mode) {
    var frm = document.getElementById('frmD21Quick');
    var txtRateCode = document.getElementById('txtD21RateCode');
    var txtArrival = document.getElementById('txtD21Arrival');
    var txtDeparture = document.getElementById('txtD21Departure');
    var ddCity = document.getElementById('ddD21City');
    var ddCount = document.getElementById('ddD21Count');
    var ddRoom = document.getElementById('ddD21Room');
    var strRateCode = ''
    if (txtRateCode != null) 
    {
        strRateCode = txtRateCode.value;
    }
    else 
    {
        strRateCode = '';
    }
    var strArrival = txtArrival.value;
    var strDeparture = txtDeparture.value;

    if (!d21NewWindow && d21BookingPage == '') { alert(d21StrErrorMsg); }
    else if (d21NewWindow && d21BookingLink == '') { alert(d21StrErrorMsg); }

        var sprache = 'de';
    
    if (d21Language == 'de-DE') sprache = 'de'
    else if (d21Language == 'en-US') sprache = 'en'
    else if (d21Language == 'fr-FR') sprache = 'fr'
    else if (d21Language == 'it-IT') sprache = 'it'
    else if (d21Language == 'es-ES') sprache = 'es'
    else if (d21Language == 'nl-NL') sprache = 'nl'

    frm.action = (d21NewWindow) ? d21BookingLink : d21BookingPage;
    frm.action = frm.action.indexOf('?') == -1 ? frm.action + '?' : frm.action + '&';
    var strRoom = ddRoom.options[ddRoom.selectedIndex].value;
    var strCity = (ddCity) ? ddCity.options[ddCity.selectedIndex].value : '';
	
    if (mode == 'package') {
        frm.action = frm.action + "mode=package" + "&sprache=" + sprache;
    }
    else {

        frm.action = frm.action + strRoom + "=" + (ddCount.selectedIndex + 1) + "&sprache=" + sprache + "&anreise=" + strArrival + '&abreise=' + strDeparture;
		
		if (strCity != '' && strCity != '-1')
		{
			frm.action += "&ort=" + strCity;
        }
        if (strRateCode != '' && strRateCode != '-1') 
        {
            frm.action += "&ratecode=" + strRateCode;
        }
    }

    if (d21NewWindow) frm.target = '_d21book';
    
    if (d21SubmitForm && frm.action.indexOf('.htm') == -1 && frm.action.indexOf('.shtm') == -1 && frm.action.indexOf('erver.dll?') == -1) frm.submit();
    else window.location.href = frm.action;
}

// buchungsbox
function d21QuickBookingBox() {
    d21SetLanguage();

    var protocol = window.location.protocol;
    //var protocol = 'http:';
    document.write('\n' + '<link href="' + protocol +'//www.event.filderhotel.de/css/styles.css" type="text/css" rel="Stylesheet" />' + '\n');
    //document.write('\n' + '<link href="styles.css" type="text/css" rel="Stylesheet" />' + '\n');

    var str = '';
    str += '<form id="frmD21Quick" method="POST">' + '\n';
    str += '    <div style="position: relative;">' + '\n';
    str += '        <div class="d21Container">' + '\n';
    str += '            <div class="d21CheckHeader d21Header">' + d21StrBookOnline + '<\/div>' + '\n';
    str += '	        <div class="d21Row1">' + '\n';
    str += '	            <div class="d21CheckIn">&nbsp;&nbsp;' + d21StrCheckIn + ':<\/div>' + '\n';
    str += '	            <div class="d21Col"><input id="txtD21Arrival" onclick="scwShow(this,document.getElementById(\'txtD21Departure\'),event);" \/><\/div>' + '\n';
    str += '	            <div class="d21Cal"><img src="' + d21CalIcon + '" alt="' + d21StrCheckIn + '" onclick="scwShow(document.getElementById(\'txtD21Arrival\'),document.getElementById(\'txtD21Departure\'),event);" \/><\/div>' + '\n';
    str += '            <\/div>' + '\n';
    str += '	        <div class="d21Row2">' + '\n';
    str += '	            <div class="d21CheckOut">&nbsp;&nbsp;' + d21StrCheckOut + ':<\/div>' + '\n';
    str += '	            <div class="d21Col"><input id="txtD21Departure" onclick="scwShow(this,null,event);" \/><\/div>' + '\n';
    str += '	            <div class="d21Cal"><img src="' + d21CalIcon + '" alt="' + d21StrCheckOut + '" onclick="scwShow(document.getElementById(\'txtD21Departure\'),null,event);" \/><\/div>' + '\n';
    str += '            <\/div>' + '\n';
    if (d21Cities && d21Cities.length > 0)
	{
	    str += '	        <div class="d21Cities">' + '\n';
	    str += '	            <div class="d21CityLabel">&nbsp;&nbsp;' + d21StrCity + ':<\/div>' + '\n';
	    str += '	            <div class="d21Col">' + '\n';
	    str += '	            	<select id="ddD21City">' + '\n';
	    str += '						<option value="-1">' + d21StrAny + '<\/option>' + '\n';
		for (var i = 0; i < d21Cities.length; i++)
		{
		    var args = d21Cities[i].split('#');
		    var text = args[0];
		    var value = args.length == 2 ? args[1] : text;
		    str += '						<option value="' + value + '">' + text + '<\/option>' + '\n';
		}
		str += '	            	<\/select>' + '\n';
		str += '				<\/div>' + '\n';
		str += '			<\/div>' + '\n';
	}
    str += '            <div class="d21Row3">' + '\n';
    str += '                <div class="d21Count">' + '\n';
    str += '                    <select id="ddD21Count">' + '\n';
    for (var i = 1; i <= d21RoomCount; i++)
    {
        str += '		   <option value="' + i + '">' + i + '<\/option>' + '\n';
    }
    str += '                    <\/select>' + '\n';
    str += '                <\/div>' + '\n';
    str += '                <div class="d21Row4">' + '\n';
    str += '                    <select id="ddD21Room">' + '\n';
    if (d21EZ) str += '<option value="ez">' + d21StrEZ + '<\/option>' + '\n'; 
    if (d21DZ) str += '<option value="dz">' + d21StrDZ + '<\/option>' + '\n';
    if (d21MZ) str += '<option value="mz">' + d21StrMZ + '<\/option>' + '\n';
    if (d21AP) str += '<option value="ap">' + d21StrAP + '<\/option>' + '\n';
    if (d21ST) str += '<option value="st">' + d21StrST + '<\/option>' + '\n';
    if (d21FW) str += '<option value="fw">' + d21StrFW + '<\/option>' + '\n';
    str += '                    <\/select>' + '\n';
    str += '                <\/div>' + '\n';
    str += '              <\/div>' + '\n';
    if (d21RateCodeVisible) str += '	        <div class="d21Row1">' + '\n';
    if (d21RateCodeVisible) str += '	            <div class="d21RateCode">&nbsp;&nbsp;' + d21StrRateCode + ':<\/div>' + '\n';
    if (d21RateCodeVisible) str += '	            <div class="d21Col"><input id="txtD21RateCode" \/><\/div>' + '\n';
    if (d21RateCodeVisible) str += '            <\/div>' + '\n';
    str += '              <div class="d21Row5"><input id="btD21Search" type="button" value="' + d21StrSearch + '" onclick="d21Search(\'rooms\')"\/><\/div>' + '\n';
    if (d21PackageLinkVisible) str += '<div class="d21Row6"><a id="hlD21PackageLink" href="javascript: d21Search(\'package\')">' + d21StrPackages + '</a><\/div>' + '\n';
    str += '          <\/div>' + '\n';

    document.write(str);
    writeCal();
    document.write('</div></form>' + '\n')
    d21QuickInit();
}

// iframe
function d21BookingFrame() {
    var str = '';
    if (d21Gup('intergastra') == 'true') d21FrameWidth = '700px';
    var noScroll = d21AdjustHeight ? " scrolling=\"no\" " : "";
    str += '<iframe id="d21IFrame" name="d21IFrame" frameborder="0" width="' + d21FrameWidth + '" height="' + d21FrameHeight + '"' + noScroll + '></iframe>' + '\n';
    document.write(str);
    d21IFrameLoad(); 
    d21Init();
}

function writeCal()
{
    document.write(
 "<div style='position: absolute; top: 0px; left: 0px;'><iframe class='scw' " + (scwID('scwIElt7') ? "src='/scwblank.html '" : '') + 
         "id='scwIframe' name='scwIframe' frameborder='0'>" +
 "</iframe>" +
 "<table id='scw' class='scw'>" +
   "<tr class='scw'>" +
     "<td class='scw'>" + 
       "<table class='scwHead' id='scwHead' width='100%' " + 
                "cellspacing='0' cellpadding='0'>" + 
        "<tr id='scwDrag' style='display:none;'>" + 
            "<td colspan='4' class='scwDrag' " + 
                "onmousedown='scwBeginDrag(event);'>" + 
                "<span id='scwDragText'></span>" + 
            "</td>" + 
        "</tr>" + 
        "<tr class='scwHead' >" + 
             "<td class='scwHead'>" + 
                "<input class='scwHead' id='scwHeadLeft' type='button' value='<' " + 
                        "onclick='scwShowMonth(-1);'  /></td>" + 
             "<td class='scwHead'>" + 
                "<select id='scwMonths' class='scwHead' " + 
                        "onchange='scwShowMonth(0);'>" + 
                "</select>" + 
             "</td>" + 
             "<td class='scwHead'>" + 
                "<select id='scwYears' class='scwHead' " + 
                        "onchange='scwShowMonth(0);'>" + 
                "</select>" + 
             "</td>" + 
             "<td class='scwHead'>" + 
                "<input class='scwHead' id='scwHeadRight' type='button' value='>' " + 
                        "onclick='scwShowMonth(1);' /></td>" + 
            "</tr>" + 
          "</table>" + 
        "</td>" + 
      "</tr>" + 
      "<tr class='scw'>" + 
        "<td class='scw'>" + 
          "<table class='scwCells' align='center'>" +
            "<thead>" + 
              "<tr><td class='scwWeekNumberHead' id='scwWeek_' ></td>");

    for (i = 0; i < 7; i++) {
        document.write(
                  "<td class='scwWeek' id='scwWeekInit" + i + "'></td>");
    }

    document.write("</tr>" + 
            "</thead>" + 
            "<tbody id='scwCells' onClick='scwStopPropagation(event);'>");

    for (i = 0; i < 6; i++) {
        document.write(
                "<tr>" + 
                  "<td class='scwWeekNo' id='scwWeek_" + i + "'></td>");
        for (j = 0; j < 7; j++) {
            document.write(
                    "<td class='scwCells' id='scwCell_" + (j + (i * 7)) +
                    "'></td>");
        }

        document.write(
                "</tr>");
    }

    document.write(
            "</tbody>" + 
            "<tfoot>" + 
              "<tr id='scwFoot'>" + 
                "<td colspan='8' style='padding:0px;'>" + 
                  "<table width='100%'>" + 
                    "<tr>" + 
                      "<td id='scwClear' class='scwClear'>" + 
                        "<input type='button' id='scwClearButton' class='scwClear' onclick='scwTargetEle.value = \"\";scwHide();' />" + 
                      "</td>" + 
                      "<td class='scwNow' id='scwNow'></td>" + 
                    "</tr>" + 
                  "</table>" + 
                "</td>" + 
              "</tr>" + 
            "</tfoot>" + 
          "</table>" + 
        "</td>" + 
      "</tr>" + 
    "</table></div>");

    if (document.addEventListener) {
        scwID('scw').addEventListener('click', scwCancel, false);
        scwID('scwHeadLeft').addEventListener('click', scwStopPropagation, false);
        scwID('scwMonths').addEventListener('click', scwStopPropagation, false);
        scwID('scwMonths').addEventListener('change', scwStopPropagation, false);
        scwID('scwYears').addEventListener('click', scwStopPropagation, false);
        scwID('scwYears').addEventListener('change', scwStopPropagation, false);
        scwID('scwHeadRight').addEventListener('click', scwStopPropagation, false);
    }
    else {
        scwID('scw').attachEvent('onclick', scwCancel);
        scwID('scwHeadLeft').attachEvent('onclick', scwStopPropagation);
        scwID('scwMonths').attachEvent('onclick', scwStopPropagation);
        scwID('scwMonths').attachEvent('onchange', scwStopPropagation);
        scwID('scwYears').attachEvent('onclick', scwStopPropagation);
        scwID('scwYears').attachEvent('onchange', scwStopPropagation);
        scwID('scwHeadRight').attachEvent('onclick', scwStopPropagation);
    }
}

function IsIE6()
{
    return getInternetExplorerVersion() == 6;
    
    // return (document.all && (!window.opera && !window.XMLHttpRequest) || (navigator.appVersion.indexOf("MSIE 7.") != -1));
}

function IsIE()
{
    var version = getInternetExplorerVersion();
    
    return (version > 5);
}

function getInternetExplorerVersion()
{
    var rv = -1;
    
    if (navigator.appName == 'Microsoft Internet Explorer')
    {
    	var ua = navigator.userAgent;
    	var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    	if (re.exec(ua) != null)
    	{
    	    rv = parseFloat(RegExp.$1);
    	}
    	
    	return rv;
    }
}