"use strict";

// console.log(document.querySelector('input[name="name"]').getAttribute('value'));
// const value = document.querySelector('input[name="name"]');
// value.setAttribute('value', 'dfdfdf');
// console.log(document.querySelector('input[name="name"'));

document.querySelector('.btn').addEventListener('click', event => {
    let valid = true;
    if (!validateName()) {
        valid = false;
    }
    if (!validatePhone()) {
        valid = false;
    }
    if (valid !== true) {
        event.preventDefault();
    }
});

function validateName() {
    const name = document.querySelector('input[name="name"]');
    let value = name.value;
    if (value.trim().length < 1 || value.trim().length > 49){
        renderMessage(name, `Имя - должно содержать как минимум 1 символ, не более 50 символов`);
        return false;
    } else {
        name.parentElement.querySelector('.invalid-feedback').style.display = 'none';
        name.style.border = '1px solid #c0c0c0';
    }
    return true;
}

function validatePhone() {
    const name = document.querySelector('input[name="phone"]');
    let value = name.value;
    if (value.trim().length !== 11){
        renderMessage(name, `Телефон - должно содержать 11 символов`);
        return false;
    } else {
        name.parentElement.querySelector('.invalid-feedback').style.display = 'none';
        name.style.border = '1px solid #c0c0c0';
    }
    return true;
}

function renderMessage(element, messageText) {
    const parentElement = element.parentElement;
    const invalid = parentElement.querySelector('.invalid-feedback');
    if (invalid) {
        element.style.border = '1px solid #c0c0c0';
        invalid.remove();
    }
    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = messageText;
    messageDiv.classList.add('invalid-feedback');

    parentElement.appendChild(messageDiv);
    messageDiv.style.display = 'block';
    element.style.border = '1px solid red';
}

// const form = {
//     container: null,
//     name: null,
//     phone: null,
//     password: null,
//     password_repeat: null,
//
//     /**
//      * Инициализация объекта
//      */
//     init() {
//         this.container = document.querySelector('.my-form');
//         this.name = document.querySelector('input[name="name"]');
//         this.phone = document.querySelector('input[name="phone"]');
//         this.password = document.querySelector('input[name="password"]');
//         this.password_repeat = document.querySelector('input[name="password_repeat"]');
//     },
//
//     /**
//      * Запуск объекта
//      */
//     run() {
//         this.init();
//         this.name.addEventListener('focus', this.validateName);
//     },
//
//     validateName() {
//         let messageText = `Минимальное значение 1`;
//         console.log(event);
//         form.renderMessage(event.target, messageText);
//         // this.container.querySelector('.btn-primary').addEventListener('click', event => {
//         //     console.log(this.validateValueForNull(this.name));
//         //
//         //     event.preventDefault();
//         // });
//     },
//
//     validateValueForNull(element) {
//         return element.getAttribute('value');
//     },
//
//     renderMessage(element, messageText) {
//         const parentElement = element.parentElement;
//         parentElement.removeChild('.invalid-feedback');
//         const messageDiv = document.createElement('div');
//         messageDiv.innerHTML = messageText;
//         messageDiv.classList.add('invalid-feedback');
//         parentElement.appendChild(messageDiv);
//         messageDiv.style.display = 'block';
//     },
// };
//
// form.run();

// const name = document.querySelector('input[name="name"]');
// let value = name.setAttribute('value', 'dfhkdjsf');

// const btn = document.querySelector('.btn-primary');
// btn.addEventListener('click', event => {
//     // if (!validateName() && !validatePhone()) {
//     //     event.preventDefault();
//     // }
//     validateName();
//     // validatePhone();
//     event.preventDefault();
// });
//
// function validateName() {
//     const name = document.querySelector('input[name="name"]');
//     console.log(name);
//     let value = name.getAttribute('value');
//     // if (value.trim().length < 1 || value.trim().length > 49){
//     //     console.log(value);
//     //     renderMessage(name, `Имя - должно содержать как минимум 1 символ, не более 50 символов`);
//     //     return false;
//     // }
//     // return true;
// }
//
// function validatePhone() {
//     const name = document.querySelector('input[name="phone"]');
//     let value = name.getAttribute('value');
//     console.log(value.length);
//     if (!value) {
//         value = "";
//     }
//     console.log(value.length);
//     if (value.length !== 11){
//         renderMessage(name, `Телефон - должно содержать 11 цифр, не больше, не меньше`);
//         return false;
//     }
//     return true;
// }
//
// function renderMessage(element, messageText) {
//     const parentElement = element.parentElement;
//     const messageDiv = document.createElement('div');
//     messageDiv.innerHTML = messageText;
//     messageDiv.classList.add('invalid-feedback');
//     parentElement.appendChild(messageDiv);
//     messageDiv.style.display = 'block';
// }