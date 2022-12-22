// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених
// обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

localStorage.setItem('favorites', JSON.stringify([]));

const addToFavorites = (user) => {
    const existingFavorites = JSON.parse(localStorage.getItem('favorites'));
    localStorage.setItem('favorites', JSON.stringify([...existingFavorites, user]));
};

let mainDiv = document.createElement('div');
mainDiv.className = 'biggest';

for (const User of users) {
    let buttonElement = document.createElement('button');
    let middleDiv = document.createElement('div');

    buttonElement.innerText = 'ADD TO FAVORITES';
    const userDataString = `${User.name} ${User.age} ${User.status}`

    middleDiv.innerHTML = userDataString;

    buttonElement.onclick = function (e) {
        e.preventDefault();
        addToFavorites(userDataString);
    };
    mainDiv.append(middleDiv, buttonElement);

    console.log(User);
}
document.body.appendChild(mainDiv);



