//getting the needed elements from HTML
let jokes = document.getElementById('jokes')
let submitBtn = document.getElementById('submitBtn')


//Fetching the jokes 
const fetchJokes = () => {
const apiURL = 'https://icanhazdadjoke.com/'
fetch(apiURL, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        "Content-Type" : "Application/json",
    }
})
.then(fetchedJoke=>{
    return fetchedJoke.json()
})
.then(jsonJokes=>{
    console.log(jsonJokes.joke)
    jokes.innerText = jsonJokes.joke

})
.catch(err=>{
    console.log(err)
})


}//end of fetchJokes function 

//Function that clears the old joke.
const clearJokes =() =>{
    jokes.innerHTML = ""
}

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    clearJokes()
    fetchJokes()
} )