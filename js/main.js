$(window).load(function(){
     $('.preloader').fadeOut('slow');
});
function toPersianDigits(str) {
	const persianDigits = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
	return str.toString().replace(/\d/g, d => persianDigits[d]);
}

/* =Main INIT Function
-------------------------------------------------------------- */
function initializeSite() {

	"use strict";

	//OUTLINE DIMENSION AND CENTER
	(function() {
	    function centerInit(){

			var sphereContent = $('.sphere'),
				sphereHeight = sphereContent.height(),
				parentHeight = $(window).height(),
				topMargin = (parentHeight - sphereHeight) / 2;

			sphereContent.css({
				"margin-top" : topMargin+"px"
			});

			var heroContent = $('.hero'),
				heroHeight = heroContent.height(),
				heroTopMargin = (parentHeight - heroHeight) / 2;

			heroContent.css({
				"margin-top" : heroTopMargin+"px"
			});

	    }

	    $(document).ready(centerInit);
		$(window).resize(centerInit);
	})();

	// Init effect 
	$('#scene').parallax();

};
/* END ------------------------------------------------------- */

/* =Document Ready Trigger
-------------------------------------------------------------- */
$(window).load(function(){

	initializeSite();
	(function() {
		setTimeout(function(){window.scrollTo(0,0);},0);
	})();

});
/* END ------------------------------------------------------- */


$('#countdown').countdown({
	date: "Jun 29 2025",
	render: function(data) {
		var el = $(this.el);
		el.empty()
			.append("<div>" + toPersianDigits(this.leadingZeros(data.days, 2)) + " <span>روز</span></div>")
			.append("<div>" + toPersianDigits(this.leadingZeros(data.hours, 2)) + " <span>ساعت</span></div>")
			.append("<div>" + toPersianDigits(this.leadingZeros(data.min, 2)) + " <span>دقیقه</span></div>")
			.append("<div>" + toPersianDigits(this.leadingZeros(data.sec, 2)) + " <span>ثانیه</span></div>");
	}
});