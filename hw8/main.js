// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

//
// function User (id, name, surname, email, phone) {
//     this.id = id;
//     this.nme = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let arr = [];
//
// let user1 = new User(2, 'Ihor', 'Fedoruk', 'overmonster@ukr.net', '0923423423400');
// let user2 = new User(6, 'Polina', 'Pazich', 'awdawdawdawd@ukr.net', '09523434234');
// let user3 = new User(5, 'Dinaska', 'Andreev', 'awdwdawdw@ukr.net', '095235235230');
// let user4 = new User(2, 'Victoria', 'Fedoruk', 'awdawdawdawda@ukr.net', '023523594200');
// let user5 = new User(1, 'Dashka', 'Andreeva', 'awdawdads@ukr.net', '09520234350');
// let user6 = new User(3, 'Artem', 'Levadniy', 'awdwdawdas@ukr.net', '342354235');
//
// arr.push(user1, user6, user4, user5, user6, user3, user2);
//
// console.log(arr);
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// console.log(arr.filter(value => value.id % 2 === 0));
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// console.log(arr.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order
//     }
// }
//
// let arr = [];
//
// let user1 = new Client(2, 'Ihor', 'Fedoruk', 'overmonster@ukr.net', '0923423423400', ['apple', 'banana', 'cery', 'pinapple', 'orenge', 'strawberry']);
// let user2 = new Client(6, 'Polina', 'Pazich', 'awdawdawdawd@ukr.net', '09523434234', ['apple', 'strawberry']);
// let user3 = new Client(5, 'Dinaska', 'Andreev', 'awdwdawdw@ukr.net', '095235235230', ['apple', 'banana', 'cery', 'strawberry']);
// let user4 = new Client(2, 'Victoria', 'Fedoruk', 'awdawdawdawda@ukr.net', '023523594200', ['cery', 'pinapple', 'orenge', 'strawberry']);
// let user5 = new Client(1, 'Dashka', 'Andreeva', 'awdawdads@ukr.net', '09520234350', ['apple', 'banana', 'cery', 'orenge', 'strawberry']);
// let user6 = new Client(3, 'Artem', 'Levadniy', 'awdwdawdas@ukr.net', '342354235', ['apple', 'banana', 'cery', 'pinapple', 'orenge']);
//
// arr.push(user1, user2, user3, user4, user5, user6);
// // console.log(arr);
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// console.log(arr.sort((a,b) =>a.order.length - b.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// function Car(model, produser, year, topSpeed, engineSize) {
//     this.model = model;
//     this.produser = produser;
//     this.year = year;
//     this.topSpeed = topSpeed;
//     this.engineSize = engineSize;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.topSpeed} на годину`)
//     }
//     this.info = function () {
//         console.log(this);
//     }
//     this.increaseMaxSpeed = function (upSpeed) {
//         console.log(this.topSpeed += upSpeed);
//     }
//     this.chengeYear = function (newYear) {
//         console.log(this.year = newYear);
//     }
//     this.driver = function (driver) {
//         this.driver = driver;
//     }
//
//
// }
//
// let car = new Car('Reanult', 'France', 2010, 210, 1.4);
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(30);
// car.chengeYear(2015);
// car.driver('Ihor');

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model, produser, year, topSpeed, engineSize) {
//         this.model = model;
//         this.produser = produser;
//         this.year = year;
//         this.topSpeed = topSpeed;
//         this.engineSize = engineSize;
//     }
//     drive () {
//         console.log(`їдемо зі швидкістю ${this.topSpeed} на годину`)
//     }
//     info(){
//         console.log(this);
//     }
//     increaseMaxSpeed  (upSpeed) {
//         console.log(this.topSpeed += upSpeed);
//     }
//     chengeYear (newYear) {
//         console.log(this.year = newYear);
//     }
//     driver  (driver) {
//         this.driver = driver;
//     }
//
// }
//
// let newCar = new Car('Reanult', 'France', 2010, 210, 1.4)
// newCar.drive();
// newCar.info();
// newCar.chengeYear(2015);
// newCar.increaseMaxSpeed(35);
// newCar.driver('Victoria');
// console.log(newCar);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Cinderella {
//     constructor(name, age, footSize,) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// let cinArray = [
//     new Cinderella('liza', 29, 41),
//     new Cinderella('nastya', 38, 42),
//     new Cinderella('katya', 58, 43),
//     new Cinderella('victoria', 17, 44),
//     new Cinderella('leron', 45, 35),
//     new Cinderella('ira', 34, 36),
//     new Cinderella('yana', 65, 37),
//     new Cinderella('sasha', 11, 38),
//     new Cinderella('vasilina', 12, 39),
//     new Cinderella('galya', 25, 40),
// ];
//
// class Prince {
//     constructor(name, age, findSize) {
//         this.name = name
//         this.age = age
//         this.findSize = findSize
//     }
// }
//
// let newPrince = new Prince('Taras', 26, 39);
// //
// let findCoincidence = (Cinderella, Prince) => {
//     for (const cinderellaItem of Cinderella) {
//         if (cinderellaItem.footSize === Prince.findSize){
//             return cinderellaItem
//         }
//     }
// }
// console.log(findCoincidence(cinArray,newPrince))
//
// console.log(cinArray.find(value => value.footSize === newPrince.findSize));
