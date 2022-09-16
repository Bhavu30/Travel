var swiper = new Swiper(".home-slider", {
    pagination: {
      el: ".swiper-pagination",
      
    },
  });
  var swiper = new Swiper(".card-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  loop:true,
  breakpoints: {
  400:
  {
    slidesPerView:1,
  },

    768: {
      slidesPerView: 2,
     
    },
    1024: {
      slidesPerView: 3,
     
    },
  },
  });