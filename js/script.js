let userEndPoint="https://icanhazdadjoke.com"
//let headers="Accept"
let buttonSubmit=document.getElementById('search')
let textShow=document.getElementById('input')
let refreshFunction=(e)=>{
    e.preventDefault()
    console.log("hello")
    fetch(userEndPoint,{ headers: { 'Accept': 'application/json' } })
    //fetch('https://icanhazdadjoke.com', { headers: { 'content-type': 'application/json' } })
    //fetch(`https://icanhazdadjoke.com {${headers} : {content-type:application/json}}`)
    .then((fetchObj)=>{
        console.log(fetchObj)
        return fetchObj.json()
    })
    .then((jsonData)=>{
        console.log(jsonData.joke)
        textShow.innerText=jsonData.joke;
    })
}
buttonSubmit.addEventListener('click',e=>{
    refreshFunction(e)
})