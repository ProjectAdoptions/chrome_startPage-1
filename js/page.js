$(document).ready(function(){

var className='';

	$( ".img" ).hover(
	  function() {
	    $(this).css('transform','scale(1.1,1.1)');
	  }, 
	  function() {
	    $(this).css('transform','scale(1,1)');
	  }
	);


	$("a").on({
		click: function(){
			className = $(this).text();
			$(".menu-elem").children().hide();
			$("div").find("." + className).fadeIn("slow");
		}
	});
	
});

