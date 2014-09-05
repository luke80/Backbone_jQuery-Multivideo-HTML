var videoInit = function() {
	var protocol = window.location.href.split( '/' )[0],
		videoServiceURLs = ["hitbox.tv","twitch.tv","player.vimeo.com","www.youtube.com"],
		$allVideos = $("iframe[src^='"+protocol+"//"+videoServiceURLs.join("'], iframe[src^='"+protocol+"//")+"'], object, embed"),
		$fluidEl = $("figure")
	;
	console.log();
	$allVideos.each(function() {
	  $(this)
		// jQuery .data does not work on object/embed elements
		.attr('data-aspectRatio', this.height / this.width)
		.removeAttr('height')
		.removeAttr('width');
	});
	$(window).resize(function() {
	  var newWidth = $fluidEl.width();
	  $allVideos.each(function() {
		var $el = $(this);
		$el
			.width(newWidth)
			.height(newWidth * $el.attr('data-aspectRatio'));
	  });
	}).resize();
};
$(document).ready(function(){videoInit();});