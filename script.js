//an empty list created to serve as a container to the random joke.
let depot = []

/*This function is the function that fetches a random joke from the DadJokes API.
    @ paramenters: -
    @ return: 
        * depot: a list that contains just one string element which is the fetched joke.
*/
function fetchingAJoke(){
    fetch("https://icanhazdadjoke.com/",{ 
        headers: {
            'Accept': 'application/json'
        }
    })

    .then(prejoke => prejoke.json())

    .then(jokes =>{depot[0] = jokes.joke})

    .catch(err => {return err})

    return depot
}

/*This function is the function that responds to clicking the Another button. It calls 
  fetchingAJoke() to get a new joke with each click.
    @ paramenters: -
    @ return: - (it's a void function)
*/
function action(){
    document.querySelector('div').innerText = null
    fetchingAJoke()
    document.querySelector('div').innerText = fetchingAJoke()[0]
    depot[0] = null
}


//Grapping the the button and adding an event listener to it.
let another = document.querySelector('button')
another.addEventListener('click', action)
document.querySelector('div').innerText = null

