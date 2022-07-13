const renderSelect = () => {
    console.log(genres)
}

fetch(`${URL}/genre/movie/list?api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data => console.log(data));



