let form = document.getElementById("form")
let button = document.getElementById("button")


 
const apiURL = "https://icanhazdadjoke.com/"

const fetchJoke=()=>{

fetch(apiURL, {
  headers: {
    'Accept': 'application/json',
    "Content-Type" : "Application/json"
  }
})
.then(jsonData=>{
    return jsonData.json()
})
.then(getJoke=>{
    console.log(getJoke.joke)
    
})
}
button.addEventListener("click", ()=>{
    fetchJoke()
})


// form.addEventListener("button",(e)=>{
//     e.preventDefault()
//     numJokes=document.getElementById("numJokes").value
// })





// const jokeFetch = ()=>{
//      fetch('https://icanhazdadjoke.com/', {
//         headers: {
//         'Accept': 'application/json'
// }})

//   .then((fetchedObj)=>{
//     return fetchedObj.json();
//   })
//   .then((jokes)=>{
//     jokes.joke
//     textJoke.innerText=jokes.joke 
//   })}


// let textJoke = document.querySelector("#joke-display")
// const jokeBtn = document.querySelector("#jokeBtn")
// jokeBtn.addEventListener("click", ()=>{
//     jokeFetch()
// })