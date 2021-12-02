$(document).ready(function() {
					
	// VARIABLES
	
	
	// EVENT HANDLERS
	
	
	// FUNCTIONS
	// Start
	$("#button").on("click", function(event){
		event.preventDefault()
		$("#start").fadeOut(1000);
		$("#button").fadeOut(1000)
		$(".textbox").delay(1000).fadeIn(2000);
		$("#q1").delay(1000).fadeIn(2000);
		$("#formq1").delay(1000).fadeIn(2000);
		$("#buttonInput1").delay(1000).fadeIn(1000);
	})

	// First question
	$("#buttonInput1").on("click", function(event){
		event.preventDefault()
		$("#q1").fadeOut(1000);
		$("#formq1").fadeOut(1000);
		$("#buttonInput1").fadeOut(1000);
			var input = $("#q1input").val()
	    	console.log(input)
	    	$("#q1Output").append(input);
		$("#q2").delay(1000).fadeIn(2000);
		$("#formq2").delay(1000).fadeIn(2000);
		$("#buttonInput2").delay(1000).fadeIn(1000);
	})

	// 2 question
	$("#buttonInput2").on("click", function(event){
		event.preventDefault()
		$("#q2").fadeOut(1000);
		$("#formq2").fadeOut(1000);
		$("#buttonInput2").fadeOut(1000);
			var input = $("#q2input").val()
	    	console.log(input)
	    	$("#q2Output").append(input);
		$("#q3").delay(1000).fadeIn(2000);
		$("#formq3").delay(1000).fadeIn(2000);
		$("#buttonInput3").delay(1000).fadeIn(1000);
	})

	// 3 question
	$("#buttonInput3").on("click", function(event){
		event.preventDefault()
		$("#q3").fadeOut(1000);
		$("#formq3").fadeOut(1000);
		$("#buttonInput3").fadeOut(1000);
			var input = $("#q3input").val()
	    	console.log(input)
	    	$("#q3Output").append(input);
		$("#q4").delay(1000).fadeIn(2000);
		$("#formq4").delay(1000).fadeIn(2000);
		$("#buttonInput4").delay(1000).fadeIn(1000);
	})

	// 4 question
	$("#buttonInput4").on("click", function(event){
		event.preventDefault()
		$("#q4").fadeOut(1000);
		$("#formq4").fadeOut(1000);
		$("#buttonInput4").fadeOut(1000);
			var input = $("#q4input").val()
	    	console.log(input)
	    	$("#q4Output").append(input);
		$("#q5").delay(1000).fadeIn(2000);
		$("#formq5").delay(1000).fadeIn(2000);
		$("#buttonInput5").delay(1000).fadeIn(1000);
	})

	// 5 question
	$("#buttonInput5").on("click", function(event){
		event.preventDefault()
		$("#q5").fadeOut(1000);
		$("#formq5").fadeOut(1000);
		$("#buttonInput5").fadeOut(1000);
			var input = $("#q5input").val()
	    	console.log(input)
	    	$("#q5Output").append(input);
		$("#q6").delay(1000).fadeIn(2000);
		$("#formq6").delay(1000).fadeIn(2000);
		$("#buttonInput6").delay(1000).fadeIn(1000);
	})

	// 6 question
	$("#buttonInput6").on("click", function(event){
		event.preventDefault()
		$("#q6").fadeOut(1000);
		$("#formq6").fadeOut(1000);
		$("#buttonInput6").fadeOut(1000);
			var input = $("#q6input").val()
	    	console.log(input)
	    	$("#q6Output").append(input);
		$("#q7").delay(1000).fadeIn(2000);
		$("#formq7").delay(1000).fadeIn(2000);
		$("#buttonInput7").delay(1000).fadeIn(1000);
	})

	// 7 question
	$("#buttonInput7").on("click", function(event){
		event.preventDefault()
		$("#q7").fadeOut(1000);
		$("#formq7").fadeOut(1000);
		$("#buttonInput7").fadeOut(1000);
			var input = $("#q71input").val()
	    	console.log(input)
	    	$("#q7Output").append(input);
		$("#q8").delay(1000).fadeIn(2000);
		$("#formq8").delay(1000).fadeIn(2000);
		$("#buttonInput8").delay(1000).fadeIn(1000);
	})

	// 8 question
	$("#buttonInput8").on("click", function(event){
		event.preventDefault()
		$("#q8").fadeOut(1000);
		$("#formq8").fadeOut(1000);
		$("#buttonInput8").fadeOut(1000);
			var input = $("#q8input").val()
	    	console.log(input)
	    	$("#q8Output").append(input);
		$("#q9").delay(1000).fadeIn(2000);
		$("#formq9").delay(1000).fadeIn(2000);
		$("#buttonInput9").delay(1000).fadeIn(1000);
	})

	// 9 question
	$("#buttonInput9").on("click", function(event){
		event.preventDefault()
		$("#q9").fadeOut(1000);
		$("#formq9").fadeOut(1000);
		$("#buttonInput9").fadeOut(1000);
			var input = $("#q9input").val()
	    	console.log(input)
	    	$("#q9Output").append(input);
		$("#q10").delay(1000).fadeIn(2000);
		$("#formq10").delay(1000).fadeIn(2000);
		$("#buttonInput10").delay(1000).fadeIn(1000);
	})

	// 10 question
	$("#buttonInput10").on("click", function(event){
		event.preventDefault()
		$("#q10").fadeOut(1000);
		$("#formq10").fadeOut(1000);
		$("#buttonInput10").fadeOut(1000);
			var input = $("#q10input").val()
	    	console.log(input)
	    	$("#q10Output").append(input);
		$("#q11").delay(1000).fadeIn(2000);
		$("#formq11").delay(1000).fadeIn(2000);
		$("#buttonInput11").delay(1000).fadeIn(1000);
	})

	// 11 question
	$("#buttonInput11").on("click", function(event){
		event.preventDefault()
		$("#q11").fadeOut(1000);
		$("#formq11").fadeOut(1000);
		$("#buttonInput11").fadeOut(1000);
			var input = $("#q11input").val()
	    	console.log(input)
	    	$("#q11Output").append(input);
		$("#q12").delay(1000).fadeIn(2000);
		$("#formq12").delay(1000).fadeIn(2000);
		$("#buttonInput12").delay(1000).fadeIn(1000);
	})

	// 12 question
	$("#buttonInput12").on("click", function(event){
		event.preventDefault()
		$("#q12").fadeOut(1000);
		$("#formq12").fadeOut(1000);
		$("#buttonInput12").fadeOut(1000);
			var input = $("#q12input").val()
	    	console.log(input)
	    	$("#q12Output").append(input);
		$("#q13").delay(1000).fadeIn(2000);
		$("#formq13").delay(1000).fadeIn(2000);
		$("#buttonInput13").delay(1000).fadeIn(1000);
	})

	// 13 question
	$("#buttonInput13").on("click", function(event){
		event.preventDefault()
		$("#q13").fadeOut(1000);
		$("#formq13").fadeOut(1000);
		$("#buttonInput13").fadeOut(1000);
			var input = $("#q13input").val()
	    	console.log(input)
	    	$("#q13Output").append(input);
		$("#q14").delay(1000).fadeIn(2000);
		$("#formq14").delay(1000).fadeIn(2000);
		$("#buttonInput14").delay(1000).fadeIn(1000);
	})

	// 14 question
	$("#buttonInput14").on("click", function(event){
		event.preventDefault()
		$("#q14").fadeOut(1000);
		$("#formq14").fadeOut(1000);
		$("#buttonInput14").fadeOut(1000);
			var input = $("#q14input").val()
	    	console.log(input)
	    	$("#q14Output").append(input);
		$("#q15").delay(1000).fadeIn(2000);
		$("#formq15").delay(1000).fadeIn(2000);
		$("#buttonInput15").delay(1000).fadeIn(1000);
	})

	// 15 question
	$("#buttonInput15").on("click", function(event){
		event.preventDefault()
		$("#q15").fadeOut(1000);
		$("#formq15").fadeOut(1000);
		$("#buttonInput15").fadeOut(1000);
			var input = $("#q15input").val()
	    	console.log(input)
	    	$("#q15Output").append(input);
		$("#q16").delay(1000).fadeIn(2000);
		$("#formq16").delay(1000).fadeIn(2000);
		$("#buttonInput16").delay(1000).fadeIn(1000);
	})

	// 16 question
	$("#buttonInput16").on("click", function(event){
		event.preventDefault()
		$("#q16").fadeOut(1000);
		$("#formq16").fadeOut(1000);
		$("#buttonInput16").fadeOut(1000);
			var input = $("#q16input").val()
	    	console.log(input)
	    	$("#q16Output").append(input);
		$("#q17").delay(1000).fadeIn(2000);
		$("#formq17").delay(1000).fadeIn(2000);
		$("#buttonInput17").delay(1000).fadeIn(1000);
	})

	// 17 question
	$("#buttonInput17").on("click", function(event){
		event.preventDefault()
		$("#q17").fadeOut(1000);
		$("#formq17").fadeOut(1000);
		$("#buttonInput17").fadeOut(1000);
			var input = $("#q17input").val()
	    	console.log(input)
	    	$("#q17Output").append(input);
		$("#q18").delay(1000).fadeIn(2000);
		$("#formq18").delay(1000).fadeIn(2000);
		$("#buttonInput18").delay(1000).fadeIn(1000);
	})

	// 18 question
	$("#buttonInput18").on("click", function(event){
		event.preventDefault()
		$("#q18").fadeOut(1000);
		$("#formq18").fadeOut(1000);
		$("#buttonInput18").fadeOut(1000);
			var input = $("#q18input").val()
	    	console.log(input)
	    	$("#q18Output").append(input);
		$("#q19").delay(1000).fadeIn(2000);
		$("#formq19").delay(1000).fadeIn(2000);
		$("#buttonInput19").delay(1000).fadeIn(1000);
	})

	// 19 question
	$("#buttonInput19").on("click", function(event){
		event.preventDefault()
		$("#q19").fadeOut(1000);
		$("#formq19").fadeOut(1000);
		$("#buttonInput19").fadeOut(1000);
			var input = $("#q19input").val()
	    	console.log(input)
	    	$("#q19Output").append(input);
		$("#q20").delay(1000).fadeIn(2000);
		$("#formq20").delay(1000).fadeIn(2000);
		$("#buttonInput20").delay(1000).fadeIn(1000);
	})

	// 20 question
	$("#buttonInput20").on("click", function(event){
		event.preventDefault()
		$("#q20").fadeOut(1000);
		$("#formq20").fadeOut(1000);
		$("#buttonInput20").fadeOut(1000);
			var input = $("#q20input").val()
	    	console.log(input)
	    	$("#q20Output").append(input);
		$("#q21").delay(1000).fadeIn(2000);
		$("#formq21").delay(1000).fadeIn(2000);
		$("#buttonInput21").delay(1000).fadeIn(1000);
	})

	// 21 question
	$("#buttonInput21").on("click", function(event){
		event.preventDefault()
		$("#q21").fadeOut(1000);
		$("#formq21").fadeOut(1000);
		$("#buttonInput21").fadeOut(1000);
			var input = $("#q21input").val()
	    	console.log(input)
	    	$("#q21Output").append(input);
		$("#q22").delay(1000).fadeIn(2000);
		$("#formq22").delay(1000).fadeIn(2000);
		$("#buttonInput22").delay(1000).fadeIn(1000);
	})

	// 22 question
	$("#buttonInput22").on("click", function(event){
		event.preventDefault()
		$("#q22").fadeOut(1000);
		$("#formq22").fadeOut(1000);
		$("#buttonInput22").fadeOut(1000);
			var input = $("#q22input").val()
	    	console.log(input)
	    	$("#q22Output").append(input);
		$("#q23").delay(1000).fadeIn(2000);
		$("#formq23").delay(1000).fadeIn(2000);
		$("#buttonInput23").delay(1000).fadeIn(1000);
	})

	$("#buttonInput23").on("click", function(event){
		event.preventDefault()
		$("#q23").fadeOut(1000);
		$("#formq23").fadeOut(1000);
		$("#buttonInput23").fadeOut(1000);
			var input = $("#q23input").val()
	    	console.log(input)
	    	$("#q23Output").append(input);
		$("#q24").delay(1000).fadeIn(2000);
		$("#formq24").delay(1000).fadeIn(2000);
		$("#buttonInput24").delay(1000).fadeIn(1000);
	})

	$("#buttonInput24").on("click", function(event){
		event.preventDefault()
		$("#q24").fadeOut(1000);
		$("#formq24").fadeOut(1000);
		$("#buttonInput24").fadeOut(1000);
			var input = $("#q24input").val()
	    	console.log(input)
	    	$("#q24Output").append(input);
		$("#q25").delay(1000).fadeIn(2000);
		$("#formq25").delay(1000).fadeIn(2000);
		$("#buttonInput25").delay(1000).fadeIn(1000);
	})

	$("#buttonInput25").on("click", function(event){
		event.preventDefault()
		$("#q25").fadeOut(1000);
		$("#formq25").fadeOut(1000);
		$("#buttonInput25").fadeOut(1000);
			var input = $("#q25input").val()
	    	console.log(input)
	    	$("#q25Output").append(input);
		$("#q26").delay(1000).fadeIn(2000);
		$("#formq26").delay(1000).fadeIn(2000);
		$("#buttonInput26").delay(1000).fadeIn(1000);
	})

	$("#buttonInput26").on("click", function(event){
		event.preventDefault()
		$("#q26").fadeOut(1000);
		$("#formq26").fadeOut(1000);
		$("#buttonInput26").fadeOut(1000);
			var input = $("#q26input").val()
	    	console.log(input)
	    	$("#q26Output").append(input);
		$("#q27").delay(1000).fadeIn(2000);
		$("#formq27").delay(1000).fadeIn(2000);
		$("#buttonInput27").delay(1000).fadeIn(1000);
	})

	$("#buttonInput27").on("click", function(event){
		event.preventDefault()
		$("#q27").fadeOut(1000);
		$("#formq27").fadeOut(1000);
		$("#buttonInput27").fadeOut(1000);
			var input = $("#q27input").val()
	    	console.log(input)
	    	$("#q27Output").append(input);
		$("#q28").delay(1000).fadeIn(2000);
		$("#formq28").delay(1000).fadeIn(2000);
		$("#buttonInput28").delay(1000).fadeIn(1000);
	})

	$("#buttonInput28").on("click", function(event){
		event.preventDefault()
		$("#q28").fadeOut(1000);
		$("#formq28").fadeOut(1000);
		$("#buttonInput28").fadeOut(1000);
			var input = $("#q28input").val()
	    	console.log(input)
	    	$("#q28Output").append(input);
		$("#q29").delay(1000).fadeIn(2000);
		$("#formq29").delay(1000).fadeIn(2000);
		$("#buttonInput29").delay(1000).fadeIn(1000);
	})

	$("#buttonInput29").on("click", function(event){
		event.preventDefault()
		$("#q29").fadeOut(1000);
		$("#formq29").fadeOut(1000);
		$("#buttonInput29").fadeOut(1000);
			var input = $("#q29input").val()
	    	console.log(input)
	    	$("#q29Output").append(input);
		$("#q30").delay(1000).fadeIn(2000);
		$("#formq30").delay(1000).fadeIn(2000);
		$("#buttonInput30").delay(1000).fadeIn(1000);
	})

	$("#buttonInput30").on("click", function(event){
		event.preventDefault()
		$("#q30").fadeOut(1000);
		$("#formq30").fadeOut(1000);
		$("#buttonInput30").fadeOut(1000);
			var input = $("#q30input").val()
	    	console.log(input)
	    	$("#q30Output").append(input);
		$("#q31").delay(1000).fadeIn(2000);
		$("#formq31").delay(1000).fadeIn(2000);
		$("#buttonInput31").delay(1000).fadeIn(1000);
	})


	$("#buttonInput31").on("click", function(event){
		event.preventDefault()
		$("#q31").fadeOut(1000);
		$("#formq31").fadeOut(1000);
		$("#buttonInput31").fadeOut(1000);
			var input = $("#q31input").val()
	    	console.log(input)
	    	$("#q31Output").append(input);
		$("#q32").delay(1000).fadeIn(2000);
		$("#formq32").delay(1000).fadeIn(2000);
		$("#buttonInput32").delay(1000).fadeIn(1000);
	})

	$("#buttonInput32").on("click", function(event){
		event.preventDefault()
		$("#q32").fadeOut(1000);
		$("#formq32").fadeOut(1000);
		$("#buttonInput32").fadeOut(1000);
			var input = $("#q32input").val()
	    	console.log(input)
	    	$("#q32Output").append(input);
		$("#q33").delay(1000).fadeIn(2000);
		$("#formq33").delay(1000).fadeIn(2000);
		$("#buttonInput33").delay(1000).fadeIn(1000);
	})

	$("#buttonInput33").on("click", function(event){
		event.preventDefault()
		$("#q33").fadeOut(1000);
		$("#formq33").fadeOut(1000);
		$("#buttonInput33").fadeOut(1000);
			var input = $("#q33input").val()
	    	console.log(input)
	    	$("#q33Output").append(input);
		$("#q34").delay(1000).fadeIn(2000);
		$("#formq34").delay(1000).fadeIn(2000);
		$("#buttonInput34").delay(1000).fadeIn(1000);
	})

	$("#buttonInput34").on("click", function(event){
		event.preventDefault()
		$("#q34").fadeOut(1000);
		$("#formq34").fadeOut(1000);
		$("#buttonInput34").fadeOut(1000);
			var input = $("#q34input").val()
	    	console.log(input)
	    	$("#q34Output").append(input);
		$("#q35").delay(1000).fadeIn(2000);
		$("#formq35").delay(1000).fadeIn(2000);
		$("#buttonInput35").delay(1000).fadeIn(1000);
	})

	$("#buttonInput35").on("click", function(event){
		event.preventDefault()
		$("#q35").fadeOut(1000);
		$("#formq35").fadeOut(1000);
		$("#buttonInput35").fadeOut(1000);
			var input = $("#q35input").val()
	    	console.log(input)
	    	$("#q35Output").append(input);
		$("#q36").delay(1000).fadeIn(2000);
		$("#formq36").delay(1000).fadeIn(2000);
		$("#buttonInput36").delay(1000).fadeIn(1000);
	})

	$("#buttonInput36").on("click", function(event){
		event.preventDefault()
		$("#q36").fadeOut(1000);
		$("#formq36").fadeOut(1000);
		$("#buttonInput36").fadeOut(1000);
			var input = $("#q36input").val()
	    	console.log(input)
	    	$("#q36Output").append(input);
		$("#q37").delay(1000).fadeIn(2000);
		$("#formq37").delay(1000).fadeIn(2000);
		$("#buttonInput37").delay(1000).fadeIn(1000);
	})

	$("#buttonInput37").on("click", function(event){
		event.preventDefault()
		$("#q37").fadeOut(1000);
		$("#formq37").fadeOut(1000);
		$("#buttonInput37").fadeOut(1000);
			var input = $("#q37input").val()
	    	console.log(input)
	    	$("#q37Output").append(input);
		$("#q38").delay(1000).fadeIn(2000);
		$("#formq38").delay(1000).fadeIn(2000);
		$("#buttonInput38").delay(1000).fadeIn(1000);
	})

	$("#buttonInput38").on("click", function(event){
		event.preventDefault()
		$("#q38").fadeOut(1000);
		$("#formq38").fadeOut(1000);
		$("#buttonInput38").fadeOut(1000);
			var input = $("#q38input").val()
	    	console.log(input)
	    	$("#q38Output").append(input);
		$("#textbox").fadeOut(1000);
		$("#chatEnd").delay(2000).fadeIn(1000);
	})


	// INITIALIZATION
	$(function(){
 	 	$('#start').hide().delay(4000).fadeIn(3000);
 	 	$('#button').hide().delay(6000).fadeIn(1000);
	});

});