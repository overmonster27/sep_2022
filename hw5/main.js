// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б


// rectangle = (a, b) => a * b
// console.log(rectangle(2, 30))

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// circle = (r) => 2 * Math.PI * r;
// console.log(circle(3));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// cilinder = (h, r) => 2 * h * r * Math.PI;
// console.log(cilinder(4, 4));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr = [1, 2, 'aiodj', true, NaN, null];
//
// function iterator(iteratorArr) {
//     for (const iteratorArrElement of iteratorArr) {
//         console.log(iteratorArrElement);
//     }
// }
//
// iterator(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// function Paragraph(text) {
//     console.log(text)
// }
//
// Paragraph('awdasefdsefsef')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function List(params, number) {
//     document.write('<ul>')
//
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${params}</li>`)
//     }
//     document.write('</ul>')
// }
//
// List('text', 5);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function List(array) {
//     document.write('<ul>')
//
//     for (arrayElement of array) {
//
//         document.write(`<li>${arrayElement}</li>`)
//
//     }
//     document.write('</ul>')
// }
//
// List(arr)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let users = [
//     {
//         id: 123456789,
//         name: 'oleh',
//         age: 24
//     }, {
//         id: 987654321,
//         name: 'yura',
//         age: 12
//     }, {
//         id: 951753825,
//         name: 'vasya',
//         age: 43
//     }
// ];
//
// function obj(object) {
//     for (const objectElement of object) {
//         document.write(`<div>${objectElement.id}, ${objectElement.name}, ${objectElement.age}</div>`)
//     }
// }
//
// obj(users);


// - створити функцію яка повертає найменьше число з масиву

// let nums = [23, 4, 5, 64, 453, 23, 3];
//
// const minNum = (numbers) => {
//     let min = numbers[0];
//     for (let number of numbers) {
//         if (number < min) min = number
//     }
//     return min;
// }
// console.log(minNum(nums));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let summ = (numbers) => {
//     let result = 0;
//     for (const number of numbers) {
//         result = number + result
//     }
//     return result;
// }
// console.log(summ(nums));



