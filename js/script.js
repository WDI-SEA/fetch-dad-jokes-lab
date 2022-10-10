function getJoke(){
const apiURL = "https://icanhazdadjoke.com/"


    fetch(apiURL, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            "Content-Type" : "Application/json",
        }
    })
    .then(function(response){
       return response.json()
    })
    .then(function(data){   
    document.getElementById('joke').innerText = data.joke;
    })
    .catch(err=>{
        console.log(err)
    })
}
