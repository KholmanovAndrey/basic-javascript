"use strict";

/*
 Объявить две переменные a и b и задать им целочисленные произвольные начальные значения.
 Затем написать скрипт, который работает по следующему принципу:
 - если a и b положительные, вывести их разность (ноль можно считать положительным числом);
 - если а и b отрицательные, вывести их произведение;
 - если а и b разных знаков, вывести их сумму;
 */

let a = 4, b = -5;

if (a >= 0 && b > 0) {
    console.log(`Разность между a и b = ${a - b}`);
} else if (a < 0 && b < 0) {
    console.log(`Произведение a и b = ${a * b}`);
} else if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
    console.log(`Сумма a и b = ${a + b}`);
}