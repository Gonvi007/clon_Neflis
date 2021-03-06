let movies_array = [];

const renderMovies = (data) => {
    let movies = data.results;
    movies.forEach((movie) => {
      let poster = `${IMG_PREFIX}${movie.poster_path}`;
      // img.src = poster;
      let div = document.createElement("div");
      div.classList.add("col-3", "mb-4");

      let img = document.createElement("img");
      /*
      Una forma para no tener tanta información.
      img.setAttribute("src",`${IMG_PREFIX}${movie.poster_path}`);
      */
      img.classList.add("img-fluid");
      img.setAttribute("src", poster);
      img.setAttribute("alt", movie.title);

      div.append(img);

      document.querySelector("#popular").append(div);
      // console.log(movie);
    });
}

fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
.then((response) => response.json())
.then((data) => {
  movies_array = data.results;
  renderMovies(data);
});

// movies_array.filter((movie) => {
//   movie.genre_ids.includes(16))
// };

