// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

let container = document.createElement('div');
container.classList.add('container');

let mainWindow = document.createElement('div');
mainWindow.classList.add('mainWindow');

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => response.json())
    .then(value => {
        for (const valueElement of value) {
            let innerDiv = document.createElement('div');
            innerDiv.classList.add('innerDiv');

            let textDiv = document.createElement('div');

            const {id, name, username} = valueElement;

            textDiv.innerHTML = `ID:${id}<br> Name:${name}<br> Username: ${username}`;

            let buttonElement = document.createElement('button');

            buttonElement.classList.add('buttonHref');
            buttonElement.innerText = 'Details';

            buttonElement.onclick = function (e) {
                e.preventDefault();
                mainWindow.innerHTML = '';

                fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                    .then((response) => response.json())
                    .then(value => {

                        for (const valueElement1 of value) {
                            let postBlock = document.createElement('div');
                            postBlock.classList.add('postBlock');

                            let divOfCurrentPost = document.createElement('div');
                            divOfCurrentPost.classList.add('divOfCurrentPost');

                            const {userId, id, title, body} = valueElement1;

                            divOfCurrentPost.innerHTML = `UserId:${userId} Id:${id} Title:${title} Body:${body}`;

                            let postButton = document.createElement('button');
                            postButton.innerText = 'Comments of current Post';

                            postButton.onclick = function (e) {
                                e.preventDefault();
                                mainWindow.innerHTML = '';

                                fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                                    .then((response) => response.json())
                                    .then(value => {
                                        for (const valueElement2 of value) {
                                            let mainCommentDiv = document.createElement('div');
                                            mainCommentDiv.classList.add('mainCommentDiv');

                                            const {postId, id, name, email, body} = valueElement2;

                                            mainCommentDiv.innerHTML = `PostId:${postId}<br> ID:${id}<br> Name:${name}<br> Email:${email}<br> Body:${body}`;

                                            mainWindow.appendChild(mainCommentDiv);
                                        }
                                    })
                            }
                            postBlock.append(divOfCurrentPost, postButton);
                            mainWindow.appendChild(postBlock);
                        }
                    })
            };
            innerDiv.append(textDiv, buttonElement);
            container.append(innerDiv);
        }
    })
document.body.append(container, mainWindow);