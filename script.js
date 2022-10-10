let newJoke = document.getElementById('newJoke');
let jokeText = document.getElementById('jokeText');
let apiURL = "https://icanhazdadjoke.com/";

const addJock = (joke)=> {
    console.log(joke);
    jokeText.innerText = joke;
}

newJoke.addEventListener('click', function(){
    fetch(apiURL, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            "Content-Type" : "Application/json",
        }
    })
    .then(res=>{
       return res.json();
    })
    .then(res_ => {
        console.log(res_.joke);
        addJock(res_.joke)
    })
    .catch(err=>{
        console.log(err);
    })
})