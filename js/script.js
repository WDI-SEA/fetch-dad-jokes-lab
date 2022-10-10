let jokes = document.getElementById('jokes')
let submitBtn = document.getElementById('submitBtn')


const getJoke = (person) =>{
    let name = person.name.first + " " + person.name.last 
    //create new li element
    let newListItem = document.createElement('li')
    //add the name to the li
    newListItem.innerText = name
    //append the li to the ul using the id (poepleList)
    poepleList.appendChild(newListItem)
}



//Fetching the jokes 
const apiURL = 'https://icanhazdadjoke.com/'
fetch(apiURL, {
  headers: {
    'Accept': 'application/json'
  }
})
.then(fetchedJoke=>{

    return fetchedJoke.json()
})
.then(jsonJokes=>{
console.log(jsonJokes.joke)
})
.catch(err=>{
    console.log(err)
})


const clearJoke =() =>{
    jokes.innerHTML = ""
}