

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
             //  	animateIn: 'fadeIn',
	            // animateOut: 'fadeOut',
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


// Scroll Animations

$(document).ready(function(){
	$(window).on("load",function(){
		 if($(window).width() > 992){

		 	$(window).on('scroll', check_if_in_view);
$(window).on('scroll resize', check_if_in_view);
$(window).trigger('scroll');

function check_if_in_view() {
  var window_height = $(window).height();
  var window_top_position = $(window).scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($('.idea_tittle'), function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {

      $('.idea_tittle').addClass('bounceInLeft');
      $('.idea_text').addClass('bounceInRight');

    }

  });
}

$(window).on('scroll', check_if_in_view2);
$(window).on('scroll resize', check_if_in_view2);
$(window).trigger('scroll');

function check_if_in_view2() {
  var window_height = $(window).height();
  var window_top_position = $(window).scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($('.idea_scroll1'), function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

   
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {

      $('.idea_scroll1').addClass('bounceInLeft');
      $('.idea_scroll2').addClass('bounceInRight');

    }

  });
}

$(window).on('scroll', check_if_in_view3);
$(window).on('scroll resize', check_if_in_view3);
$(window).trigger('scroll');

function check_if_in_view3() {
  var window_height = $(window).height();
  var window_top_position = $(window).scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($('.whowe_img_box'), function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {

      $('.whowe_img_box').addClass('bounceInLeft');
      $('.whowe_main_info').addClass('bounceInRight');
      $('.info_ypc').addClass('bounceInRight');

    }

  });
}



$(window).on('scroll', check_if_in_view4);
$(window).on('scroll resize', check_if_in_view4);
$(window).trigger('scroll');

function check_if_in_view4() {
  var window_height = $(window).height();
  var window_top_position = $(window).scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($('.projects_img_left'), function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

  
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {

      $('.projects_img_left').addClass('bounceInLeft');
      $('.projects_img_right').addClass('bounceInRight');
     

    }

  });
}



$(window).on('scroll', check_if_in_view5);
$(window).on('scroll resize', check_if_in_view5);
$(window).trigger('scroll');

function check_if_in_view5() {
  var window_height = $(window).height();
  var window_top_position = $(window).scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($('.aboutus_box'), function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

 
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {

      $('.aboutus_box').addClass('bounceInLeft');
     
      $('.footer_map').addClass('bounceInUp');
      $('.footer_nav_box').addClass('bounceInRight');

    }

  });
}

		 }
	})
})



