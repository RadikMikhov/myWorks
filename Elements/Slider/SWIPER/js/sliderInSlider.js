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
});


new Swiper('.image-in-slider' , {
    // Курсор перетаскивания
    grabCursor: true,
    // Навигация
    pagination: {
        el: '.swiper-pagination',
        // Буллеты
        clickable: true,
    },
    // Для корректного перетаскивания дочернего слайда
    nested: true,
});

let myTextSlider = new Swiper('.text-slider' , {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
})

//Передача управления
myImageSlider.controller.control = myTextSlider;
myTextSlider.controller.control = myImageSlider;