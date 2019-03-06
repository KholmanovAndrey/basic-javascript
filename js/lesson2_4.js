"use strict";

/*
 Реализовать основные 4 арифметические операции (+, -, /, *)
 в виде функций с двумя параметрами. Обязательно использовать оператор return.
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

console.log(add(3, 5));
console.log(reduce(10, 5));
console.log(multiply(10, 5));
console.log(divide(10, 5));

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