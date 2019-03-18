"use strict";

/*
 Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999], мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
 - единицы (в свойстве firstDigit)
 - десятки (в свойстве secondDigit)
 - сотни (в свойстве thirdDigit)
 Например, для числа 45 мы должны получить следующий объект:

 {
 firstDigit: 5,
 secondDigit: 4,
 thirdDigit: 0,
 }

 Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
 необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
 */

const number = +prompt('Введите число от 0 до 999');
/**
 * Oбъект с записанными разрядами числа
 * @type {{firstDigit: number, secondDigit: number, thirdDigit: number, init: obj.init}}
 */
const obj = {
    firstDigit: 0,
    secondDigit: 0,
    thirdDigit: 0,
    /**
     * Инициализация объекта с разбиванием числа по разрядам и записывает данные в объект с записанными разрядами числа.
     * @param number
     */
    init: function (number) {
        if (!isNaN(number) && number % 1 === 0) {
            if (number < 0 || number > 999) {
                alert('Число не в диапозоне 0 до 999');
                return;
            }

            this.firstDigit = Math.floor((number / 100) % 100);
            this.secondDigit = Math.floor((number / 10) % 10);
            this.thirdDigit = Math.floor(number % 10);
            return obj;
        } else {
            return {};
        }
    },
}

/**
 * Функция разбивает число по разрядам и записывает данные в объект с записанными разрядами числа.
 * @param {int} number
 */
function getDigitsOfNumber(number) {
    if (!isNaN(number) && number % 1 === 0) {

        if (number < 0 || number > 999) {
            alert('Число не в диапозоне 0 до 999');
            return;
        }

        obj.firstDigit = Math.floor(number / 100);
        obj.secondDigit = Math.floor((number / 10) % 10);
        obj.thirdDigit = Math.floor(number % 10);
        return obj;
    } else {
        return {};
    }
}

console.log(obj.init(number)); // метод объекта
console.log(getDigitsOfNumber(number)); // функция