/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Lazy } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
//import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
	//BildSlider
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach(slider => {
			slider.parentElement.classList.add('swiper');
			slider.classList.add('swiper-wrapper');
			for (const slide of slider.children) {
				slide.classList.add('swiper-slide');
			}
		});
	}
}
// Инициализация слайдеров
function initSliders() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	// Перечень слайдеров
	if (document.querySelector('.projects__slider')) {
		const slides = document.querySelectorAll('.projects__slide');
		const loop = slides.length > 3;
		function createProject(loop) {
			new Swiper('.projects__slider', {
				// Подключаем модули слайдера
				// для конкретного случая
				modules: [Navigation, Lazy],
				observer: true,
				observeParents: true,
				slidesPerView: "auto",
				speed: 500,
				loop: loop,
				preloadImages: false,
				lazy: {
					checkInView: true,
					loadPrevNext: true,
					loadPrevNextAmount: 2,
				},
				watchSlidesProgress: true,
				watchOverflow: true,
				// Arrows
				navigation: {
					nextEl: '.projects__arrows_next',
					prevEl: '.projects__arrows_prev',
				},
				resizeObserver: false,
				breakpoints: {
					'@0.00': {
						lazy: {
							checkInView: true,
							loadPrevNext: false,
							loadPrevNextAmount: 0,
						},
					},
					'@0.75': {
						lazy: {
							checkInView: true,
							loadPrevNext: true,
							loadPrevNextAmount: 1,
						},
					},
					'@1.50': {
						lazy: {
							checkInView: true,
							loadPrevNext: true,
							loadPrevNextAmount: 2,
						},
					},
				},
			});
		}
		createProject(loop);
	}
	if (document.querySelector('.partners__slider')) {
		new Swiper('.partners__slider', {
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Lazy],
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			speed: 500,
			loop: true,
			preloadImages: false,
			lazy: {
				checkInView: true,
			},
			watchSlidesProgress: true,
			// Dotts
			pagination: {
				el: '.partners__dots',
				clickable: true,
				type: 'fraction'
			},
			// Arrows
			navigation: {
				nextEl: '.partners__arrow_next',
				prevEl: '.partners__arrow_prev',
			},
		});
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
});