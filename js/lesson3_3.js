"use strict";

/*
 Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
 только у вашей горки должно быть 20 рядов, а не 5:

 */

let string = "x";
console.log(string);

for (let i = 0; i < 20; i++) {
    for (let j = 0; j <= i; j++) {
        string = string + "xx";
    }
    console.log(string);
    string = "x";
}