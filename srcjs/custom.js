

$(document).ready(function(){

	$('.menu ul li a').click(function(){
		$('.logo-opening').addClass('active');
	});

	$('.menu ul li .home').click(function(){
		$('.logo-opening').removeClass('active');
		$('.page.work').removeClass('active');
	});

	$('.menu ul li .work').click(function(){
		console.log('active')
		$('.page.work').addClass('active');
	});


});

