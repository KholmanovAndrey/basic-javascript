"use strict";

// число + число складываются и добавляются к строке как строка
console.log(10 + 10 + "10");

// посеридине строка, значит числа по краям прибавляются к строке как строки в начале и конце
console.log(10 + "10" + 10);

// число + число + преобразованная страка в число = матиматическое сложение // чисел
console.log(10 + 10 + +"10");

// -"" - преобразование в число (пустая сторока это -0) = при делений на 0 или -9 получается тип Infinity
console.log(10 / -"");

// +"2,5" преобразование в число невозможно из-за запятой, получаем NaN = любая арефметическая операция с NaN дает NaN
console.log(10 / +"2,5");