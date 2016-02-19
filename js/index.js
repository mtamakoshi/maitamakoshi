$(document).ready(function() {
$('.carousel').carousel();
// //nav bar will be fixed on top after scrolling down below 110px from the top of webpage//

// 	$(window).scroll(function() {
// 	   var navHeight = $( window ).height() - 110;
// 			 if ($(window).scrollTop() > navHeight) {
// 				 $('nav').addClass('fixed');
// 			 }
// 			 else {
// 				 $('nav').removeClass('fixed');
// 			 }
// 		});
// // using waypoints plugin//

// $('.screenNi').waypoint(function(direction) {
// 	if(direction == 'down') {
// 	  $('.prf').addClass('animated fadeInLeft pimg');
//  	  $('.introduction').addClass('animated fadeInRight intro description vis');
//  	  $('#screen2 .inv').removeClass('inv');
// 	} else {
// 	  $('.prf').removeClass('animated fadeInLeft pimg');
// 	  $('.introduction').removeClass('animated fadeInRight intro description vis');
// 	  $('#screen2 .vis').addClass('inv');
// 	}
//    },{offset:'70%'});


//  $('.screenSan').waypoint(function(direction) {
//  	if(direction == 'down') {
//  	 $('.sites').addClass('animated slideInUp');
// 	 $('#screen3 .inv').removeClass('inv');
//   } else {
//   	 $('.sites').removeClass('animated slideInUp');
// 	 $('#screen3 .vis').addClass('inv');
//   }
//  },{offset:'70%'});

//  $('.screenYon').waypoint(function(direction) {
//  	if(direction == 'down') {
//  	  $('.icons').addClass('animated fadeInRight');
// 	  $('object').addClass('animated fadeInLeft');
// 	 $('#screen4 .inv').removeClass('inv');
//    } else {
//    	  $('.icons').removeClass('animated fadeInRight');
// 	  $('object').removeClass('animated fadeInLeft');
// 	  $('#screen4 .vis').addClass('inv');
//    }
//   },{offset:'70%'});


//  $('.screenGo').waypoint(function(direction) {
//    if(direction =='down') {
//  	 $('.contactIcons').addClass('animated swing');
//   } else {
//   	$('.contactIcons').removeClass('animated swing');
//   } 
// },{offset:'80%'});


});  //top

