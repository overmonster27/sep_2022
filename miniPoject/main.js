let divElement = document.createElement("div");
divElement.className = "divElement";

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((value) => {
        for (const valueElement of value) {
            let element = document.createElement("div");
            element.className = "userBlock";

            let innerElement = document.createElement("div");
            innerElement.className = "textDiv";

            const {id, name, username} = valueElement;
            innerElement.innerHTML = `${id} ${name} ${username}`;

            let buttonDiv = document.createElement("div");
            buttonDiv.className = "container-1";

            let link = document.createElement("a");

            link.innerText = "MORE";
            link.className = "button";

            link.href = `user-details.html?id=${id}`;

            buttonDiv.appendChild(link);

            element.append(buttonDiv, innerElement);

            divElement.appendChild(element);
        }
    });
document.body.appendChild(divElement);