// DOM ELEMENTS
let jokeFrom, jokeDiv

// FUNCTIONS

// fetches a joke when the form is submitted
function fetchJoke(e) {
  e.preventDefault()
  // fetch a joke from the Dad joke API
  fetch('https://icanhazdadjoke.com/', { headers: { 'Accept': 'application/json' } })
    .then(fetchResponse => {
      return fetchResponse.json() // promise chaining allows us to .then again
    }) 
    .then(jsonified => {      
      // clear out the joke div
      while (jokeDiv.firstChild) {
        jokeDiv.removeChild(jokeDiv.firstChild)
      }
      // create a new element to put in the joke div
      const jokeP = document.createElement('p')
      // set the text of the new element to be the joke
      jokeP.innerText = jsonified.joke
      // append the new element on to the joke div
      jokeDiv.appendChild(jokeP)
    })
    .catch(console.log)
}

// ADD EVENT LISTENERS ON PAGE LOAD
document.addEventListener('DOMContentLoaded', () => {
  jokeFrom = document.querySelector('#joke-form')
  jokeDiv = document.querySelector('#joke-div')
  jokeFrom.addEventListener('submit', fetchJoke)
})