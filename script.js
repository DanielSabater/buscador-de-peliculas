document.getElementById('searchButton').addEventListener('click', searchMovies)

let api_key = 'c4fadea89f5f66780abf54a1e4d06abc'
let urlBase = 'https://api.themoviedb.org/3/search/movie'

function searchMovies() {
    let searchInput = document.getElementById('searchInput').value

    fetch(`${urlBase}?api_key=${api_key}&query=${searchInput}`)
    .then(response => response.json())
    .then(response => console.log(response))
}

function displayMovies(movies) {
    let resultContainer = document.getElementById('results')
    resultContainer.innerHTML = ''

    if (movies.length === 0) {
        resultContainer.innerHTML = '<p> No se encontraron resultados para tu búsqueda </p>'
        return
    }

    movies.forEach(movie => {
        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')
    });
}