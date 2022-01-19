// Подключение из node_modules
import * as noUiSlider from 'nouislider';

// Подключение стилей из scss/base/forms/range.scss 
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';

export function rangeInit() {

	const priceSlider = document.querySelectorAll('[data-range]');
	const toggleSlider = document.querySelectorAll('[data-range-toggle]');
	if (priceSlider.length) {
		priceSlider.forEach(rangeItem => {
			let item = rangeItem.querySelector('[data-range-item]');
			let tooltips = +rangeItem.getAttribute('data-tooltips');
			let textFrom = +rangeItem.querySelector('[data-from]').innerHTML;
			let textTo = +rangeItem.querySelector('[data-to]').innerHTML;
			let start = +rangeItem.getAttribute('data-start');
			noUiSlider.create(item, {
				start: [start],
				connect: 'lower',
				tooltips: [wNumb({ decimals: tooltips })],
				range: {
					'min': textFrom,
					'max': textTo
				}
			});
			//Получение значения слайдера
			//item.noUiSlider.on('update', function () {
			//	console.log(item.noUiSlider.get());
			//});
		});
	}
	if (toggleSlider.length) {
		toggleSlider.forEach(rangeItem => {
			let item = rangeItem.querySelector('[data-range-item]');
			noUiSlider.create(item, {
				orientation: "horizontal",
				start: 0,
				connect: 'lower',
				behaviour: 'tap',
				range: {
					'min': [0, 1],
					'max': 1
				},
				format: wNumb({
					decimals: 0
				})
			});

			item.noUiSlider.on('update', function (values, handle) {
				let value1 = item.parentElement.querySelector('.form-calculator__value-1');
				let value2 = item.parentElement.querySelector('.form-calculator__value-2');
				//console.log(item.noUiSlider.get()); получение значения слайдера
				if (values[handle] === '1') {
					value2.classList.add('_active');
					value1.classList.remove('_active');
				} else {
					value2.classList.remove('_active');
					value1.classList.add('_active');
				}
			});
			item.noUiSlider.on('start', function (values) {
				//Получение значения слайдера
				let toggle = values[0] == 0 ? 1 : 0;
				//Установка значения
				item.noUiSlider.set(toggle);
			});
		})
	}

}
/*
		const priceStart = document.getElementById('price-start');
		const priceEnd = document.getElementById('price-end');
		priceStart.addEventListener('change', setPriceValues);
		priceEnd.addEventListener('change', setPriceValues);
		*/
//function setPriceValues() {
//	let priceStartValue;
//	let priceEndValue;
//	if (priceStart.value != '') {
//		priceStartValue = priceStart.value;
//	}
//	if (priceEnd.value != '') {
//		priceEndValue = priceEnd.value;
//	}
//	priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
//}
rangeInit();
