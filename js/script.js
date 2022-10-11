let DadJoke = document.getElementById("Dad-Joke")
let theJoke = document.getElementById("the-joke")

let sound= new Audio('mixkit-cartoon-voice-laugh-343.wav')

const fetchjoke = () => {
fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
})

.then((fetchJoke)=>{
    return fetchJoke.json();
})
.then((jsonJoke)=>{
    // console.log(jsonJoke.joke)
    jsonJoke.joke
    theJoke.innerText=jsonJoke.joke

})
.catch(err=>{
    console.log(err)
})

}

const clear= () => {
   
    theJoke.innerText = ""
}

DadJoke.addEventListener('click', ()=>{
    fetchjoke()
    sound.play()
    clear()
})






