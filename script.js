console.log("Hello Joke")

const requestURL = "https://icanhazdadjoke.com/?q=10"
let form = document.querySelector("#form")
let joke = document.querySelector(".joke")

fetch(requestURL, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        "Content-Type" : "Application/json",
    }
    })
    .then((responseData)=>{
        return responseData.json();
    })
    .then((jsonData)=>{
        console.log(jsonData)
        joke.innerText = jsonData
    })
    .catch((error)=>{
        console.log("Oh no, there's been an error!", error);
    })