const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5a3ac50d7a53a00561c0391f24804c52&page=1';

const search_url = 'https://api.themoviedb.org/3/search/movie?api_key=5a3ac50d7a53a00561c0391f24804c52&query="';

const img_path = 'https://image.tmdb.org/t/p/w1280';

const form = document.getElementById('form');
const search = document.querySelector('.search');
const main = document.getElementById('main');

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();

    showMovies(data.results);
}

function showMovies(movies) {
    main.innerHTML = '';

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
            
                <img src="${img_path + poster_path}" alt="${title}">

                <div class="movie-info">
                    <h3>${title}</h3>
                    <span class="${getClassByRate(vote_average)}">${vote_average}</span>
                </div>

                <div class="overview">
                    <h3>Overview</h3>
                    ${overview}
                </div>
        
        `;

        main.appendChild(movieEl)
    })
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange';
    } else {
        return 'red';
    }
}

getMovies(url)

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm && searchTerm !== '') {
        getMovies(search_url + searchTerm);

        search.value = '';
    } else {
        window.location.reload();
    }
})