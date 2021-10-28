const url = 'https://randomuser.me/api/?results=50';

const result = document.getElementById('result');

const filter = document.getElementById('filter');

const listItems = [];

filter.addEventListener('input', (e) => filterData(e.target.value));

async function getData() {
    const res = await fetch(url)
    const data = await res.json()
    console.log(res.status);

    // clear results
    result.innerHTML = '';

    data.results.forEach(user => {
        const li = document.createElement('li');

        listItems.push(li);

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}"/>

            <div src="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
                <p>${user.email}</p>
                <p>${user.phone}</p>
            </div>
        `;

        result.appendChild(li);
    })
}

getData()

function filterData(searchTerm) {
    listItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    })
}