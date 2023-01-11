let container = document.createElement('div');
container.classList.add('container');

let nextPage = document.createElement('a');
nextPage.className = 'nextPage'
nextPage.innerText = 'Next page';
nextPage.href = `http://localhost:63342/sep_2022/aditional12/secondTask/list.html`;

let constructor = document.createElement('div');
constructor.classList.add('constructor');

container.append(nextPage, constructor);

document.body.appendChild(container);

const form1 = document.querySelector('form');

form1.addEventListener('submit', logSubmit);

function logSubmit(event) {
    event.preventDefault();

    const [name, count, price, url] = event.target;

    let contentElement = document.createElement('div');
    contentElement.className = 'contentElement';

    contentElement.innerHTML = `Name: ${name.value} <br> Count: ${count.value} <br> Price: ${price.value}`;

    let values = `${name.value}, ${count.value}, ${price.value}, ${url.value}`

    localStorage.setItem('product', JSON.stringify([values]));

    let imageElement = document.createElement('img');
    imageElement.className = 'imageElement';

    imageElement.src = `${url.value}`;

    constructor.append(contentElement, imageElement);
}
