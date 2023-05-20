const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imageContainer = document.querySelector(".image-container");
const sliderImageEl = document.querySelectorAll(".slider-image");

let currentImg = 1;
let timeout;

nextEl.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});

prevEl.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeout);

  updateImg();
});

updateImg();

function updateImg() {
  if (currentImg > sliderImageEl.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = sliderImageEl.length;
  }
  imageContainer.style.transform = `translateX(-${(currentImg - 1) * 1200}px)`;
  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
