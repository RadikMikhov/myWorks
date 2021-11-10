new Swiper('.image-slider', {
    // Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    //Фракция
    type: 'fraction',
    // Кастомный вывод фракции
    renderFraction: function (currentClass, totalClass) {
        return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
    },

    scrollbar: {
        el: '.swiper-scrollbar',

        // Возможность перетаскивать скролл
        draggable: true
    },
    // Количество слайдов для показа
    slidesPerView: 1,
    // Отступ между слайдами
    spaceBetween: 30,
    // Бессконечный слайдер
    loop: true,
    // Скорость переключения слайдов
    speed: 800,

    // Lazy Loader
    // Отключить предзагрузку картинок
    preloadImages: false,
    lazy: {
        //Подгружать на старте переключения слайда
        loadOnTransitionStart: false,
        
        //Подгрузить предыдущую и следующую картинки
        loadPrevNext: false,
    },

    // Слежка за видимыми слайдами
    watchSlidesProgress: true,

    // Добавление класса видимым слайдам
    watchSlidesViisbility: true,

    // Зум картинки
    zoom: {
        // Максимальное увеличение
        maxRatio: 5,
        //Минимальное увеличение
        minRatio: 1,
    },


    // Миниатюры (превью)
    thumbs: {
        swiper: {
            el: '.image-mini-slider',
            slidesPerView: 5,
        }
    },

    // Обновить свайпер при изменении элементов слайдера
    observer: true,

    // Обновить свайпер при изменении родительских элементов слайдера
    observerParents: true, 

    // Обновить свайпер при изменении дочерних элементов слайдера
    observerSlideChildren: true,
});