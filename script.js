
let form =document.getElementById("form")
let joke=""

let addJoke=(jo)=>{
    // let name=jo.joke
    
    document.getElementById("displayJoke").innerHTML = jo;
}


    const fatchpeople=()=>{
        const apiURL='https://icanhazdadjoke.com/'
        fetch(apiURL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                "Content-Type" : "Application/json",
            }
        })
        
        .then(fetchedjoke=>{
            //fetch will package the response into an object
            // it also this callback functions as the argument
            // use the .josn() method to return the data in josn format
            return fetchedjoke.json()
            
            //   console.log(ResponseData)  
            })
            .then(jsonJoke=>{
                // weatger we return in the first .then getSelection
                // passed into THIS callbavk as the argument
            
            console.log(jsonJoke.joke)
          
            addJoke(jsonJoke.joke)
            })
            .catch(err=>{
                console.log(err)
            })
        

    }
    const clearList=()=>{
       
        diplayJoke.innerHTML=""
    }
    
    form.addEventListener("submit",(e)=>{
        //stop the default  refersh value 
        e.preventDefault()
        // clearList()
        // console.log(`peopleNum is ${document.getElementById("numPeople").value}`)
        
        fatchpeople()
        
    })
    
    