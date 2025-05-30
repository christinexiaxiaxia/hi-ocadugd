

// HOVER LINK

$('a').hover(function(){
	$('.link-ind').css({'opacity':0})
}, function(){
	$('.link-ind').css({'opacity':1})	
})


// CURSOR TEXT

$(document).mousemove(function(e){
	$('.main-title').css({'top': e.clientY + 15, 'left': e.clientX + 15})
})


// COLOUR SWITCH

$('.left').hover(function(){
	$(this).css({'background-color':'white','color':'black'});
	$('.left-link').css({'color':'black'});
	// $('::-webkit-scrollbar-thumb').css({'background':'white'});
}, function(){
	$(this).css({'background-color':'#999','color':'white'});
	$('.left-link').css({'color':'white'});
	// $('::-webkit-scrollbar-thumb').css({'background':'#999'});
})

$('.right').hover(function(){
	$(this).css({'background-color':'white','color':'black'});
	$('.right-link').css({'color':'black'});
	// $('::-webkit-scrollbar-thumb').css({'background':'white'});
}, function(){
	$(this).css({'background-color':'#999','color':'white'});
	$('.right-link').css({'color':'white'});
	// $('::-webkit-scrollbar-thumb').css({'background':'#999'});
})