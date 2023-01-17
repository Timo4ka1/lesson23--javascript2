"use strict"

console.log('=Поиск символа=');
let newString = `Привет! Как дела?`;
console.log(newString[0]);

console.log('')
console.log('=Узнать длинну строки=');
console.log(newString.length);

console.log('')
console.log('=Вырезать часть строки и показать её=');
console.log(newString.slice(0, 7));

console.log('')
console.log('=Есть ли в строке это=');
console.log(newString.includes(`При`));
console.log(newString.includes(`как`));

console.log('')
console.log('=Написать строку капсом или наоборот=');
console.log(newString.toUpperCase());
console.log(newString.toLowerCase());

console.log('')
console.log('=Заменить символ на другое=');
console.log(newString.replace(`П`, `К`));
let newStringHash = `#Привет! Как дела?`;
console.log(newStringHash.replace(`#`, ``));

console.log('')
console.log('=Какой по счёту символ в строке=');
console.log(newString.search('а'));

console.log('')
console.log(`========== МАТЕМАТИКА =============`);

console.log('=Максимальное значение среди цифр=');
console.log(Math.max(1, 2, -3));

console.log('')
console.log('=Минимальное значение среди цифр=');
console.log(Math.min(1, 2, -3));

console.log('')
console.log('=Максимальное значение среди цифр V2=');
let numbers = Math.max(-1, 0, 1, 2, 3);
console.log(numbers);

console.log('')
console.log('=Минимальное значение среди цифр V2=');
numbers = Math.min(-1, 0, 1, 2, 3);
console.log(numbers);

console.log('')
console.log('=Вывести случайное число от 0 до 1=');
console.log(Math.random());

console.log('')
console.log('=Модуль числа=');
let someNumber = -25.4;
console.log(Math.abs(someNumber));

console.log('')
console.log('=Округлить число=');
console.log(Math.round(someNumber));

console.log('')
console.log('=Округлить до наиб. значения=');
console.log(Math.floor(someNumber));

console.log('')
console.log('=Округлить до наим. значения=');
console.log(Math.ceil(someNumber));

console.log('')
console.log(`========== ПАРСЕРЫ =============`);
console.log('=Float - нецелые значения=');
let someVar = 24.6;
console.log(parseFloat(someVar));
console.log('');
console.log('=Int - целые значения=');
console.log(parseInt(someVar));

console.log('')
let someString = `19.05px`;
console.log('=Тип строки `19.05px`=');
console.log(typeof someString);
console.log('=parseFloat со строкой `19.05px`=');
console.log(parseFloat(someString));
console.log('=parseInt со строкой `19.05px`=');
console.log(parseInt(someString));

console.log('')
someNumber = `123.9`;
console.log('=Тип строки `123.9`=');
console.log(typeof someNumber);
console.log('=Перевод строки `123.9` в число=');
let experimentNumber = (parseFloat(someNumber));
console.log(typeof experimentNumber);

console.log('')
someNumber = `7538`;
console.log('=Тип строки `7538`=');
console.log(typeof someNumber);
console.log('=Перевод строки `7538` в число=');
experimentNumber = (parseInt(someNumber));
console.log(experimentNumber);
console.log('=Тип числа 7538=');
console.log(typeof experimentNumber);

console.log('')
console.log('=Что если начать строку для парсера с `tk`=');
someNumber = `tk123`;
console.log('=Тип строки `tk123`=');
console.log(typeof someNumber);
experimentNumber = (parseInt(someNumber));
console.log('=Вывод полученного парсера=');
console.log(experimentNumber);
console.log('')

console.log(`========== ОПЕРАТОРЫ =============`);

let varOne, varTwo;
varOne = `10`;
varTwo = `7`;
console.log('=Оператор вычисления=');
let sum = varOne - varTwo;
console.log(sum);

console.log('')
console.log('=Оператор умножения=');
console.log(varOne * varTwo);

console.log('')
console.log('=Оператор деления=');
console.log(varOne / varTwo);

console.log('')
console.log('=Оператор остатка от деления=');
console.log(varOne % varTwo); //залишок від ділення

console.log('')
console.log('=Что если к числу прибавить строку с числом "11"=');
varOne = 19;
varTwo = `11`;
sum = varOne + varTwo;
console.log(sum);

console.log('')
console.log('=Превращаем строку "11" в число благодаря "+" перед переменной строки=');
sum = varOne + +varTwo;
console.log(sum);

console.log('')
console.log('=Превращаем строку "11" в число благодаря "Number()" перед переменной строки=');
sum = varOne + Number(varTwo);
console.log(sum);

console.log('')
console.log('=Превращаем число 19 в троку и пирбавляем к строке "11". Делаем из них числа, ставя "+" перед названием каждой переменной=');
varOne = `19`;
sum = +varOne + +varTwo;
console.log(sum);

console.log('')
someNumber = 19
console.log('=Что если поставить "++" перед названием переменной, содержащей число 19=');
console.log(++someNumber);
console.log('=Что если поставить "--" перед названием переменной, содержащей число 19=');
console.log(--someNumber);

console.log('')
someNumber = `4`;
console.log('=Что если поставить "++" перед названием переменной, содержащей строку "4"=');
console.log(++someNumber);
console.log('=Что если поставить "++" после названия переменной, содержащей число 19...=');
console.log(someNumber++);
console.log('=...а потом вывести это без "++"=');
console.log(someNumber);

console.log('')
console.log('=Приоритетнсоть операторов=');
let task = 2 * 5 - 10 / 2 + 7;
console.log(task);

console.log('')
console.log('=Приоритетнсоть операторов, учитывая скобки=');
task = 2 * (5 - 10) / 2 + 7;
console.log(task);

console.log('')
console.log('=Приоритетнсоть операторов, учитывая "трансформацию" строки "10" в число=');
task = 2 * 5 - +`10` / 2 + 7;
console.log(task);

console.log('')
console.log('=Приоритетнсоть операторов с учётом переменной "num = 5", перед которой поставлено "++"=');
let num = 5;
task = 2 * ++num - +`10` / 2 + 7;
console.log(task);

console.log('')
console.log('=Операция "<" =');
task = 5 < 10;
console.log(task);

console.log('')
console.log('=Операция ">" =');
task = 5 <= 5;
console.log(task);

console.log('')
console.log('=Операция ">=" =');
task = 5 >= 6;
console.log(task);

console.log('')
console.log('=Операция "<=" =');
task = 5 > 10;
console.log(task);

console.log('')
console.log('=Операция "==" =');
task = 2 == 4;
console.log(task);

console.log('')
console.log('=Операция "!==" =');
task = 2 !== 4;
console.log(task);

console.log('')
console.log('=Операция "==" при сравнении числа 6 и строки "6" =');
let result = 6 == "6";
console.log(result);

console.log('')
console.log('=Операция "===" при сравнении числа 6 и строки "6" =');
result = 6 === "6";
console.log(result);

console.log('')
console.log('=Операция "!==" при сравнении числа 6 и строки "6" =');
result = 6 !== "6";
console.log(result);
console.log('')

console.log(`========== ЛОГИЧЕСКИЕ ОПЕРАТОРЫ =============`);

console.log('=Как булеан видит число 0=');
let number = 0;
console.log(Boolean(number));

console.log('')
console.log('=Что если перед нулём поставить "!". (не flase это true)=');
number = !0;
console.log(Boolean(number));

console.log('')
console.log('=Логический опреатор "||" (или) вернёт первый найденный true =');
let or = 5 || 6;
console.log(or);

console.log('')
console.log('=В случае 0 || 6 логический опреатор "||" (или) вернёт первый найденный true (6), потому что 0 - всегда false =');
or = 0 || 6;
console.log(or);

console.log('')
console.log('=Логический опреатор "&&" (и) вернёт true, если оба элемента = true =');
let and = 1 && 2;
console.log(Boolean(and));
console.log(and);

console.log('')
console.log('=Как будет вести себя оператор "И", если сделать `"" && 2` ("" - всегда fale, поэтому возвращает первое значение false)=');
and = "" && 2;
console.log(Boolean(and));
console.log(and);

console.log('=Как будет вести себя оператор "И", если сделать `5 && 0` (0 - всегда fale, поэтому возвращает первое значение false)=');
console.log('')
and = 5 && 0;
console.log(Boolean(and));
console.log(and);

console.log('')
console.log('=|| останавливается, найдя первую "правду", а && - превую "ложь"=');

console.log(`========== УСЛОВИЯ =============`);
console.log('Задача 1:');
console.log('Если первый вариант будет меньше нуля, то так и напишут');
console.log('')
varOne = 5;
varTwo = 10;
if (varOne > 0) {
   result = varOne + varTwo;
   console.log(result);
}
else {
   console.log(`Вариант 1 меньше 0`);
}

console.log('')
console.log('=Задача 2:');
console.log('Если все числа положительные, будет прибавление; если одно из них будет = 0, то так и напишет; если одно из них меньше нуля, то так и напишут');
console.log('')
varOne = 5;
varTwo = 0;
if (varOne > 0 && varTwo > 0) {
   result = varOne + varTwo;
   console.log(result);
}
else if (varOne === 0 || varTwo === 0) {
   console.log(`Одно из чисел равно 0`)
}
else {
   console.log(`Одно из чисел меньше 0`);
}

console.log('')
console.log('=Задача 3:=');
console.log('Если возраст будет меньше 18 - не пропустят; если равен 18, то пустят со словами, что тебе повезло и ты можешь проходить; если 19 и больше, то скажут, что ты дед и можешь спокойно проходить');
console.log('')
console.log(`Вход в клуб только от 18-и лет!`)
let age;
console.log(`Введите свой возраст:`)
age = 19;
if (age < 18) {
   console.log(`Вам меньше 18 лет. Нельзя сюда!`)
}
else if (age === 18) {
   console.log(`Ну, ты был близок, но тебе уже 18. Можешь входить.`)
}
else {
   console.log(`О, да тебе уже давно больше 18. Входи.`)
}

console.log('')
console.log('=Задача 4:=');
console.log('Если количество символов в строке будет больше 100 выведется "true", если меньше - "false"');
console.log('')
someString = `Привет! Как дела? У меня вот всё отлично!`
if (someString.length >= 100) {
   console.log(`В вашей строке больше, чем 100 символов`)
}
else if (someString.length === 100) {
   console.log(`В вашей строке ровно 100 символов`)
}
else {
   console.log(`В вашей строке меньше 100 символов`)
}

console.log(`========== ЦИКЛ FOR =============`);

console.log('=Пример 1:=');
for (let i = 0; i < 3; ++i) {
   console.log(i);
}

console.log('')
console.log('=Пример 2:=');

someString = `Привет! Как дела?`;
console.log(someString);
console.log(`Количество символов в строке: ${someString.length}`)
for (let i = 0; i < someString.length; i++) {
   console.log(i);
};

console.log('=А теперь выведем ВСЕ символы: =');
for (let i = 0; i < someString.length; ++i) {
   console.log(someString[i]);
}

console.log(`========== Домашка 1: =============`);
console.log('35' + - "22");

console.log('')
console.log('35' * "22");

console.log('');
console.log('558' > '22++')

console.log('');
let userCounter = 0;
let newUsers = userCounter++;
console.log(newUsers);

console.log('');
console.log(!false && 11 || 18 && !'');

console.log('');
let name = 0;
console.log(name ?? "Без имени");
console.log('');

console.log(`========== Домашка 2: =============`);
if (1 === "1") {
   console.log('Истина!')
} else {
   console.log('Ложь!')
}

console.log('');
if (5 == "5") {
   console.log('Истина!');
} else {
   console.log('Ложь!')
}

console.log('');
if (0) {
   console.log('Ложь!');
} else if (" ") {
   console.log('Истина!')
}

console.log(`========== Домашка 3: =============`);
let i;
for (let i = 1; i <= 5; i++) {
   console.log(i)
}

console.log('');
num = 8;
while (num) {
   console.log(num);
   num--
}

console.log('');
firstFor: for (let num = 0; num < 2; num++) {
   for (let size = 0; size < 3; size++) {
      if (size == 1) break firstFor;
      console.log(size)
   }
}

console.log(`========== Домашка 4: =============`);

console.log('');
let numOne = Math.ceil(1.005 * 100) / 100;
console.log(numOne);

console.log('');
let value = "135.58px";
console.log(parseFloat(value));
console.log(typeof parseFloat(value));

console.log('');
value = 58 + `Фрилансер`;
if (isNaN(value)) {
   console.log('Результат выражения NaN')
}

console.log('');
console.log(Math.max(10, 58, 39, -150, 0))

console.log('');
console.log(Math.floor(58.858))

console.log(`========== Домашка 5: =============`);

console.log('');
let fls = 'фрилансер';
let text = `Привет! Я ${fls}`
console.log(text)

console.log('');
text = 'фрилансер'
console.log(text[5]);

console.log('');
text = 123 + '456';
console.log(text)
//Правильно
text = 123 + +'456';
console.log(text);
//или
text = 123 + Number('456');
console.log(text);

console.log('');
text = "фрилансер"
console.log(text.toUpperCase());

console.log('');
text = 'фрилансер';
console.log(text.slice(3, 6));

console.log('');
text = 'фриалансер';
console.log(text.includes('лан', 4));