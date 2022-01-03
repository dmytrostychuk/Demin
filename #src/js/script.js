function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});

// $('burger-bth').on('click', function(e){
// 	e.preventDefault;
// 	$(this).toggleClass('burger-bth__active')
// });

// Меню бургер
const burgerBth = document.querySelector('.burger-bth');
const menuNav = document.querySelector('.menu__nav');
if (burgerBth) {
	burgerBth.addEventListener("click", function (e) {
		menuNav.classList.toggle('nav-active');
		burgerBth.classList.toggle('bth-active');
	});
}


$(document).ready(function(){
	$(".woman__card").slice(0, 5).show();
	$(".card-load").on("click", function(e){
	  e.preventDefault();
	  $(".woman__card:hidden").slice(0, 4).slideDown();
	  if($(".woman__card:hidden").length == 0) {
		$(".card-load").text("No Content").addClass("no-сontent");
	  }
	});
	
  })