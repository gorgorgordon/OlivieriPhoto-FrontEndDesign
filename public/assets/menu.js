
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
// const navLinks = document.querySelectorAll('.nav-item-menu')
const topper = document.getElementById('rotate-top');
const bottom = document.getElementById('rotate-bottom');
const middle = document.getElementById('remove-center');


hamburger.addEventListener('click', () => {
console.log('clicked');
navMenu.classList.toggle('active');
// navLinks.classList.toggle('link-active');
topper.classList.toggle('rotate-top');
bottom.classList.toggle('rotate-bottom');
middle.classList.toggle('remove-center');
});


// function hideMenu() {  
//  if (navMenu.classList.contains("active")) {
//    navMenu.classList.remove("active");
//    navLinks.classList.add("link-active");
//    topper.classList.remove("rotate-top");
//    bottom.classList.remove("rotate-bottom");
//    middle.classList.remove("remove-center");
//  }

// }



