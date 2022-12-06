// /*--------Функції стрінгів----------------------------*/
//
// let str = '   Lorem ipsum dolor    '
//
// // Верхній регістр
// let toUpperCase = str.toUpperCase();
// console.log(toUpperCase);
//
// // Нижній регістрd
// let toLowerCase = str.toLowerCase();
// console.log(toLowerCase);
//
// // Початок з символу
// let startsWith = str.startsWith('L');
// console.log(startsWith);
//
// // Закінчується на
// let endsWith = str.endsWith('lor');
// console.log(startsWith);
//
// // Вирізати елементи стрінги (з - по)
// let substring = str.substring(4, 15);
// console.log(substring);
//
// // Чи має такий елемент
// let indexOfFirst = str.indexOf('r');
// console.log(indexOfFirst);
//
// let indexOfSecond = str.indexOf('do');
// console.log(indexOfSecond);
//
// // За допомогою індекс оф і сабстрінг вирізати стрінгу (з - по)
// console.log(str.substring(indexOfFirst, indexOfSecond));
//
// // який символ знаходиться під індексом 10
// let charAt = str.charAt(10);
// console.log(charAt);
//
// let number = '(095)209-42-00'
// // Перетворити всі елементи (Із (перший елемент) - В (другий елемент))
// let newString = number.replaceAll('(', ' ')
//     .replaceAll(')',' ')
//     .replaceAll('-', ' ');
// console.log(newString);
//
// let obj = 'name:"oleh",age:31';
// // Розділяє стрінгу по знаку указаному в сепараторі і ПЕРЕТВОРЮЄ НА МАСИВ
// let split = obj.split(',')
// console.log(split);

// Вирізає ТІЛЬКИ ЗАЙВІ ПРОБІЛИ НА ПОЧАТКУ І В КІНЦІ СТРІНГИ
// let trim  = str.trim();
// console.log(trim)


/*--------Функції масивів----------------------------*/
// Перевірка чи це масив
// Array.isArray([]); // true
// Array.isArray({}); // false
//
// // Функція .push додає елемент ЗАВЖДИ в кінець масиву
// let arr = ['asd0'];
// arr.push('asd1');
// arr.push('asd2');
// arr.push('asd3');
// arr.push('asd4');
//
// console.log(arr)
//
// // Функція видаляє ЗАВЖДИ останній елемент з масиву
// arr.pop();
// console.log(arr);
//
// // Функція видаляє ЗАВЖДИ елемент з посатку масиву
// arr.shift();
// console.log(arr);
//
// // Функція додає елемент ЗАВЖДИ на початок масиву
// arr.unshift('newElement');
// console.log(arr)
//
// // Функція перетворює масив на стрінгу і розділяє елементи за допомогою заданого аргументу
// let join = arr.join(':')
// console.log(join);
//
// Функція зєднує два масиви
// let nums = [1,2,3,4];
// let newArr = arr.concat(nums);
// console.log(newArr);

let users = [
    {name: 'vasya', age: '31', status: false},
    {name: 'oleh', age: '56', status: true},
    {name: 'ihor', age: '12', status: false},
    {name: 'vika', age: '23', status: true},
    {name: 'yana', age: '45', status: false},
    {name: 'artem', age: '12', status: true},
    {name: 'yura', age: '41', status: true},
    {name: 'anya', age: '21', status: false},
    {name: 'koylya', age: '30', status: true},
    {name: 'ira', age: '43', status: false}
]
//
// // Функція вирізає обєкти з масиву в аргументах (з(елемент) по (елемент))
// // та по можливості можна додати скільки елементів скільки забажаєш
// // І повертає масив без вирізаних елементів
// let splice = users.splice(0,3, 'anyone element');
// console.log(splice)
//
// Функція дає можливісь почати перелік з кінця
// ПОВЕРТАЄ МАСИВ
// let arr = [11, 22, 33, 44, 55];
// let rev = arr.reverse();
// console.log(rev);
//
// arr.includes(11)// true

// Функція ітератор перебирає масив без виклику функції (ЗВИЧЙНА ФОРМА ЗАПИСУ)
// ПОВЕРТАЄ МАСИВ
// let fnIterator = (user) => {
//     console.log(user)
// }
// users.forEach(fnIterator)

// (КОРОТКА ФОРМА ЗАПИСУ)
// users.forEach((user) => console.log(user))

// Функція повертає висх користуваяів згідно заданї умовию && та статус true
// ПОВЕРТАЄ МАСИВ
// let filter = users.filter((user)=> user.age > 40 && user.status);
// console.log(filter);

// Функція приймає МАСИВ ОБЄКТІВ ітерує його і ПЕРЕТВОРЮЄ ЙОГО НА НОВИЙ МАСИВ
// Також в функцію можна передати нові парамеитри такі як index і тд)
// ПОВЕРТАЄ МАСИВ
//     users
//     .map((user, index) => ({id: index + 1, name: user.name, age: user.age}))
//     .filter(value => value.id % 2 === 0)
//     .forEach(value =>console.log(value))

// .map - претворює масиві міняє модель данних
// .filter - фільтрує данні
// .forEash - виводить (ОБЄКТ)

// Сортування масиву з МЕНШОГО ДО БІЛЬШОГО ( А-В )
// let sort1 = users.sort((user1, user2) => user1.age - user2.age)

// Сортування з БІЛЬШОГО ДО МЕНШОГО ( В - А )
// let sort2 = users.sort((user1, user2) => user2.age - user1.age)

// console.log(sort1);
// console.log(sort2);

/*--------------СОРТУВАННЯ ПО АЛФАВІТУ------------------*/
// console.log(users.sort(function (a, b) {
//     if (a.name < b.name) {
//         return -1; // якщо відємне то другий обьєкть більший ніж перший
//     }
//     if (a.name > b.name) {
//         return +1;// якщо значення + то преший обьєкт був більший ніж другий
//     }
//     if (a.name === b.name) {
//         return 0;// якщо 0 то вони рівні
//     }
// }))

// Функція REDUCE це функція перетворювач
// беремо інформацію із поля ЮЗЕР розділяємо і пушимо в АКОМУЛЯТОР
// і в кінці ми повертаємо акомулятор.

// Редюс зменшує кількість обєктів і перетворює на один обєкт або на масив.

// let reduce = users.reduce((accumulator, user) => {
//     accumulator.names.push((user.name));
//     accumulator.ages.push(user.name);
//     accumulator.statuses.push(user.status);
//     return accumulator
// },{names: [], ages: [], statuses:[]})
//
// console.log(reduce);


function validatePIN (pin) {
    // debugger;/
    if (!pin  || pin.length !== 4 && pin.length !== 6){
        return false
    }
    return pin.search(/\D/ig) === -1
}

console.log(validatePIN("12ty34"));
console.log(validatePIN("1111"));
