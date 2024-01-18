const slider = document.querySelector('.main__slider-wrapper');
const sliderContent = document.querySelector('.main__slider-wrapper-content');
const sliderSlide = document.querySelectorAll(
  '.main__slider-wrapper-content-slide'
);

let sliderCount = 0;
let sliderWidth = slider.offsetWidth;

function nextSlide() {
  sliderCount++;

  if (sliderCount >= sliderSlide.length) {
    sliderCount = 0;
  }

  autoRollSlide();
}

// function prevSlide() {
//   sliderCount--;

//   if (sliderCount < 0) {
//     sliderCount = sliderSlide.length - 1;
//   }

//   autoRollSlide();
// }

function autoRollSlide() {
  sliderContent.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

// setInterval(() => {
//   nextSlide();
// }, 3000);
