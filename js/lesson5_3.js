"use strict";

/*
 Урок 5, задание 3:

 Создать форму в html со следующими полями:
 * Имя - текстовое поле
 * Телефон - текстовое поле
 * Пароль - поле типа password
 * Повтор пароля - поле типа password
 * Кнопка отправить форму

 Необходимо реализовать валидацию этой формы по следующим правилам:

 * Имя - должно содержать как минимум 1 символ, не более 50 символов.
 * Телефон - должно содержать 11 цифр, не больше, не меньше.
 * Пароль - минимум 5 символов, максимум 50.
 * Повтор пароля - значение должно совпадать с полем пароль.
 * Кнопка отправить форму - при нажатии на кнопку форма должна провериться, при прохождении проверки, форма
 отправляется, если проверка не была пройдена, то:
 - Каждое поле, которое не прошло проверку должно выделяться красным цветом.
 - Под каждым полем, что не прошло проверку, должна писаться подсказка по какой причине проверка провалилась.

 Можете пользоваться стилями бутстрапа, если лень самим писать.
 Пользоваться аттрибутами HTML5 запрещено, необходимо проверки реализовать с помощью javascript.
 */

document.querySelector('.btn').addEventListener('click', event => {
    const name = document.querySelector('input[name="name"]');
    const phone = document.querySelector('input[name="phone"]');
    const password = document.querySelector('input[name="password"]');
    const password_repeat = document.querySelector('input[name="password_repeat"]');
    let valid = true;
    if (!validateName(name)) {
        valid = false;
    }
    if (!validatePhone(phone)) {
        valid = false;
    }
    if (!validatePassword(password)) {
        valid = false;
    }
    if (!validatePassword(password_repeat)) {
        valid = false;
    }
    if (!validatePasswordMatch(password, password_repeat)) {
        valid = false;
    }
    if (valid !== true) {
        event.preventDefault();
    }
});

/**
 * Валидация Имени на совпадение с условием ввода данных
 * @param {object} element - объект проверки
 * @returns {boolean} true если валидация прошла успешно
 */
function validateName(element) {
    const value = element.value;
    if (value.trim().length < 1 || value.trim().length > 50){
        deleteMessage(element);
        createMessage(element, `Имя - минимум 1 символ, максимум 50 символов, сейчас ${value.trim().length}.`);
        return false;
    }
    deleteMessage(element);
    return true;
}

/**
 * Валидация Телефона на совпадение с условием ввода данных
 * @param {object} element - объект проверки
 * @returns {boolean} true если валидация прошла успешно
 */
function validatePhone(element) {
    const value = element.value;
    if (value.trim().length !== 11){
        deleteMessage(element);
        createMessage(element, `Телефон - должно содержать 11 символов, сейчас ${value.trim().length}.`);
        return false;
    }
    deleteMessage(element);
    return true;
}

/**
 * Валидация Пароля на совпадение с условием ввода данных
 * @param {object} element - объект проверки
 * @returns {boolean} true если валидация прошла успешно
 */
function validatePassword(element) {
    const value = element.value;
    if (value.trim().length < 5 || value.trim().length > 50){
        deleteMessage(element);
        createMessage(element, `Пароль - минимум 5 символов, максимум 50, сейчас ${value.trim().length}.`);
        return false;
    }
    deleteMessage(element);
    return true;
}

/**
 * Валидация Пароля на равенство двух паролей
 * @param {object} element1  - 1 объект проверки
 * @param {object} element2  - 2 объект проверки
 * @returns {boolean}
 */
function validatePasswordMatch(element1, element2) {
    const value1 = element1.value;
    const value2 = element2.value;
    if (value1 !== value2) {
        deleteMessage(element2);
        createMessage(element2, `Повтор пароля - значение должно совпадать с полем пароль.`);
        return false;
    }
    deleteMessage(element2);
    return true;
}

/**
 * Создание и вывод сообщение о несоответсвий условию валидации
 * @param {object} element - объект проверки
 * @param {string} messageText - строка для вывода сообщения
 */
function createMessage(element, messageText) {
    const parentElement = element.parentElement;
    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = messageText;
    messageDiv.classList.add('invalid-feedback');

    parentElement.appendChild(messageDiv);
    messageDiv.style.display = 'block';
    element.style.border = '1px solid red';
}

/**
 * Удаление сообщения
 * @param {object} element - объект проверки
 */
function deleteMessage(element) {
    const parentElement = element.parentElement;
    const invalid = parentElement.querySelector('.invalid-feedback');
    if (invalid) {
        element.style.border = '1px solid #c0c0c0';
        invalid.remove();
    }
}
