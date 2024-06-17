var swiper1 = new Swiper(".coming-events", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".profiles--events .slider-next-btn",
    prevEl: ".profiles--events .slider-prev-btn",
  },
  pagination: {
    el: ".coming-events-pagination",
    type: "fraction",
  },
  breakpoints: {
    650 : {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});

var swiper2 = new Swiper(".coming-events-creator", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".profiles--creator .slider-next-btn",
    prevEl: ".profiles--creator .slider-prev-btn",
  },
  pagination: {
    el: ".coming-events-creator-pagination",
    type: "fraction",
  },
  breakpoints: {
    650 : {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});