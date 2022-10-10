let newJoke = document.getElementById('newJoke');
let jokeText = document.getElementById('jokeText');
let apiURL = "https://icanhazdadjoke.com/";

const addJock = (joke)=> {
    console.log(joke);
    jokeText.innerText = joke;
}

newJoke.addEventListener('click', function(){
    fetch(apiURL)
    .then(res=>{
       return res.json();
    })
    .then(res_ => {
        console.log(res_);
    })
    .catch(err=>{
        console.log(err);
    })
})