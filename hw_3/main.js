// - Є змінна х, якій ви надаєте довільне числове значення.
// let x = 0;
// if ( x !==0 ){
//     console.log(true);
// }else {
//     console.log(false);
// }
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// - Дано змінну  яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = +prompt( 'how much time?');
// if ( time > 0 && time < 15){
//     console.log('first');
// }else if ( 15 <= time && time < 30 ){
//     console.log('second');
// }else if ( 30 <= time && time < 45 ){
//     console.log('third');
// }else if ( 45 <= time && time < 59 ){
//     console.log('fourth');
// // }

// // - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = prompt("what  date?");
//  if (1<=day && day < 10){
//      console.log(1);
//  }else if ( 10 <= day && day < 20){
//      console.log(2);
//  }else if ( 20<= day && day <= 30){
//      console.log(3);
//  }

// // - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// //
// switch (prompt('day')){
//     case '1':
//         console.log('sun');
//         break;
//     case '2':
//         console.log('leg');
//         break;
//     case '3':
//         console.log('sky');
//         break;
//     case '4':
//         console.log('cat');
//         break;
//     case '5':
//         console.log('notebook');
//         break;
//     case '6':
//         console.log('ball');
//         break;
//     case '7':
//         console.log('box');
//         break;
// }

// //     - Користувач вводить або має два числа.
// //         Потрібно знайти та вивести максимальне число з тих двох .
// //         Також потрібно врахувати коли введені рівні числа.
//
// let a = (6);
// let b = (6);
// if (a > b) {
//     console.log(a);
// }
// if (b > a) {
//     console.log(b);
// }
// else if (b === a){
//     console.log('equal');
// }