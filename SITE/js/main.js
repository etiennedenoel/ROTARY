(function($){
	"use strict";

	var scroll = function(){
            $('html,body').animate({scrollTop:0}, 'slow');
            return false;
      };
      var scrollContact = function(){
            var id = $(this).attr("href");
            $('html, body').animate({scrollTop:$(id).offset().top}, 'slow');
            return false;
      };

      var focusMembre = function(){
            $(this).attr('class', 'membre overlay')
      }

	$(function() {
		$('.top').on('click', scroll);
            $('.contact').on('click', scrollContact);
            $('.membre').on('click', focusMembre);
	});
})(jQuery);
