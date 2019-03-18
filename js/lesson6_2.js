"use strict";

/**
 * @property {object} settings Настройки корзины товаров.
 * @property {{price: number, name: string}[]} goods Список товаров что купил пользователь.
 * @property {HTMLElement} basketCountEl Место для показа количества товаров.
 * @property {HTMLElement} basketPriceEl Место для показа цены всех товаров.
 */
const basket = {
    settings: {
        productSelector: '#container',
        countClass: '#basket-count',
        priceSelector: '#basket-price',
    },
    goods: [],
    countEl: null,
    priceEl: null,

    /**
     * Инициализирует галерею, ставит обработчик события.
     * @param {Object} userSettings Объект настроек для корзины.
     */
    init(userSettings = {}) {
        // Записываем настройки, которые передал пользователь в наши настройки.
        Object.assign(this.settings, userSettings);

        this.countEl = +document.querySelector(this.countClass);
        this.priceEl = +document.querySelector(this.priceEl);

        // Находим элемент, где будут превью картинок и ставим обработчик на этот элемент,
        // при клике на этот элемент вызовем функцию containerClickHandler в нашем объекте
        // basket и передадим туда событие MouseEvent, которое случилось.
        document
            .querySelector(this.settings.productSelector)
            .addEventListener('click', event => this.containerClickHandler(event));
    },

    /**
     * Обработчик события клика для открытия картинки.
     * @param {MouseEvent} event Событие клики мышью.
     * @param {HTMLElement} event.target Целевой объект, куда был произведен клик.
     */
    containerClickHandler(event) {
        // Если целевой тег не был кнопкой, то ничего не делаем, просто завершаем функцию.
        if (event.target.tagName !== 'BUTTON') {
            return;
        }

        this.add(event.target.dataset.name, event.target.dataset.price);
        this.render();
    },

    /**
     * Отображает количество всех товаров и их цену.
     */
    render() {
        const count = document.querySelector(this.settings.countClass);
        count.textContent = this.countEl;

        const price = document.querySelector(this.settings.priceSelector);
        price.textContent = this.priceEl;
    },

    /**
     * Считает и возвращает цену всех купленных товаров из массива this.goods.
     * @returns {number} Цену всех купленных товаров.
     */
    getGoodsPrice() {
        let sum = 0;
        for (let i = 0; i < this.goods.length; i++) {
            sum += +this.goods[i][1];
        }
        return sum;
    },

    /**
     * Добавляет купленный товар в массив купленных товаров и отображает количество и цену всех товаров.
     * @param goodName Название товара.
     * @param goodPrice Цена товара.
     */
    add(goodName, goodPrice) {
        this.goods[this.goods.length] = [goodName, goodPrice];
        this.priceEl = this.getGoodsPrice();
        this.countEl = this.goods.length;
    },


};

// Инициализируем нашу галерею при загрузке страницы.
window.onload = () => basket.init();