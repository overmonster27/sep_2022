let divElement = document.createElement('div');
divElement.className = 'divElement'

let productDiv = document.createElement('div');
productDiv.className = 'productDiv';

let backPage = document.createElement('a');
backPage.classList.add('backPage')
backPage.innerText = 'Back page';
backPage.href = `index.html`;

let value = JSON.parse(localStorage.getItem('product'));

let join = value.join(',')
let split = join.split(',');

let textDiv = document.createElement('div');

let nameDiv = document.createElement('h1');
nameDiv.className = 'textHeader';
nameDiv.innerHTML = `Name: ${split[0]}`;

let count = document.createElement('h1');
count.className = 'textHeader';
count.innerHTML = `Count: ${split[1]}`;

let price = document.createElement('h1');
price.className = 'textHeader';
price.innerHTML = `Price: ${split[2]}`;

let total = document.createElement('h1');
total.className = 'textHeader';

let totalPrice = split[1] * split[2];

total.innerHTML = `Total: ${totalPrice}`;

let imgDiv = document.createElement('div');

let url = document.createElement('img');
url.className = 'url';

url.src = split[3];

textDiv.append(nameDiv, count, price, total);
imgDiv.appendChild(url);
productDiv.append(textDiv, imgDiv);
divElement.append(productDiv, backPage)

document.body.appendChild(divElement);