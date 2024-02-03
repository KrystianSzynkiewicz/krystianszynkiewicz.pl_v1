const startButton = document.getElementById('start');
const container1 = document.getElementById('blackAndWhite__container1');
const container2 = document.getElementById('blackAndWhite__container2');
const container3 = document.getElementById('blackAndWhite__container3');
const container4 = document.getElementById('blackAndWhite__container4');

container2.style.display = 'none';
container3.style.display = 'none';
container4.style.display = 'none';


function nextSlide () {
  container1.style.display = 'none';
  container2.style.display = 'flex';
  
  setTimeout(function() {
    showSlides();
  }, 0);

  startButton.style.display = 'none';

}
 
let slideIndex = 0;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("main_div--child1");
  // let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  slides[slideIndex-1].style.display = "flex";  
  setTimeout(showSlides, 3000); // Change image every 2 seconds


}

startButton.addEventListener('click', nextSlide);

