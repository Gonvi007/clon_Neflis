const ratedMovies = (data) => {
    let movies = data.results;
    movies.forEach((movie) => {
        let img = document.createElement("img");
        
        let div = document.createElement("div");
        div.classList.add("col-3", "mb-4");

        img.classList.add("img-fluid");

        img.setAttribute("src", `${IMG_PREFIX}${movie.poster_path}`);
        img.setAttribute("alt", movie.title);

        div.append(img);

        
        document.querySelector("#topRated").append(div);
    });
}

fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
        ratedMovies(data);
    });