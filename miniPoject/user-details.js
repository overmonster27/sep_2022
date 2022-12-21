let detailsContainer = document.createElement("div");
detailsContainer.className = "detailsContainer";

let url = new URL(location.href);
let id = url.searchParams.get("id");

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then((value) => {
        let elementOfContainer = document.createElement("div");
        elementOfContainer.className = "userBlock";
        const {id, name, username, email, address, phone, website, company} = value;

        const {street, suite, city, zipcode, geo: {lat, lng}} = address;

        elementOfContainer.innerHTML = `id:${id} <br> name:${name} <br> username: ${username} <br> email: ${email} <br> adress: ${street} <br> suite: ${suite}<br> city: ${city} <br> zipcode: ${zipcode} <br> geo lat: ${lat}<br> geo lng:${lng}<br> phone:${phone} <br> website: ${website} <br> Company name: ${company.name}<br> catchPhrase:${company.catchPhrase}<br> bs:${company.bs} `;

        let aBlock = document.createElement("button");
        aBlock.className = 'aBlock';

        let element = document.createElement("a");
        element.href = `post-details.html?id=${id}`;
        element.className = 'aHref';
        element.innerText = "Post of current user";

        aBlock.append(element);

        detailsContainer.append(elementOfContainer, aBlock);
    });
document.body.append(detailsContainer);
