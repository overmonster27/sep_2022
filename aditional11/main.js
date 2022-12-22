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

let htmlAnchorElement = document.createElement('a');
htmlAnchorElement.className = "htmlAnchorElement"
htmlAnchorElement.innerText = 'FAVORITES';

htmlAnchorElement.href = `favorites.html`;

for (const User of users) {
    let middleDiv = document.createElement('div');
    middleDiv.className = 'middleDiv';

    let buttonElement = document.createElement('button');

    middleDiv.innerHTML = `Name: ${User.name} <br> Age: ${User.age} <br> Status:${User.status}`;

    buttonElement.innerText = 'ADD TO FAVORITES';

    let userObj = User;

    buttonElement.onclick = function (e) {

        e.preventDefault();

        buttonElement.disabled = true;

        addToFavorites(userObj);
    };
    middleDiv.appendChild(buttonElement)
    mainDiv.append(middleDiv);

}
document.body.append(mainDiv, htmlAnchorElement);



