// Инициализация
new Swiper('.image-slider', {
    // Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    // Навигация
    pagination: {
        el: '.swiper-pagination',

    /*
        // Буллеты
        type: 'bullets',
        clickable: true,
        // Динамические буллеты
        dynamicBullets: true,
        // кастомные буллеты
       renderBullet: function(index, className) {
           return '<span class="' + className + '">' + (index + 1) + '</span>';
       },
    */
        //Фракция
        type: 'fraction',
        // Кастомный вывод фракции
        renderFraction: function (currentClass, totalClass) {
            return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
        },
    /*    
        // Прогрессбар
        type: 'progressbar',
    */   
    },
    // Скролл
    scrollbar: {
        el: '.swiper-scrollbar',

        // Возможность перетаскивать скролл
        draggable: true
    },

    // Включение\отключение перетаскивания на ПК
    simulateTouch: true,

    // Чувствительность свайпа
    touchRatio: 1,

    // Угол срабатывания свайпа\перетаскивания
    touchAngle: 45,

    // Курсор перетаскивания
    grabCursor: true,

    // Переключение по клике на слайд
    slideToClickedSlide: false,

    // Навигация по хешу
    hashNavigation:{
        // Отслеживание состояния
        watchState: true,
    },

/*    
    // Управление клавиатурой
    keyboard: {
        //Включить\выключить
        enabled: true,

        //Включить\выключить (только когда слайдер в пределах вьюпорта)
        onlyInViewport: true,

        // Включить\выключить pageUp, pageDown
        pageUpDown: true,

    },
*/

/*
    // Управление колесом мыши
    mousewheel: {
        // Чувствительность
        sensitivity: 1,

        // Класс обьекта на котором будет срабатывать прокрутка
        eventsTarget: ".image-slider"  // если слайдер не один, то лучше оставить по умолчанию
    },
*/


    // Автовысота
    autoHeight: false,


    // Количество слайдов для показа
    slidesPerView: 1,  //Можно прописывать не только целые числа
    // Если слайдов меньше чем указано выше, стоит прописать
    watchOverflow: true,

    // Количество пролистываемых слайдов
    slidePerGroup: 1,

    // Отступ между слайдами
    spaceBetween: 30,

    // Активный слайд по центру
    centeredSlides: false,
    
    // Стартовый слайд
    initialSlide: 0,

    // Мультирядность
    slidePerColumn: 1,

    // Бессконечный слайдер
    loop: true,

    // Количество дублирующих слайдов для коректной работы с бессконечным слайдером, должно совпадать с slidesPerView
    loopedSlides: 3,

    // Свободній режим
    freeMode: true,

/*
    // Автопрокрутка
    autoplay: {
        // Пауза между прокруткой
        delay: 1000,

        //Закончить на последнем слайде
        stopOnLastSlide: false,

        // Отключить после ручного переключения
        disableOnInteraction: false,
    },
*/

    // Скорость переключения слайдов
    speed: 800,

    //Вертикальный слайдер
    //direction: 'vertical',
    direction: 'horizontal',

    //Эфекты переключения слайдов
    // Листание
    effect: 'slide',
/*
    // Смена прозрачности
    effect: 'fade',
    fadeEffect: {
        //Паралельная смена прозрачности
        crossFade: true,
    }
 
    // Переворот
    effect: 'flip',
    flipEffect: {
        // Тень
        slideShadows: true,

        // Показ только активного слайда
        limitRotation: true, 
    },
  
    // Куб
    effect: 'cube',
    cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94
    },

    // Эфект потока
    effect: 'coverflow',
    coverflowEffect: {
        // Угол
        rotate: 45,

        // Наложение 
        stretch: 150,

        // Тень
        slideShadows: true,
    },
*/

/*
    // Брекпоинты (адаптивность)
    // Ширина экрана
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    },

    // Cooтношение сторон
    breakpoints: {
        '@0.75': {
            slidesPerView: 1,
        },
        '@1.00': {
            slidesPerView: 2,
        },
        '@1.50': {
            slidesPerView: 3,
        }
    },
*/

// Обновить свайпер при изменении элементов слайдера
observer: true,

// Обновить свайпер при изменении родительских элементов слайдера
observerParents: true, 

// Обновить свайпер при изменении дочерних элементов слайдера
observerSlideChildren: true,
    
});
