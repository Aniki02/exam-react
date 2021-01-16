const API_KEY = "785c50d09f881f67d49b4c5af3a8ddf1"

export function getMoviesFromApiWithSearchedText (text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_KEY + '&language=fr&query=' + text
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export function getImageFromApi(name) {
    return `https://image.tmdb.org/t/p/w300${name}`
}

export function getPopularMoviesFromApi(){
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key='+API_KEY+'&language=fr&page=1'
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}