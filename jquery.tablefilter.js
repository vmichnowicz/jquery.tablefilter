/*
 * Table Filter - jQuery Plugin
 * Very simple jQuery table filter plugin
 *
 * Documentation at: https://github.com/vmichnowicz/jquery.tablefilter
 * Examples at: http://www.vmichnowicz.com/
 *
 * Copyright (c) 2011 Victor Michnowicz
 *
 * Version: 1.0 (2011/9/27)
 * Requires: jQuery
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

(function($) {
	$.fn.tableFilter = function(options) {

		// Loop through each selected element
		return this.each(function() {

			// Find all table rows inside the table body
			var rows = $(this).find('tbody tr');

			// Run the table filter
			function filter() {
				// All non-blank filters will get placed here
				var filters = new Object();

				// Loop through each filter
				$.each(options.filters, function(index, element) {
					// If this filter is not blank
					if ( $(element).val() !== '') {
						// Add to filters object
						filters[index] = element;
					}
				});

				// Loop through each table row
				$(rows).each(function() {
					var row = $(this);
					var filters_count_matched = 0; // Count of matched filters within each table row
					var filters_count = 0; // Count of all filters
					$(row).hide(); // Hide this current row

					// Loop through each filter
					$.each(filters, function(index, element) {
						var text = $.trim( $(row).find('.' + index).text().toUpperCase() ); // Text from the table we want to match against
						var filter = $.trim( $(element).val().toUpperCase() ); // User inputed filter text
						filters_count++;

						// If the user inputed text is found in this table cell
						if (text.indexOf(filter) >= 0) {
							filters_count_matched++; // Add +1 to our matched filters counter
						}
					});

					// If the number of filter matches is equal to the number of filters, show the row
					if (filters_count_matched == filters_count) {
						$(row).show();
					}
				});
			}

			// Loop through each filter input
			$.each(options.filters, function(index, element) {

				// Run filter function on page load
				filter();

				// Attach event handeler to each input
				$(element).live('change keyup', function() {
					filter();
				});
			});

		});
	}
})(jQuery);