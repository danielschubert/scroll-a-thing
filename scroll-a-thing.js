jQuery(document).ready(function($) {
  /* sets the initial height of the html body */
	init_dh = $("html,body").height();
});


$(window).scroll(function() {

	/* Set the element which is supposed to scroll */
	var elem_to_scroll = "nav";

	if ($( window ).width() > 400){
		var hh = $('header').height(),
			st = $("html,body").scrollTop(),
			max_scroll = init_dh - $(elem_to_scroll).height(),
			value;

		if ( st > hh){
			if (st >= max_scroll) {
				value = max_scroll - hh + "px";}
			else {
				value = (st - hh) + "px" }
		}else {value = "0px"}

		$(elem_to_scroll).css("margin-top", value);
	}
});
