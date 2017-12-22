/**
 * Table of contents plugin for jQuery.
 *
 * Provides the possibility to automatically generate a toc, i.e., a table
 * of contents for a given element. All headers, i.e. hx for x in {1,...,6}
 * will be extracted and dynamically extented by hashes. Clicking on a link
 * in the toc will smoothly scroll to the corresponding headline.
 *
 * The plugin offers sufficient customization options through a set of
 * optional parameters. See the comments in the code and the example for
 * further information.
 *
 * Author: Jakob Bossek <info@jakobbossek.de>
 * Version: v1.1
 */
(function($) {
	// FIXME: eventually add possibility to determine maximal depth
	// i.e., the maximal header level that is taken into account
	$.fn.toc = function(options) {
		// set default settings for plugin
		var settings = $.extend({
			// option to shorten headlines that are too long
			shorten: false,
			// strip them after
			stripAfter: 50,
			// speed of scrolling animation
			scrollSpeed: 400,
			// offset (useful if fixed positioned headers are used)
			scrollOffset: 0,
			// wrapper for toc (for example if displayed in bubble)
			//wrapWith: '<div class="toc_container"/>',
			// toc container (parent element of toc)
			//container: 'body'
			container: 'div#toc'
		}, options);

		// helper function for animation
		// FIXME: make plugin depend on smoothScroll plugin
		var scrollToHeadline = function(target) {
			// smoothly scroll to corresponding headline
			$("body, html").animate(
				{'scrollTop': $(target).offset().top - settings.scrollOffset},
				settings.scrollSpeed,
				function() {}
			);
		};

		// iterate over all selected elements
		return this.each(function(index1) {
			// select all headers in current container
			var toc_container = $(settings.container),
			    container = $(this),
				headlines = $(':header', container),
				toc = '<ul class="toc">';

			if (headlines.length == 0) {
				return;
			}

			// init healine level
			var level = headlines[0].tagName.replace(/[^\d]/g, "");
			headlines.each(function(index2, headline) {
				// extract headline level
				var cLevel = headline.tagName.replace(/[^\d]/g, "");
				// check whether it is necessary to start a nested list
				if (cLevel != level) {
					// making the following stuff is mandatory, because
					// there might be missing header levels
					// FIXME: make this better
					if (cLevel > level) {
						for (i = cLevel; i > level; i--) {
							toc += "<li><ul>";
						}
					} else {
						for (i = cLevel; i < level; i++) {
							toc += "</ul></li>";
						}
					}
					level = cLevel;
				}

				// build unique hash (for scrolling)
				var headlineId = 'hl_' + (index1 + 1) + (index2 + 1) + level;

				// build new TOC entry
				var currentHeadlineHTML = $(headline).html();
				var currentHeadlineText = $(headline).text();
				var shortenedHeadlineText = currentHeadlineText
				if (settings.strip) {
					shortenedHeadlineText = shortenedHeadlineText.substring(0, settings.stripAfter) + "...";
				}
				$(this).html('<a id="' + headlineId + '">' + currentHeadlineHTML);
				toc += '<li><a href="#' + headlineId + '" title="' + currentHeadlineText + '">' + shortenedHeadlineText + '</a></li>';
			});

			// finish list and append to parent element
			toc += '</ul>';
			toc_container.append($(toc));

			//$(".toc", toc_container).wrap(settings.wrapWith);

			// make the links scroll fine
			$("li a", $(".toc")).click(function(e) {
				// prevent link to behave as usual
				e.preventDefault();

				// extract destination
				var target = $(e.target).attr('href');
				scrollToHeadline(target);
			});

		});
	};
})(jQuery);
