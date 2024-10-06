new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
  
  
    breakpoints: {
      0: {
        slidesPerView: 1, // Corrected property
      },
      768: {
        slidesPerView: 2, // Corrected property
      },
      1024: {
        slidesPerView: 3, // Corrected property
      },
    }
  });
  