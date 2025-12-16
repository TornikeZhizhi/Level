

//  Hamburger Menu

$(document).ready(function(){

	const carousel = document.getElementById("carousel");
const cards = document.querySelectorAll(".card");

let current = 1;
let startX = 0;
let isDragging = false;

/* ===================== */
/* AUTO SLIDE SETTINGS   */
/* ===================== */
let autoSlide = null;
const AUTO_DELAY = 3000;

/* ===================== */
/* CORE LOGIC            */
/* ===================== */
function updateClasses() {
  cards.forEach(c => c.className = "card");

  const prev = (current - 1 + cards.length) % cards.length;
  const next = (current + 1) % cards.length;

  cards[prev].classList.add("prev");
  cards[current].classList.add("active");
  cards[next].classList.add("next");
}

function move(direction) {
  current = (current + direction + cards.length) % cards.length;
  updateClasses();
}

/* ===================== */
/* AUTO SLIDE            */
/* ===================== */
function startAutoSlide() {
  stopAutoSlide();
  autoSlide = setInterval(() => {
    move(1);
  }, AUTO_DELAY);
}

function stopAutoSlide() {
  if (autoSlide) {
    clearInterval(autoSlide);
    autoSlide = null;
  }
}

/* ===================== */
/* TOUCH EVENTS (MOBILE) */
/* ===================== */
carousel.addEventListener("touchstart", e => {
  stopAutoSlide();
  startX = e.touches[0].clientX;
});

carousel.addEventListener("touchend", e => {
  handleSwipe(e.changedTouches[0].clientX);
  startAutoSlide();
});

/* ===================== */
/* MOUSE EVENTS (DESKTOP) */
/* ===================== */
carousel.addEventListener("mousedown", e => {
  stopAutoSlide();
  isDragging = true;
  startX = e.clientX;
});

carousel.addEventListener("mouseup", e => {
  if (!isDragging) return;
  isDragging = false;
  handleSwipe(e.clientX);
  startAutoSlide();
});

carousel.addEventListener("mouseleave", () => {
  isDragging = false;
});

/* ===================== */
/* SWIPE LOGIC           */
/* ===================== */
function handleSwipe(endX) {
  const diff = endX - startX;

  if (Math.abs(diff) < 50) return;

  if (diff > 0) {
    move(-1); // swipe right
  } else {
    move(1);  // swipe left
  }
}

/* ===================== */
/* BUTTON CONTROLS       */
/* ===================== */
$("#btn1").click(function () {
  stopAutoSlide();
  move(-1);
  startAutoSlide();
});

$("#btn2").click(function () {
  stopAutoSlide();
  move(1);
  startAutoSlide();
});

/* ===================== */
/* INIT                  */
/* ===================== */
updateClasses();
startAutoSlide();


// $(".card").click(function(e) {
//     const offset = $(this).offset();
//     const x = e.pageX - offset.left;
//     const y = e.pageY - offset.top;

//     $(this).addClass("pn-none")
//            .find(".content").addClass("active")
//            .end()
//            .find(".bullet").css({
//                left: x + 'px',
//                top: y + 'px'
//            });
// });


// code for the button to go back to the original state


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
		var y = event.clientY/80;	
		$("#imgmove").css("transform","translate(" + x + "px," + y +"px)")

	})
})      



