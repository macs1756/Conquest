

const btnBurger = document.querySelector(".header__burger");
const contentBurger = document.querySelector(".burger__active");





btnBurger.addEventListener("click", item =>{
		btnBurger.classList.toggle("header__burger_close");
		contentBurger.classList.toggle("burger__open");
});



//////////////////////ico follow


const followBody = document.querySelector("#follow");
const followCount = document.querySelector(".list__nav-follow");
let count = 0;
followBody.addEventListener("click", follow=>{
	
	let countNext = ++count;
	followCount.innerHTML = countNext ;
});



new Swiper(".swiper",{
	slidesPerView: 1,
	loop: true,
	navigation:{
		nextEl: ".slider__control-next",
		prevEl: ".slider__control-prev",
	},
pagination:{
	type: "fraction",
	el: ".slider__control-fraction",




renderFraction: function (currentClass, totalClass){
	return '0<span class='+ currentClass +'></span>'
}
},
});




