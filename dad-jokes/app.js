const joke = document.getElementById('joke');

const getJoke = document.getElementById('jokeBtn');

const url = 'https://icanhazdadjoke.com';

getJoke.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    const res = await fetch(url, config);
    const data = await res.json();

    joke.innerHTML = data.joke;
        
}
// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     }

//     fetch(url, config)
//         .then((res) => res.json())
//         .then((data) => {
//             joke.innerHTML = data.joke;
//         })
// }