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

for (const user of users) {
    let middleDiv = document.createElement('div');
    middleDiv.className = 'middleDiv';

    let buttonElement = document.createElement('button');

    middleDiv.innerHTML = `Name: ${user.name} <br> Age: ${user.age} <br> Status:${user.status}`;

    buttonElement.innerText = 'ADD TO FAVORITES';

    let userObj = user;

    buttonElement.onclick = function (e) {

        e.preventDefault();

        buttonElement.disabled = true;

        addToFavorites(userObj);
    };
    middleDiv.appendChild(buttonElement)
    mainDiv.append(middleDiv);

}
document.body.append(mainDiv, htmlAnchorElement);



