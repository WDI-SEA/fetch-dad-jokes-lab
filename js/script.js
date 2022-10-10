const jokesForm = document.querySelector('#jokesForm')

const theJoke = document.querySelector('#theJoke')

const theJokeImg = document.querySelector('#theJokeImg')

const addJokeToHTML = (joke) => {
    theJoke.innerText = joke
}

const addJokeImageToHTML = (joke) => {
    let imgSrc = `https://icanhazdadjoke.com/j/${joke}.png`
    theJokeImg.src = imgSrc
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
        addJokeImageToHTML(jsonJokes.id)
    })
    .catch(err => {
        console.log("No jokes found", err)
    })

}


jokesForm.addEventListener('submit', (e) => {
    e.preventDefault()
    generateJoke() 
})