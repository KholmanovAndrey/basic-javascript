"use strict";


// "a" in windows - создаем переменную объекта window: window.a
// "a" in window = true, а с ! = false, поэтому не заходим в условие
if (!("a" in window)) {
    var a = 1;
}
alert(a); // undefined


// переменной и присваеваем функцию a с аргументом x
var b = function a(x) {
    x && a(--x);
};
alert(a); // ошибка мы не можем вывести а, потому что она внутри функции b


function a(x) {
    return x * 2;
}
var a; // в переменную a ложиться ссылка на функцию
alert(a); // возвращает функцию


function b(x, y, a) {
    arguments[2] = 10; // arguments[2] - это a, присваеваем ему значение 10
    alert(a); // выаодим 10
}
b(1, 2, 3); // 10

function a() {
    alert(this); // this - это объект windows
}
a.call(null); // переопределяем this как null
