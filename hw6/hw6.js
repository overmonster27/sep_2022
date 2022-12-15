// // const str = "наслаждение";
//
// // const cutString = (str, size) => {
// //   let tempStr = "";
// //   const arr = [];
//
// //   for (i = 0; i < str.length; i++) {
// //     if (tempStr.length === size) {
// //       arr.push(tempStr);
// //       tempStr = "";
// //     } else if (str.length - i + 1 < 3) {
// //       arr.push(str.slice((str.length - i + 1)));
// //     }
//
// //     tempStr += str[i];
// //   }
// //   return arr;
// // };
// // console.log(cutString(str, 3));
//
// // - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// //     document.writeln(delete_characters(str, 7)); // Каждый
//
// // let str = 'Каждый охотник желает знать';
// //     const delete_characters = (str, length)=>{
// //          return str.substring(0,length);
//
// //     }
// // console.log(delete_characters(str, 7));
//
// // // - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
// //    let str = "HTML JavaScript PHP";
// // //    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// // str.toUpperCase
// // let insert_dash = (str)=>{
// //     return str.toUpperCase().replace(' ', '-')
// // }
// // console.log(insert_dash(str));
//
// // - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// // let str = 'when'
// // let slise =(str)=>{
// //     let first = str[0];
// //     let rest = str.substring(1,str.length);
// //     return first.toUpperCase().concat(rest);
// // }
// // console.log(slise(str));
//
// // // - Дано список імен.
// // let n1 = 'Harry..Potter'
// // let n2 = 'Ron---Whisley'
// // let n3 = 'Hermione__Granger'
// // // Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// // // let n1 = 'Harry Potter'
// // // let n2 = 'Ron Whisley'
// // // let n3 = 'Hermione Granger'
//
// // const normalize =(name)=>{
// //     let regEx = /\W+/
// //     return name.replace(regEx, ' ')
// // }
// // console.log(normalize(n2));
//
// // - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// // let random = () => {
// //   let arr = new Array(7).fill();
// //   return arr.map((el) => Math.floor(Math.random() * 100));
// // };
// // console.log(random());
//
// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
//
// // let random = () => {
// //   let arr = new Array(7).fill();
// //   return arr.map((el) => Math.floor(Math.random() * 100)).sort();
// // };
// // console.log(random());
//
// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter,
// // залишивши тільки парні числа (без 0!)
//
// // let random = () => {
// //   let arr = new Array(7).fill();
// //   return arr.map((el) => Math.floor(Math.random() * 100)).filter(value => value % 3 === 0 && value !== 0);
// // };
// // console.log(random());
//
// // - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
//
// // let str = 'дайте в руки мнє баян';
// // const up = (str) => str.split(' ').map(value => value[0].toUpperCase() + value.slice(1)).join(' ');
// // console.log(up(str));
//
// // - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
// //  наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру
// //   (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
//
// // // Протестувати на значеннях
// // someemail@gmail.com
// // someeMAIL@gmail.com
// // someeMAIL@i.ua
// // some.email@gmail.com
//
// // const validator = (str) =>{
// // let newStr = str.toLowerCase();
// // if (!newStr.startsWith('@')  && newStr.includes('.', newStr.indexOf('@') + 3)){
// //     console.log('valid');
// // }else {
// //     console.log('not valid');
// // }
// // }
//
// // validator('omeemail@gmail.com');
// // validator('omeeMAIL@gmail.com');
// // validator('omeeMAIL@i.ua');
// // validator('ome.email@gmail.com');
//
// // Примітка
// // Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
// // let coursesArray = [
// //              {
// //                  title: 'JavaScript Complex',
// //                  monthDuration: 5,
// //                  hourDuration: 909,
// //                  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
// //              },
// //              {
// //                  title: 'Java Complex',
// //                  monthDuration: 6,
// //                  hourDuration: 909,
// //                  modules: ['html',
// //                      'css',
// //                      'js',
// //                      'mysql',
// //                      'mongodb',
// //                      'angular',
// //                      'aws',
// //                      'docker',
// //                      'git',
// //                      'java core',
// //                      'java advanced']
// //              },
// //              {
// //                  title: 'Python Complex',
// //                  monthDuration: 6,
// //                  hourDuration: 909,
// //                  modules: ['html',
// //                      'css',
// //                      'js',
// //                      'mysql',
// //                      'mongodb',
// //                      'angular',
// //                      'aws',
// //                      'docker',
// //                      'python core',
// //                      'python advanced']
// //              },
// //              {
// //                  title: 'QA Complex',
// //                  monthDuration: 4,
// //                  hourDuration: 909,
// //                  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
// //              },
// //              {
// //                  title: 'FullStack',
// //                  monthDuration: 7,
// //                  hourDuration: 909,
// //                  modules: ['html',
// //                      'css',
// //                      'js',
// //                      'mysql',
// //                      'mongodb',
// //                      'react',
// //                      'angular',
// //                      'aws',
// //                      'docker',
// //                      'git',
// //                      'node.js',
// //                      'python',
// //                      'java']
// //              },
// //              {
// //                  title: 'Frontend',
// //                  monthDuration: 4,
// //                  hourDuration: 909,
// //                  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
// //              }
// //          ];
// // відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//
// // const sort = (arr) => arr.sort((a,b) => a.modules.length - b.modules.length);
// // console.log(sort(coursesArray));
//
// // - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// // let symb = "о";
// // let str = "Астрономия это наука о небесных объектах";
//
// // const counter = (str, symb) => {
//
// // let count = 0;
// // let arr = str.split('')
// // for (const i of arr) {
// //     if (i == symb) {
// //         count ++
// //     }
// // }return count
// // }
// // console.log(counter(str,symb));
// // document.writeln(count(str, symb)) // 5
//
// // - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// // document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
//
// // let str = "Сила тяжести приложена к центру масс тела";
//
// // const cutString = (string, n) => string.split(' ').splice(0, n).join(' ');
// // console.log(cutString(str,5));
//
// // -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
//
// let books = [{
//     name: "Harry Potter and Sorcerer Stone",
//     pages: 324,
//     genre: "fantasy",
//     author: ["Stephen King", 'Fedoruk Ihor', 'poffjhspeof'],
// }, {
//     name: "A brief history of Time", pages: 212, genre: "popular science", author: ["Stephen King"],
// }, {
//     name: "Fahrenheit 451",
//     pages: 249,
//     genre: "sci-fi",
//     author: ["Stephen King", 'Fedoruk Ihor', 'fpouasefhsepo', 'pseiufhsp', 'aseopufhoepf'],
// }, {
//     name: "The Shining", pages: 688, genre: "horror novel", author: ["Stephen King", 'Fedoruk Ihor']
// },];
//
// // -знайти наібльшу книжку.
//
// // const bigegst = (arr) => arr.sort((a,b) => b.pages - a.pages)[0];
// //     console.log(bigegst(books));
//
// // - знайти книжку/ки з найбільшою кількістю жанрів
//
// const genre = (arr) => arr.sort((first, second) => second.genre.length - first.genre.length)[0]
// console.log(genre(books));
//
// // - знайти книжку/ки з найдовшою назвою
//
// const nameLength = (arr) => arr.sort((a, b) => b.name.length - a.name.length)[0];
// console.log(nameLength(books))