// console.log('hello')
const url = "https://icanhazdadjoke.com"

const options = {
    headers: {
        'Accept': 'application/json'
    }
}

// just testing...
// fetch(url, options)
//     .then(response => {
//         console.log(response)
//         return response.json()
//     })
//     .then(console.log)
//     .catch(console.warn)

document.addEventListener('DOMContentLoaded', () => {
    const jokeArea = document.querySelector('#joke-area')
    const jokeButton = document.querySelector('#joke-button')
    // console.log(jokeArea, jokeButton)
    jokeButton.addEventListener('click', () => {
        // clear out the joke area
        while (jokeArea.firstChild) {
            jokeArea.removeChild(jokeArea.firstChild)
        }
        // fetch a joke
        fetch(url, options)
            // jsonify the response
            // 'implicit return arrow function'
            .then(response => response.json())
            // append the joke to the joke area
            .then(jokeJson => {
                console.log(jokeJson)
                // create a p tag
                const pTag = document.createElement('p')
                // set the text of the p tag to be the Dad joke
                pTag.innerText = jokeJson.joke
                // make new image tag for the joke image
                const imgTag = document.createElement('img')
                imgTag.src = `https://icanhazdadjoke.com/j/${jokeJson.id}.png`
                imgTag.alt = jokeJson.joke
                jokeArea.append(pTag, imgTag)
            })
            // catch and handle errors
            .catch(err => {
                console.warn(err)
                // display error message to the user
                const pTag = document.createElement('p')
                pTag.innerText = 'oh no! There was a fetch error!'
                jokeArea.append(pTag)
            })
    })
})