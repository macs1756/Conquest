

const btnBurger = document.querySelector(".header__burger");
const contentBurger = document.querySelector(".burger__active");

btnBurger.addEventListener("click", item =>{
		btnBurger.classList.toggle("header__burger_close");
		contentBurger.classList.toggle("burger__open");
});



//////////////////////ico follow


const followBody = document.querySelector("#follow");
const followCount = document.querySelector(".list__nav-follow");
let count = 1;
followBody.addEventListener("click", follow=>{
	
	let countNext = ++count;
	followCount.innerHTML = countNext ;
});