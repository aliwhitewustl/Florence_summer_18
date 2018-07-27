$(document).ready(function(){   


console.log("test");







$("#timelineicon").mouseenter(function(){
		$(this).fadeTo( "fast", 1.0 );
});
$("#timelineicon").mouseleave(function(){
		$(this).fadeTo( "fast", .7 );
});


$("#worldicon").mouseenter(function(){
		$(this).fadeTo( "fast", 1.0 );
});
$("#worldicon").mouseleave(function(){
		$(this).fadeTo( "fast", .7 );
});





$("#gridiconT").mouseenter(function(){
		$(this).fadeTo( "fast", 1.0 );
});
$("#gridiconT").mouseleave(function(){
		$(this).fadeTo( "fast", .7 );
});


$("#timelineiconT").mouseenter(function(){
		$(this).fadeTo( "fast", 1.0 );
});
$("#timelineiconT").mouseleave(function(){
		$(this).fadeTo( "fast", .7 );
});


$("#worldiconT").mouseenter(function(){
		$(this).fadeTo( "fast", 1.0 );
});
$("#worldiconT").mouseleave(function(){
		$(this).fadeTo( "fast", .7 );
});





$("#gridiconM").mouseenter(function(){
		$(this).fadeTo( "fast", 1.0 );
});
$("#gridiconM").mouseleave(function(){
		$(this).fadeTo( "fast", .7 );
});


$("#timelineiconM").mouseenter(function(){
		$(this).fadeTo( "fast", 1.0 );
});
$("#timelineiconM").mouseleave(function(){
		$(this).fadeTo( "fast", .7 );
});










$("#scrap1").click(function(){
		$(this).animate({left: "-=150", top: "+=150"}, 1000);
});


$("#scrap2").click(function(){
		$(this).animate({left: "+=150", top: "+=150"}, 1000);
});

$("#scrap3").click(function(){
		$(this).animate({top: "+=150"}, 1000);
});


$("#scrap4").click(function(){
		$(this).animate({top: "-=150", left: "+=150"}, 1000);
});

$("#scrap5").click(function(){
		$(this).animate({top: "-=150",}, 1000);
});

$("#scrap6").click(function(){
		$(this).animate({top: "+=150",}, 1000);
});


// $( "#gridicon" ).mouseenter(function() {
//   $(this).animate({opacity: 1})
// });

// $( "#gridicon" ).mouseleave(function() {
//   $(this).animate({opacity: .7})
// });


// $( "#timelineicon" ).mouseenter(function() {
//   $(this).animate({opacity: 1}, 0 )
// });
// $( "#timelineicon" ).mouseleave(function() {
//   $(this).animate({opacity: .7}, 0 )
// });



// $( "#worldicon" ).mouseenter(function() {
//   $(this).animate({opacity: 1}, 0 )
// });
// $( "#worldicon" ).mouseleave(function() {
//   $(this).animate({opacity: .7}, 0 )
// });




$(".Rscroll").click(function(){
		$(".collagearea").animate({left: "-=700"}, 1000);
		$(".Lscroll").fadeTo( "fast", 1.0 );
});


$(".Lscroll").click(function(){
		$(".collagearea").animate({left: "+=700"}, 1000);
});










$(".vienna").mouseenter(function(){
		$(this).animate({width: "+=20"}, 100);
});

$(".vienna").mouseleave(function(){
		$(this).animate({width: "-=20"}, 100);
});



$(".venice").mouseenter(function(){
		$(this).animate({width: "+=20"}, 100);
});

$(".venice").mouseleave(function(){
		$(this).animate({width: "-=20"}, 100);
});



$(".bologna").mouseenter(function(){
		$(this).animate({width: "+=20"}, 100);
});

$(".bologna").mouseleave(function(){
		$(this).animate({width: "-=20"}, 100);
});



$(".prato").mouseenter(function(){
		$(this).animate({width: "+=20"}, 100);
});

$(".prato").mouseleave(function(){
		$(this).animate({width: "-=20"}, 100);
});




$(".florence").mouseenter(function(){
		$(this).animate({width: "+=20"}, 100);
});

$(".florence").mouseleave(function(){
		$(this).animate({width: "-=20"}, 100);
});




$(".viterbo").mouseenter(function(){
		$(this).animate({width: "+=20"}, 100);
});

$(".viterbo").mouseleave(function(){
		$(this).animate({width: "-=20"}, 100);
});




$(".rome").mouseenter(function(){
		$(this).animate({width: "+=20"}, 100);
});

$(".rome").mouseleave(function(){
		$(this).animate({width: "-=20"}, 100);
});



$(".naples").mouseenter(function(){
		$(this).animate({width: "+=20"}, 100);
});

$(".naples").mouseleave(function(){
		$(this).animate({width: "-=20"}, 100);
});



$(".amalficoast").mouseenter(function(){
		$(this).animate({width: "+=20"}, 100);
});

$(".amalficoast").mouseleave(function(){
		$(this).animate({width: "-=20"}, 100);
});




$(".madrid").mouseenter(function(){
		$(this).animate({width: "+=20"}, 100);
});

$(".madrid").mouseleave(function(){
		$(this).animate({width: "-=20"}, 100);
});



	});  