"use strict";

/*
 С помощью цикла while вывести все простые числа в промежутке от 0 до 100 (можно без оптимизаций).
 */

let i = 0;
while (i < 100) {

    if (isPrimeNumber(i)) {
        console.log(i);
    }
    i++;

}

/**
 * Функция проверки является ли число простым
 * @param {number} number - проверяемое число
 * @returns {boolean} Возвращаем true если число простое, false если непростое
 */
function isPrimeNumber (number) {

    if (number > 1) {
        // можно записать как j < i, но числа больше квадратного корня дадут остаток не 0. так что их можно опустить
        for (let j = 2; j <= Math.sqrt(number); j++) {
            if (number % j === 0) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }

}