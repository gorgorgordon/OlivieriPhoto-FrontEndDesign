
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navlinks = document.querySelector('.ul-alignment');
const topper = document.getElementById('rotate-top');
const bottom = document.getElementById('rotate-bottom');
const middle = document.getElementById('remove-center');

hamburger.addEventListener('click', () => {
console.log('clicked');
navlinks.classList.toggle('open');
nav.classList.toggle('top-level');
topper.classList.toggle('rotate-top');
bottom.classList.toggle('rotate-bottom');
middle.classList.toggle('remove-center');

});


function hideMenu() {  
 if (navlinks.classList.contains('open')) {
   navlinks.classList.remove('open');
   topper.classList.remove("rotate-top");
   bottom.classList.remove("rotate-bottom");
   middle.classList.remove("remove-center");
 }

}



