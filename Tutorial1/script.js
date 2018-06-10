


$(document).ready(function(){          





// $(".box").click(function(){
// 		$(this).animate({
// 			height: "500px",
// 			width: "500px"
// 	}, 2000);


// $(".box").click(function(){
// 		$(this).animate({
// 			height: "500px",
// 			width: "500px"
// 	}, 2000);




// $("#title").mouseenter(function(){
// 		$(this).animate({
// 			opacity:.5
// 	}, 2000);



$("#title").mouseenter(function(){
		$(this).fadeTo( "slow", 0 );
		$("#title3").fadeTo("slow", 1);
});



$("#title3").mouseenter(function(){
		$(this).fadeTo( "slow", 0 );
		$("#title4").fadeTo("slow", 1);
		$("#title4").fadeTo("slow", 0);
		$("#title5").fadeTo("slow", 1);
		$("#title5").fadeTo("slow", 0);
		$(".lyricsandintro").fadeTo( "slow", 1);

});


// $("#title4").mouseenter(function(){
// 		$(this).fadeTo( "slow", 0 );
// 		$("#title5").fadeTo("slow", 1);
// });


// $("#title5").mouseenter(function(){
// 		$(this).fadeTo( "slow", 0 );
// 		$("#title6").fadeTo("slow", 1);
// });

// $("#title6").mouseenter(function(){
// 		$(this).fadeTo( "slow", 0 );
// 		$("#firsttwolines").fadeTo( "slow", 1);
// });


		// $(".lyricsandintro").fadeTo( "slow", 1);



});   






