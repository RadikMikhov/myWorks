// Инициализация
let myImageSlider = new Swiper('.image-slider', {
    // Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    slidesPerView: 3,
    slideToClickedSlide: false,
    loop: true,

    // Lazy Loader
    // Отключить предзагрузку картинок
    preloadImages: false,
    lazy: {
        //Подгружать на старте переключения слайда
        loadOnTransitionStart: false,
        
        //Подгрузить предыдущую и следующую картинки
        loadPrevNext: false,
    },

    // Зум картинки
    zoom: {
        // Максимальное увеличение
        maxRatio: 5,
        //Минимальное увеличение
        minRatio: 1,
    },

    // Обновить свайпер при изменении элементов слайдера
    observer: true,

    // Обновить свайпер при изменении родительских элементов слайдера
    observerParents: true, 

    // Обновить свайпер при изменении дочерних элементов слайдера
    observerSlideChildren: true,


    //Формирование виртуального слайдера
    virtual: {
        slides: (function() {
            let slide = []
            for (let i = 0; i < 500; i++) {
                slide.push(`<div class="image-slider__text">Слайд номер ${i}</div>`);
            }
            return slide;
        }()),
    },
});