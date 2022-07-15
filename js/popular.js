const renderMovies = (data) => {
    let movies = data.results;
    movies.forEach((movie) => {
      let poster = `${IMG_PREFIX}${movie.poster_path}`;
      let img = document.createElement("img");
      // img.src = poster;
  
      /*
      Una forma para no tener tanta información.
      img.setAttribute("src",`${IMG_PREFIX}${movie.poster_path}`);
      */
      img.setAttribute("src", poster);
      img.setAttribute("alt", movie.title);
      document.querySelector("#popular").append(img);
      // console.log(movie);
    });
}

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
.then((response) => response.json())
.then((data) => {
  renderMovies(data);
});