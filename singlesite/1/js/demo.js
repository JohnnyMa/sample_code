
// this script is for the demo only; it can be removed

/**************************************
 * Frame Breaker
 * ThemeForest frame has side-effects on mobile devices
 **************************************/
 
if (jQuery.browser.mobile && top.location != self.location) {
	top.location = self.location;
}

/**************************************
 * Color Scheme Switcher
 * This is done before document ready to prevent default stylesheet specified
 * in <head> from showing if a different preset has been cookied.
 **************************************/

// Color Schemes
var color_schemes = {
	'light' : '#fff', // swatch color
	'dark' : '#333'
};
 
// Color Switcher Controls
function colorSwitcher() {

	// Switcher not already created...
	if (!jQuery('#color-switcher').length) {
		
		// Create Switcher Container (initially hidden)
		jQuery('body').append('<ul id="color-switcher" class="box hidden"></ul>');
		 
		// Populate Switcher Links
		jQuery.each(color_schemes, function(color_scheme, swatch_color) {
			jQuery('#color-switcher').append('<li><a href="#" data-color-scheme="' + color_scheme + '" style="background-color:' + swatch_color + '"></a></li>');
		});
		
	}
	
	// Don't show it on small screens, will cover content
	if (jQuery(window).width() > 1070) {
		jQuery('#color-switcher').show();
	} else {
		jQuery('#color-switcher').hide();	
	}

}

// Show 'Em
jQuery(document).ready(function($) {

	// on page load
	colorSwitcher();
	
	// if screen size changed, see if controls can now be shown
	$(window).resize(function() {
		colorSwitcher();
	});

});
 
/*
 * jQuery Cookie plugin
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
jQuery.cookie = function (key, value, options) {

    // key and at least value given, set cookie...
    if (arguments.length > 1 && String(value) !== "[object Object]") {
        options = jQuery.extend({}, options);

        if (value === null || value === undefined) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }

        value = String(value);

        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? value : encodeURIComponent(value),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
	
};

// Color scheme switcher function
function setColorScheme(color_scheme) {
	jQuery('#color-scheme').attr('href', 'css/color-schemes/' + color_scheme + '.css?rand=' + Math.floor(Math.random() * 999999)); /* cache bust */	
}

// Set previously selected color scheme on page load - cannot work locally
if (jQuery.cookie('color_scheme')) {
	setColorScheme(jQuery.cookie('color_scheme'));
}

// Change color scheme on click
jQuery(document).ready(function($) { 

	// new color scheme clicked
	$('#color-switcher a[data-color-scheme]').click(function(event) {

		// kill regular link action
		event.preventDefault();
		
		// which color scheme clicked?
		var color_scheme = $(this).attr('data-color-scheme');
		setColorScheme(color_scheme);		
		
		// cookie selected color for next page load
		$.cookie("color_scheme", color_scheme);
		
	});

});