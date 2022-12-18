let divElement = document.createElement('div');
divElement.className = 'divElement'

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(value => {
        for (const valueElement of value) {
            let element = document.createElement('div');
            element.className = 'userBlock'

            const {id, name, username} = valueElement;
            element.innerHTML = `${id} ${name} ${username}`;

            let link = document.createElement('a');
            link.innerText = 'MORE';
            link.className = 'button'

            link.href = `user-details.html?id=${id}`

            element.appendChild(link);

            divElement.appendChild(element);
        }
    })
document.body.appendChild(divElement);