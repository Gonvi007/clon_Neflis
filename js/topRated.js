const ratedMovies = (data) => {
    let movies = data.results;
    movies.forEach((movie) => {
        let img = document.createElement("img");

        img.setAttribute("src", `${IMG_PREFIX}${movie.poster_path}`);
        img.setAttribute("alt", movie.title);
        document.querySelector("#topRated").append(img);

    });
}

fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
        ratedMovies(data);
    });