// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";
document.addEventListener('click', documentActions);

function _removeClasses(el, class_name) {
	for (var i = 0; i < el.length; i++) {
		el[i].classList.remove(class_name);
	}
}

function documentActions(e) {
	let targetElement = e.target;
	let blockOk = document.querySelectorAll('.menu__item_arrow-down');
	if (targetElement.closest('.menu__button._icon-arrow-down')) {
		targetElement.closest('.menu__item').classList.toggle('_active');
	}
	if (!targetElement.closest('.menu__item')) {
		_removeClasses(blockOk, "_active");
	}


	if (targetElement.classList.contains('_icon-search')) {
		document.querySelector('.header__form').classList.toggle('_search-active');
	} else if (!targetElement.closest('.header__form') && document.querySelector('.header__form._search-active')) {
		document.querySelector('.header__form').classList.remove('_search-active');
	}
}
