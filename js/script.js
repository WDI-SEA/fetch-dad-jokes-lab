console.log('hello, bad jokes!')

// api testing

const jokeUrl = 'https://icanhazdadjoke.com'
const options = {
    headers: {
        Accept: 'application/json'
    }
}

// fetch(jokeUrl, options)
//     .then(responseData => responseData.json())
//     .then(console.log)
//     .catch(console.warn)

document.addEventListener('DOMContentLoaded', () => {
    const jokeDiv = document.querySelector('#joke-div')
    const jokeButton = document.querySelector('#joke-button')
    // console.log(jokeDiv, jokeButton)
    jokeButton.addEventListener('click', () => {
        // console.log('the button was clicked!')
        fetch(jokeUrl, options)
            .then(responseData => responseData.json())
            .then(jokeData => {
                console.log(jokeData)
                // clear out the joke div
                while (jokeDiv.firstChild) {
                    jokeDiv.removeChild(jokeDiv.firstChild)
                }
                // create a new p tag element
                const p = document.createElement('p')
                // set the text of the p to be the joke
                p.innerText = jokeData.joke
                // append the p to the div
                jokeDiv.append(p)

                // also display the image
                // const jokeUrl = `https://icanhazdadjoke.com/j/${jokeData.id}.png`
                const img = new Image()
                img.src = `https://icanhazdadjoke.com/j/${jokeData.id}.png`
                img.alt = jokeData.joke
                jokeDiv.append(img)
            })
            .catch(console.warn)
    })
})