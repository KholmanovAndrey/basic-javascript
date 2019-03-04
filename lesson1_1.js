"use strict";

let tC = +prompt('Введите температуру в градусах по Цельсию :');
let tF = (9 / 5) * tC + 32;

alert(`Температура по Фаренгейту: ${tF.toFixed(1)}`);