var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 31,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 114
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 24
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 24
    }
    
  }
});
 