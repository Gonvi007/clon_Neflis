let busqueda = document.querySelector("#search").ariaValueMax;

movies_array.filter(function(movie){
    let titulo = movie.title.toLoweCase();
    let b = busqueda.toLowerCase();
    return titulo.includes(b);

    // Esto es lo mismo que lo anterior, pero menos codigo.
    // return movie.title.toLoweCase().includes(toLowerCase().busqueda);
});