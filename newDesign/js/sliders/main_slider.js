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

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    thumbs: {
        swiper: swiperThumbs,
    }

});