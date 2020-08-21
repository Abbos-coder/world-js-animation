window.addEventListener("mousemove", (e) => {
   const text = document.querySelector(".text"),
      bird = document.querySelector(".imgbox");

   bird.style.right = 80 + e.pageX / 1.5 + "px";
   text.style.left = 80 + e.pageX / 2 + "px";

   console.log(bird);
});

const burger = document.querySelector(".nav__burger");
const menu = document.querySelector(".menu");
const icons = document.querySelector(".icon");
let active = document.querySelector(".active");





burger.addEventListener("click", (e) => {
	
	menu.classList.toggle("open");
	icons.classList.toggle("openIcons");
	burger.classList.toggle("openBurger");
	burger.classList.toggle("active");
});

