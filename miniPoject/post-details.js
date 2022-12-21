let url = new URL(location.href);
let id = url.searchParams.get("id");

let mainDiv = document.createElement("div");
mainDiv.className = "mainDiv";

fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then((response) => response.json())
    .then((value) => {
        for (const valueElement of value) {
            let divElement = document.createElement("div");
            divElement.className = "divElement";

            let postDiv = document.createElement("div");
            postDiv.className = "post";

            const { userId, id, title, body } = valueElement;

            postDiv.innerHTML = `UserID: ${userId}<br> Id: ${id}<br> Title: ${title}<br> Body: ${body}`;

            let linkBlock = document.createElement("button");
            linkBlock.className = "link-Block";

            let link = document.createElement("a");
            link.className = 'link';

            link.href = `comments.html?id=${id}`;
            link.innerText = "Comments of current post";

            linkBlock.appendChild(link);

            divElement.append(postDiv, linkBlock);
            mainDiv.appendChild(divElement);
        }
    });
document.body.appendChild(mainDiv);
