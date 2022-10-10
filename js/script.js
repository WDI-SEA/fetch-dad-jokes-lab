let form = document.getElementById("form")
let button = document.getElementById("button")
let jokeContainer = document.getElementById("joke")




const apiURL = "https://icanhazdadjoke.com/"


const fetchJoke= ()=>{
fetch(apiURL, {
  headers: {
    'Accept': 'application/json',
  }
})
.then(jsonData=>{
    return jsonData.json()
})
.then(getJoke=>{
    console.log(getJoke.joke)
    let joke = getJoke.joke
    jokeContainer.textContent = joke
     
})
.catch(err=>{
    console.log(err)
})
}


button.addEventListener("click", ()=>{
    // clearDiv()
    fetchJoke()
})
