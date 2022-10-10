const jokesForm = document.querySelector('#jokesForm')

const theJoke = document.querySelector('#theJoke')


const addJokeToHTML = (joke) => {
    theJoke.innerText = joke
}


const generateJoke = () => {

    let randomJokeURL = "https://icanhazdadjoke.com"
    
    fetch(randomJokeURL, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            "Content-Type" : "Application/json",
        }
    })
    .then(fetchedJokesObj => {
        return fetchedJokesObj.json()
    }) 
    .then(jsonJokes => {
        addJokeToHTML(jsonJokes.joke)
    })
    .catch(err => {
        console.log("No jokes found", err)
    })

}


jokesForm.addEventListener('submit', (e) => {
    e.preventDefault()
    generateJoke() 
})