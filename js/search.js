let frmBuscar = document.querySelector("#search");
// https://api.themoviedb.org/3/search/multi?api_key=fa900030b5382f71a0cbc261e0a0490fquery=100



const renderResults = () => {
    console.log(results)

}

frmBuscar.addEventListener("submit", (event) => {
    event.preventDefault(); //Evita que se recargue y borre la información del boton.

    const {movieName} = event.target
    renderResults(movieName.value);
            
    fetch(`${URL}/search/multi?api_key=${API_KEY}&query=${movieName.value}`)
        .then((response) => response.json())
        .then((data) => console.log(data.results));
});



    
        /*
        // Una busqueda que permite mayusculas y minusculas usando el FILTER

        let peticion = ['100 años de soledad', 'Spiderman', 'Thor', 'Mi villano favorito', 'Dr. Strange'];

        let result = peticion.filter(name => name.toLocaleLowerCase().includes(movieName.value.toLocaleLowerCase()));

        console.log(result);
        */



// movies_array.filter(function(movie){
//     let titulo = movie.title.toLoweCase();
//     let b = busqueda.toLowerCase();
//     return titulo.includes(b);

    // Esto es lo mismo que lo anterior, pero menos codigo.
    // return movie.title.toLoweCase().includes(toLowerCase().busqueda);
// });
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

// Regresa UN NUEVO array, pero no solo el valor solicitado.
// 

*/

