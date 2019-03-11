"use strict";

/*
 Дан массив (создать такой же, с такими же значениями):

 const arr = [
 [2, 4, 6],
 [1, 5, 10],
 [7, 4, 1],
 ];

 Задания:
 1. Найти массив, у которого сумма всех чисел максимальна, вывести в console.log индекс этого массива.
 2. Получить и вывести в console.log минимальное значение найденное в массиве, который мы получили в первом пункте.

 */

const arr = [
    [-2, -444, -6],
    [-1, -555, -10],
    [-1, -4, -2]
];

const index = maxAdd(arr);
console.log(`Индекс = ${index}`);
const value = minValue(arr[index]);
console.log(`Минимальное значение = ${value}`);


/**
 * Функция поиска индекса массива, у которого сумма всех чисел максимальна
 * @param {object[]} array - массив с данными
 * @returns {number} Возвращаем index массива
 */
function maxAdd (array) {
    let maxAdd = 0;
    let currentAdd = 0;
    let index = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            currentAdd += array[i][j];
        }
        if (i === 0) {
            maxAdd = currentAdd;
        } else if (maxAdd < currentAdd) {
            maxAdd = currentAdd;
            index = i;
        }
        currentAdd = 0;
    }
    return index;
}


/**
 * Функция поиска минимального значение найденное в массиве
 * @param {object[]} array - массив данных
 * @returns {number} Возвращает минимальное значение
 */
function minValue (array) {
    let minValue = 0;
    for (let i = 0; i < array.length; i++) {
        if (minValue > array[i] || minValue === 0) {
            minValue = array[i];
        }
    }
    return minValue;
}