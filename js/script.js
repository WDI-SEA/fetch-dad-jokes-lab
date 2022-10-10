function getJoke(){
    console.log("hi")
    fetch(' https://icanhazdadjoke.com/',{headers:{ accept:"application/json"}
   
})
  .then((response) => response.json())
  .then((data) =>{
   document.getElementById("contain").innerText=data.joke
  });
}
let btn = document.getElementById("btn");
btn.addEventListener("click", getJoke)

