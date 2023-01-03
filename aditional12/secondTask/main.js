let container = document.createElement('div');

container.classList.add('container');
let formDiv = document.createElement('div');

formDiv.classList.add('formDiv');
let form = document.createElement('form');

form.classList.add('form');
let name = document.createElement('input');

name.type = 'Text';
let count = document.createElement('input');
count.type = 'Number';

let price = document.createElement('input');
price.type = 'Number';

let url = document.createElement('input');
url.type = 'url';

let button = document.createElement('button')
button.innerText = 'Action';

let productDiv = document.createElement('div');
productDiv.classList.add('productDiv');

let nextPage = document.createElement('a');
nextPage.className = 'nextPage'
nextPage.innerText = 'Next page';
nextPage.href = `http://localhost:63342/sep_2022/aditional12/secondTask/list.html`;

let constructor = document.createElement('div');
constructor.classList.add('constructor');

form.append(name, count, price, url, button);
formDiv.append(form);

productDiv.append(nextPage, constructor);

container.append(formDiv, productDiv);

document.body.appendChild(container);

localStorage.setItem('product',JSON.stringify([]));

const productCreator = (product) => {
    const existingFavorites = JSON.parse(localStorage.getItem('product'));
    localStorage.setItem('product', JSON.stringify([...existingFavorites, product]));
};
button.onclick = function (e) {
    e.preventDefault();
    button.disabled = true;

    let field1 = name.value;
    let field2 = count.value;
    let field3 = price.value;
    let field4 = url.value;

    let productValue = `Name: ${field1}, Count: ${field2}, Price: ${field3}, Url: ${field4}`;

    productCreator(productValue);

    let img = document.createElement('img');

    constructor.appendChild(img);

    img.src = `${field4}`;
    constructor.innerHTML = productValue;
}


