let url = new URL(location.href);
let id = url.searchParams.get('id')

fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(response => response.json())
    .then(value => {

        for (const valueElement of value) {

            let postDiv = document.createElement('div');

            const {
                userId,
                id,
                title,
                body,
            } = valueElement

            postDiv.innerHTML = `userID: ${userId} id: ${id} title: ${title} body: ${body}`;

            let link = document.createElement("a");
            link.href = `comments.html?id=${id}`;
            link.innerText = 'comments of current post';

            postDiv.append(link);

            document.body.appendChild(postDiv);
        }
    })
