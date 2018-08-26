

//  Hamburger Menu

$(document).ready(function(){

	$("#hamburger_icon").on("click",function(){

		$(".resp_navbar").toggleClass("active");

		$(".hamb2").toggleClass("deactive");
		$(".hamb1").toggleClass("active1");
		$(".hamb3").toggleClass("active2");

	})

   
});


$(document).ready(function(){
$(window).on('load', function (){
		setInterval(function(){
        $(".owl-carousel .owl-item img").height('auto')
         if($(window).width() < 1300){
            	var height = $('.owl-carousel .owl-item img').height()
            	$('#slider').height(height);
            	var imgHeight = $(".owl-carousel .owl-item img").eq(0).height()

            	$(".owl-carousel .owl-item img").height(imgHeight)

            }
            else{

            	$('#slider').height('100vh')
            }
		}
			,200)
        
	})

  $(window).on('resize', function (){
  	setInterval(function(){
  		$(".owl-carousel .owl-item img").height('auto')
        if($(window).width() < 1300){
           
            	var height1 = $('.owl-carousel .owl-item img').height()
            	$('#slider').height(height1);
            	var imgHeight = $(".owl-carousel .owl-item img").eq(0).height()
            	$(".owl-carousel .owl-item img").height(imgHeight)

            }
             else{
            	$('#slider').height('100vh')
            }
  	},200)  
	})

})


// Slider

        $(document).ready(function() {
              $('.owl-carousel').owlCarousel({
              	animateIn: 'fadeIn',
	            animateOut: 'fadeOut',
                dotsSpeed: 1000,
	            dragEndSpeed: 1000,
              	loop:true,
	          	smartSpeed: 1169,
                nav:true,
                items: 1,
                margin: 0,
                autoHeight: false,
                items: 1,
	                         
              });
            })



// Mousemove


$(document).ready(function(){

	$(window).mousemove(function(event){

		var x = event.clientX/40;	
		var y = event.clientY/40;	

		$("#imgmove").css("transform","translate(" + y + "px," + x +"px)")
		// $("#imgmove").css("transform","translatex(" + x + "px)")

	

	})


})      