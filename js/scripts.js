

// const jokeDiv = document.getElementById("displayed-joke")
// const jokesButton = document.getElementById ("jokeBtn")

// // function daddyJokes (){
//  const jokeFcn =()=> {
//  fetch('https://icanhazdadjoke.com/', {
//         headers: {
//           'Accept': 'application/json'
//       }
//     })
      
//         .then((jokesData)=>{
//           return jokesData.json();
//         })
//         .then((jsonData)=>{
          
//             jokeDiv.innerText= jsonData.joke
//         })
//     }
    
//     jokesButton.addEventListener("click", ()=>{
  //         jokeFcn()
  
  //     })
  
  let textJoke = document.querySelector("#displayed-joke")
  const jokeBtn = document.querySelector("#jokeBtn")

let laughters = new Audio ("mixkit-laughing-teenager-428.wav")

const jokeFetch = ()=>{
    fetch('https://icanhazdadjoke.com/', {
       headers: {
       'Accept': 'application/json'
}})

 .then((fetchedObj)=>{
   return fetchedObj.json();
 })
 .then((jokes)=>{
   jokes.joke
   textJoke.innerText=jokes.joke 
 })}

jokeBtn.addEventListener("click", ()=>{
   
   
})
jokeFetch()
laughters.play()