console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", ()=>{
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const container = document.getElementById("dog-image-container")
    fetch(imgUrl)
    .then(res => res.json())
    .then(data => data.message.forEach(e => {
        
        const img = document.createElement("img")
        img.src = e
        container.appendChild(img)
   
   }))
   const breedUrl = 'https://dog.ceo/api/breeds/list/all'
   const breeds = document.querySelector("#dog-breeds")
   
   function list(keys){
       const li = document.createElement("li")
        li.innerText = keys
        li.addEventListener("click", () => {
            li.style.color = "firebrick"
        })
        breeds.appendChild(li)
        
   }

   fetch(breedUrl)
   .then(res => res.json())
   .then(data => {
       console.log(data.message)
   const key = Object.keys(data.message)
    console.log(key)
   key.forEach(k => list(k))
   const dropDown = document.querySelector("#breed-dropdown")
   dropDown.addEventListener("change", () => {
       breeds.innerHTML = ""
        switch(dropDown.value){
           case "a": 
            key.forEach(k => {
                if (k.startsWith("a")){
                    list(k)
                } 
            })
            break;
            case "b":
             key.forEach(k => {
                if (k.startsWith("b")){
                        list(k)
                    }
                })
            break;
            case "c": 
             key.forEach(k => {
                if (k.startsWith("c")){
                     list(k)
                 }
             })
             break;
             default: 
              key.forEach(k => {
                if (k.startsWith("d")){
                    list(k)
                }
            })
       }
        
   })
 })
})
