/*
	Vortex by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/

(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)',
		xxsmall: '(max-width: 360px)'
	});

	$(function() {

		var	$window = $(window),
			$header = $('#header'),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Tweaks/fixes.

			// Polyfill: Object fit.
				if (!skel.canUse('object-fit')) {

					$('.image[data-position]').each(function() {

						var $this = $(this),
							$img = $this.children('img');

						// Apply img as background.
							$this
								.css('background-image', 'url("' + $img.attr('src') + '")')
								.css('background-position', $this.data('position'))
								.css('background-size', 'cover')
								.css('background-repeat', 'no-repeat');

						// Hide img.
							$img
								.css('opacity', '0');

					});

				}

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Dropdowns.
			$('#nav > ul').dropotron({
				alignment: 'right',
				hideDelay: 350,
				baseZIndex: 100000
			});

		// Menu.
			$('<a href="#navPanel" class="navPanelToggle">Menu</a>')
				.appendTo($header);

			$(	'<div id="navPanel">' +
					'<nav>' +
						$('#nav') .navList() +
					'</nav>' +
					'<a href="#navPanel" class="close"></a>' +
				'</div>')
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'right'
					});

			if (skel.vars.os == 'wp'
			&&	skel.vars.osVersion < 10)
				$('#navPanel')
					.css('transition', 'none');

			// $(document).ready(function(){

			// 	$('.slick-banner').slick({
			// 		accessibility: false,
			// 		arrows: false,
			// 		autoplay: true,
			// 		fade: true
			// 	});

			// 	$('.slick-reviews').slick({
			// 		arrows: false,
			// 		autoplay: true,
			// 		autoplaySpeed: 5000,
			// 		dots: true
			// 	});

			// });

	});

})(jQuery);