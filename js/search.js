let busqueda = document.querySelector("#search").value;

movies_array.filter(function(movie){
    let titulo = movie.title.toLoweCase();
    let b = busqueda.toLowerCase();
    return titulo.includes(b);

    // Esto es lo mismo que lo anterior, pero menos codigo.
    // return movie.title.toLoweCase().includes(toLowerCase().busqueda);
});
/*
// para busqueda
nombres = ["Ana", "Benito", "Carlos", "Darius", "Ernesto"];
// Manda los nombres ana o que tenga la palabra ana
nombres.filter(nombre => nombre.includes('ana'));
// Manda todo lo que tenga lentra "a"
nombres.filter(nombre => nombre.includes('a'));
// En este caso manda un array vacio
nombres.filter(nombre=>nombre.includes('z'));



const users = [{name: 'Victor', age: 36, country: "SV"}, {name: 'Victor', age: 40, country: "SV"}, {name: 'Victor', age: 18, country: "SV"}]

users.filter(user => user.age > 20);

// Regresa todo el array, no solo el valor solicitado.

*/

