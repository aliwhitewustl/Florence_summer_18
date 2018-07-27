$(document).ready(function(){   


console.log("test");






$(".imagetemplate").mouseenter(function(){
		$(this).animate({opacity:0}, 300 );
});

$(".imagetemplate").mouseleave(function(){
		$(this).fadeTo( "fast", 1 );
});





$("#gridiconpage").mouseenter(function(){
		$(this).fadeTo( "fast", 1.0 );
});
$("#gridiconpage").mouseleave(function(){
		$(this).fadeTo( "fast", .5 );
});


$("#timelineiconpage").mouseenter(function(){
		$(this).fadeTo( "fast", 1.0 );
});
$("#timelineiconpage").mouseleave(function(){
		$(this).fadeTo( "fast", .5 );
});


$("#worldiconpage").mouseenter(function(){
		$(this).fadeTo( "fast", 1.0 );
});
$("#worldiconpage").mouseleave(function(){
		$(this).fadeTo( "fast", .5 );
});




	});  


// $( "#sec10" ).mouseenter(function() {
//   $('.background').animate({opacity: 0}, 500 )
// });