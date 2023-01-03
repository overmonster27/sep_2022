let divElement = document.createElement('div');

let productDiv = document.createElement('div');

let img = document.createElement('div');


let backPage = document.createElement('a');
backPage.innerText = 'Back page';
backPage.href = `index.html`;

let value =JSON.parse(localStorage.getItem('product'));

for (const valueElement of value) {

    productDiv.innerHTML = valueElement;
    img.src = `valueElement.Url`
}

productDiv.append(img);
divElement.append(productDiv, backPage)
document.body.appendChild(divElement);