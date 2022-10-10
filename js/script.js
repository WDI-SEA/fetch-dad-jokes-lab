    const jokeFetch = ()=>{
     fetch('https://icanhazdadjoke.com/', {
        headers: {
        'Accept': 'application/json'
}})

  .then((fetchedObj)=>{
    return fetchedObj.json();
  })
  .then((jokes)=>{
    jokes.joke
    textJoke.innerText=jokes.joke 
  })}


let textJoke = document.querySelector("#joke-display")
const jokeBtn = document.querySelector("#jokeBtn")
jokeBtn.addEventListener("click", ()=>{
    jokeFetch()
})

