$(document).ready(function(){

	const carousel = document.getElementById("carousel");
const cards = document.querySelectorAll(".card");

let current = 1;
let startX = 0;
let isDragging = false;

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
/* TOUCH EVENTS (MOBILE) */
/* ===================== */
carousel.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener("touchend", e => {
  const endX = e.changedTouches[0].clientX;
  handleSwipe(endX);
});

/* ===================== */
/* MOUSE EVENTS (DESKTOP) */
/* ===================== */
carousel.addEventListener("mousedown", e => {
  isDragging = true;
  startX = e.clientX;
});

carousel.addEventListener("mouseup", e => {
  if (!isDragging) return;
  isDragging = false;
  handleSwipe(e.clientX);
});

carousel.addEventListener("mouseleave", () => {
  isDragging = false;
});

/* ===================== */
/* SWIPE LOGIC */
/* ===================== */
function handleSwipe(endX) {
  const diff = endX - startX;

  if (Math.abs(diff) < 50) return; // minimum swipe distance

  if (diff > 0) {
    move(-1); // swipe right
  } else {
    move(1); // swipe left
  }
}


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


	// responsive nav
	var responsiveNav = $('#toggle-nav');
	var navBar = $('.nav-bar');

	responsiveNav.on('click',function(e){
		e.preventDefault();
		console.log(navBar);
		navBar.toggleClass('active')
	});

	// pseudo active
	if($('#docs').length){
		var sidenav = $('ul.side-nav').find('a');
		var url = window.location.pathname.split( '/' );
		var url = url[url.length-1];
		
		sidenav.each(function(i,e){
			var active = $(e).attr('href');

			if(active === url){
				$(e).parent('li').addClass('active');
				return false;
			}
		});
	}

});

hljs.configure({tabReplace: '  '});
hljs.initHighlightingOnLoad();