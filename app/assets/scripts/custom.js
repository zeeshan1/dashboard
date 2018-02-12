
let dropdown = function() {
	'use strict';

	$('.dropdown').click(function(e){
		if($(this).children().hasClass("dropdown-outer")){
			if(!$(this).children().hasClass('hide')){
			}
			else{
				$(".dropdown-outer").addClass('hide');
				
			}			
		}
		if($(this).children().hasClass("dropdown-outer")){			
			$(this).find(".dropdown-outer").toggleClass('hide');
			
		}
		TweenMax.staggerFrom(".dropdown-outer", .15, {scaleY:.1,opacity:0, delay:0.02, ease:Back.easeOut, force3D:true});
		TweenMax.staggerTo(".dropdown-outer", 0.15, {scaleY:.1, opacity:0, ease:Back.easeOut});		

	});

	$(document).click(function(e){
		var container = $('.dropdown');
		var clicked = e.target;		
		if(!container.is(e.target) && container.has(e.target).length == 0 ){
			$(".dropdown-outer").addClass('hide');
		}
		else if( $(e.target).is('.dropdown, .dropdown-label, .dropdown-label-title, .dropdown *')){
			if(!$(".dropdown-outer").hasClass('hide')){
				$(".dropdown-outer").addClass('hide');
			}
			
		}	

	})	
}();
$('.dropdown-flags').click(function(event){
	event.stopPropagation();
})
$('#allSubsidiaries')

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

	});
	$('#sidebartoggler').click(function(){
		$('#sideBar').toggleClass('collapsed');
		$('#contenttArea').toggleClass('collapsedWidth');
		$('li.has-child > a').parent().removeClass('active');
		$('li.has-child > a').parent().children('ul').removeClass('show');	

	});
		$('.main-sidebar-nav-inner').on('mouseleave', function(){
		if($('#sideBar').hasClass('collapsed')){
				$('li.has-child > a').parent().children('ul').removeClass('show');
				$('li.has-child > a').parent().removeClass('active');
				}
			})
		
	

}();

