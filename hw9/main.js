// - є масив

// let simpsons = [{
//     name: 'Bart',
//     surname: 'Simpson',
//     age: 10,
//     info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//     photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
// }, {
//     name: 'Homer',
//     surname: 'Simpson',
//     age: 40,
//     info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//     photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
// }, {
//     name: 'Marge',
//     surname: 'Simpson',
//     age: 38,
//     info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//     photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
// }, {
//     name: 'Lisa',
//     surname: 'Simpson',
//     age: 9,
//     info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//     photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
// }, {
//     name: 'Maggie',
//     surname: 'Simpson',
//     age: 1,
//     info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//     photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
// },];


// let divElement = document.createElement('div');
//
// for (const elementSimpson of simpsons) {
//     let innerDiv = document.createElement('div');
//     innerDiv.className = 'member';
//
//     let header = document.createElement('h1');
//     header.innerHTML = `${elementSimpson.name} ${elementSimpson.surname}`;
//
//     let age = document.createElement('h2');
//     age.innerHTML = `${elementSimpson.age}`;
//
//     let infoField = document.createElement('h3');
//     infoField.innerHTML = `${elementSimpson.info}`;
//
//     let picture = document.createElement('img');
//     picture.className = 'picrute';
//     picture.src = `${elementSimpson.photo}`;
//
//     innerDiv.append(header, age, picture, infoField);
//     divElement.append(innerDiv);
// }
//
// document.body.appendChild(divElement);

// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];


// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
// ------------------
//
// let main = document.createElement('div');
//
// for (const arrElement of coursesArray) {
//
//     let middle = document.createElement('div');
//     middle.innerHTML = `${arrElement.title}`;
//
//     let middle2 = document.createElement('div');
//     middle2.innerHTML = `${arrElement.monthDuration} ${arrElement.hourDuration}`
//
//     let middleUl = document.createElement('ul');
//     for (const moduleElement of arrElement.modules) {
//         let middleLi = document.createElement('li');
//
//         middleLi.innerHTML = `${moduleElement}`
//
//         middleUl.appendChild(middleLi);
//     }
//
//     main.append(middle, middle2, middleUl)
//
// }
// document.body.append(main)

//
//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//


// - Є масив:
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

// let arr = ['Main', 'Products', 'About us', 'Contacts']
//
// let elementsByClassName = document.getElementsByClassName('main')[0];
// for (const string of arr) {
//     let liElement = document.createElement('li');
//     liElement.innerHTML = string;
//
//     elementsByClassName.appendChild(liElement);
// }


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let mainDiv = document.createElement('div');
// for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
//     let header = document.createElement('h1');
//     header.innerHTML = `${coursesAndDurationArrayElement.title}`;
//
//     let underHeader = document.createElement('h2');
//     underHeader.innerHTML = `${coursesAndDurationArrayElement.monthDuration}`;
//
//     mainDiv.append(header, underHeader);
// }
//
// document.body.appendChild(mainDiv);
//
// -Є
// масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// let main = document.createElement('div');
// main.className = 'item'
// for (const element of coursesAndDurationArray) {
//     let header = document.createElement('h1');
//     header.className = 'heading';
//     header.innerHTML = `${element.title}`;
//
//     let paragraph = document.createElement('p');
//     paragraph.className = 'description';
//     paragraph.innerHTML = `${element.monthDuration}`;
//
//     main.append(header, paragraph)
// }
// document.body.appendChild(main)


//
//
//
// -----------
//
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

// let main = document.createElement('div');
// main.id = 'text'
// main.innerText = 'Push';
//
// main.onclick = () => {
//     main.style.display = 'none';
//
// }
// document.body.appendChild(main);
//

//
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
//     та повідомити про це користувача
//
// let inputElement = document.createElement('input');
// let buttonElement = document.createElement('button');
// buttonElement.innerText = 'CHECK';
// buttonElement.onclick = () => {
//     if (inputElement.value >= 18) {
//         alert('GO');
//     } else if (!inputElement.value) {
//         alert('false')
//     } else if (inputElement < 18) {
//         alert('STOP');
//     }
// }
// document.body.append(inputElement, buttonElement);


// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)


let row = document.createElement('input');
let column = document.createElement('input');
let inText = document.createElement('input');
let button = document.createElement('button');
button.innerText = 'Check';

document.body.append(row, column, inText, button);

button.onclick = function (e) {
    e.preventDefault()

    let field1 = row.value;
    let field2 = column.value;
    let field3 = inText.value;

    function Creator(row1, row2, elementText) {
        let tableElement = document.createElement('table');

        for (let i = 0; i < row1; i++) {
            let tableRow = document.createElement('tr');
            tableElement.appendChild(tableRow)

            for (let j = 0; j < row2; j++) {
                let tableColumn = document.createElement('td');
                tableColumn.innerText = `${elementText}`;
                tableColumn.style.border = '2px solid red';
                tableRow.append(tableColumn);
            }
        }
        document.body.appendChild(tableElement);
    }

    Creator(field1, field2, field3);
}
