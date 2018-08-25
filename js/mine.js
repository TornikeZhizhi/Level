

//  Hamburger Menu

$(document).ready(function(){


	$("#hamburger_icon").on("click",function(){

		$(".resp_navbar").toggleClass("active");


		$(".hamb2").toggleClass("deactive");
		$(".hamb1").toggleClass("active1");
		$(".hamb3").toggleClass("active2");

	})

   
});