console.log('hello bad jokes')

const jokeUrl = 'https://icanhazdadjoke.com/'

const options = {
	headers: {
		// send me robo data
		Accept: 'application/json'
	}
}

// fetch(jokeUrl, options)
// 	.then(response => response.json())
// 	.then(console.log)
// 	.catch(console.warn)

document.addEventListener('DOMContentLoaded', () => {
	const jokeContainer = document.querySelector('#joke-container')
	const jokeButton = document.querySelector('#joke-button')

	jokeButton.addEventListener('click', () => {
		// fetch a joke from the joke API
		fetch(jokeUrl, options)
			// unjsonify the data
			.then(response => response.json())
			.then(jokeData => {
				console.log(jokeData.id)
				// clear out the joke container
				while (jokeContainer.firstChild) {
					jokeContainer.removeChild(jokeContainer.firstChild)
				}
				// create a p tag
				const p = document.createElement('p')
				// set the text of the p tag to be the joke
				p.innerText = jokeData.joke
				// append the p tag to the joke container
				jokeContainer.append(p)

				// make a fetch request and return it from this .then
				const imageUrl = `https://icanhazdadjoke.com/j/${jokeData.id}.png`
				const image = new Image()
				image.src = imageUrl
				image.alt = jokeData.joke
				jokeContainer.append(image)
			})
			// catch our errors like the good programmers we are
			.catch(err => console.warn('there was an error', err))
	})
})