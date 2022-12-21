let url = new URL(location.href);
let id = url.searchParams.get('id')

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(response => response.json())
    .then(value => {
        for (const valueElement of value) {

            let head = document.createElement('div');
            head.className = 'head';

            const {postId, id, name, email, body} = valueElement;

            head.innerHTML = `PostID: ${postId}<br> Id: ${id}<br> Name: ${name}<br> Email: ${email}<br> Body: ${body}`;

            document.body.appendChild(head);
        }
    });
