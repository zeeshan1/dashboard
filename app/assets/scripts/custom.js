let dropdown = function() {
	'use strict';

	$('.dropdown').click(function(e){
		$(".dropdown-outer").addClass('hide');

		if($(this).children().hasClass("dropdown-outer")){			
			$(this).find(".dropdown-outer").toggleClass('hide');
		}
		e.preventDefault();		
	});

	$(document).click(function(e){
		var container = $('.dropdown')
		if(!container.is(e.target) && container.has(e.target).length == 0){
			$(".dropdown-outer").addClass('hide');
		}
	})
	$('.main-sidebar-nav-inner li').click(function(e){		
	})
}();

var sideBar = function(){
	$('li.has-child > a').click(function(e){
		if($(this).hasClass('has-sub')){
			$(this).parent().toggleClass('active');
			$(this).parent().children('ul').toggleClass('show')
		}			
		else if(!$('this').next('first-level').length){
			$(this).closest('li.has-child').removeClass('active')
			$(this).parent().children('ul').removeClass('show')
		}
		else{
			$(this).parent().addClass('active')
		}
	})

}();