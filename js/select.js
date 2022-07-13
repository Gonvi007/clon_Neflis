const renderSelect = () => {
    let select = document.querySelector("#categories")
    
    let {genres} = data;
    genres.forEach((gender) => {
        // Creamos el nuevo elemento <option>
        let option = document.createElement('option')
        // Agregamos el atributo "value"
        option.setAttribute('value', gender.id)
        option.innerText = gender.name
        select.appendChild(option);
        console.log(gender.name)
    });
};

fetch(`${URL}/genre/movie/list?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => console.log(data));



