fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(res => console.log(res.results))
    .catch(err => console.log(err))