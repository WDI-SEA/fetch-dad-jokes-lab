
const dadJokeUrl = "https://icanhazdadjoke.com/"
const options = {
    headers: {
        Accept: "application/json"
    }
}

// fetch(url, options object)

fetch(dadJokeUrl, options)
    .then(rawJokeData => rawJokeData.json())
    .then(console.log)
    .catch(console.warn)

document.addEventListener("DOMContentLoaded", () => {
    const jokeDiv = document.querySelector("#jokeDiv")
    const fetchJokeButton = document.querySelector("#fetchJokeButton")
    // console.log(jokeDiv, fetchJokeButton)
    fetchJokeButton.addEventListener("click", () => {
        // clear out everything in the jokeDiv
        while (jokeDiv.firstChild) {
            jokeDiv.removeChild(jokeDiv.firstChild)
        }
        // fetch a joke
        fetch(dadJokeUrl, options)
            .then(taco => taco.json())
            .then(jokeData => {
                // make a new p tag
                const newP = document.createElement("p")
                // set inntertext of ptag to be fetched joke
                newP.innerText = jokeData.joke
                // mount the p tag on the joke div
                jokeDiv.append(newP)
            })
            .catch(console.warn)
            
    })
})