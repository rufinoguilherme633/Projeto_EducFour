let slideIndex = 0;
const slides = document.getElementsByClassName("carousel__slide");

function showSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = "translateX(-" + slideIndex + "00%)";
  }
}

function nextSlide() {
  if (slideIndex < slides.length - 1) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }
  showSlide();
}

function prevSlide() {
  if (slideIndex > 0) {
    slideIndex--;
  } else {
    slideIndex = slides.length - 1;
  }
  showSlide();
}

showSlide();