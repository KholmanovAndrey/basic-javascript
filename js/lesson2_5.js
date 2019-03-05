"use strict";

/*
 Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
 где arg1, arg2 – значения аргументов, operation – строка с названием операции.
 В зависимости от переданного значения операции (использовать switch) выполнить одну из арифметических операций
 (использовать функции из задания 4) и вернуть полученное значение.
 */

/**
 * Функция сложения двух чисел
 * @param {number} a 1-ое число
 * @param {number} b 2-ое число
 * @returns {number} Сумма чисел
 */
const add = function (a, b) {
    return a + b;
};

/**
 * Функция отнимания одного числа от другого чисел
 * @param {number} a 1-ое число
 * @param {number} b 2-ое число
 * @returns {number} Отнимание
 */
const reduce = function (a, b) {
    return a - b;
};

/**
 * Функция произведения двух чисел
 * @param {number} a 1-ое число
 * @param {number} b 2-ое число
 * @returns {number} произведения двух чисел
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Функция деления двух чисел
 * @param {number} a 1-ое число
 * @param {number} b 2-ое число
 * @returns {number} деления двух чисел
 */
function divide(a, b) {
    return a / b;
}

/**
 * Функция математических операций
 * @param {number} arg1 - 1-ое число
 * @param {number} arg2 - 2-ое число
 * @param {string} operation - тип математической операции
 * @returns {number} результать вычисления математической операции
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'add':
            return add(arg1, arg2);
        case 'reduce':
            return reduce(arg1, arg2);
        case 'divide':
            return divide(arg1, arg2);
        case 'multiply':
            return multiply(arg1, arg2);
    }
}

console.log(mathOperation(6, 2, 'add'));
console.log(mathOperation(6, 2, 'reduce'));
console.log(mathOperation(6, 2, 'multiply'));
console.log(mathOperation(6, 2, 'divide'));