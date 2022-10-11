let generateBtn = document.getElementById('generateBtn')
let result = document.getElementById('resultJoke')

const addJoke = (joke) => {
    result.innerHTML=joke
}

const fetchJokes = () => {
    const apiURL='https://icanhazdadjoke.com/'
    fetch(apiURL, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            "Content-Type" : "Application/json",
        }
    })
    .then(fetchedJokesObj=>{
        return fetchedJokesObj.json()
    })
    .then(jsonJokes=>{
        console.log(jsonJokes.joke)
        addJoke(jsonJokes.joke)
        // jsonJokes.results.forEach(addJoke)
    })
    .catch(err=>{
        console.log(err)
    })

}




const clear = () => {
   result.innerHTML = ""
}


generateBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    clear()
    fetchJokes()
})
