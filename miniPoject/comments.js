let url = new URL(location.href);
let id = url.searchParams.get('id')

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(response => response.json())
    .then(value => {
        for (const valueElement of value) {

            let head = document.createElement('div');

            const {
                postId,
                id,
                name,
                email,
                body
            } = valueElement

            head.innerHTML = `${postId} ${id} ${name} ${email} ${body}`

            document.body.appendChild(head);
        }
    });
