const swiperThumbs = new Swiper ('.thumbs__slider', {
    loop: true,

    spaceBetween: 40,
    slidesPerView: 4,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});

const swiper = new Swiper('.main__slider', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        // el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        // el: '.swiper-scrollbar',
    },

    thumbs: {
        swiper: swiperThumbs,
    }

});