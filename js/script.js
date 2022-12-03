const { get } = require("http")
const { json } = require("stream/consumers")

console.log("Hello Joke")

const requestURL = "https://icanhazdadjoke.com/?q=10"

let from = document.querySelector("#from")
let joke = document.querySelector(".joke")

fetch(requestURL, {
    method: 'GET', 
    headers: {
        'Accept': 'application/json', 
        "Content-Type" : "Application/json", 
        }
})

.then((ResponseData)=> {
    return ResponseData,json();
})

.then ((jsonData)=>{
    console.log(jsonData)
    joke.innerText = jsonData
})


.catch((error)=>{
    console.log("OH NO , THERES BEEN AN ERROR !", ERROR ); 

})