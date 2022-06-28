let img = [{
    name: "penguin",
    img: "img/penguin.png"
},
{
    name: "bird",
    img: "img/bird.png"
},
{
    name: "seal",
    img: "img/seal-.png"
},
{
    name: "baby-elephant",
    img: "img/baby-elephant.png"
},
{
    name: "bee",
    img: "img/bee.png"
},
{
    name: "turtle",
    img: "img/turtle.png"
},
{
    name: "penguin",
    img: "img/penguin.png"
},
{
    name: "bird",
    img: "img/bird.png"
},
{
    name: "seal",
    img: "img/seal-.png"
},
{
    name: "baby-elephant",
    img: "img/baby-elephant.png"
},
{
    name: "bee",
    img: "img/bee.png"
},
{
    name: "turtle",
    img: "img/turtle.png"
}
]
let chosenItem = []
let chosenItemsIDs = []

let wonCards = []
img.sort(()=>  0.5 - Math.random())
const grid = document.querySelector(".grid")
let score = document.querySelector(".score")
function checkMatch(){
    const images = document.querySelectorAll("img")
    if (chosenItemsIDs[0] === chosenItemsIDs[1]){
        images[chosenItemsIDs[0]].setAttribute("src", "img/open.png")
        images[chosenItemsIDs[1]].setAttribute("src", "img/open.png")
        
        
    }
    if (chosenItem[0] === chosenItem[1]){
        images[chosenItemsIDs[0]].setAttribute("src", "img/white.png")
        images[chosenItemsIDs[1]].setAttribute("src", "img/white.png")
        images[chosenItemsIDs[0]].removeEventListener("click", flipItem)
        images[chosenItemsIDs[1]].removeEventListener("click", flipItem)
        wonCards.push(chosenItem)
    } else{
        images[chosenItemsIDs[0]].setAttribute("src", "img/open.png")
        images[chosenItemsIDs[1]].setAttribute("src", "img/open.png")
        
    }
  
    
    chosenItem = []
    chosenItemsIDs = []
    score.innerHTML =  wonCards.length
    if (wonCards.length === img.length/2 ){
        score.textContent = "all"
        alert("congratulations")
        location.reload()
    }
}
    
function createItem(){
   for(i = 0; i < img.length; i++){
     let item = document.createElement("img")
     item.setAttribute("src",  "img/open.png")
     item.setAttribute("data-id", i)
     grid.appendChild(item)
     item.addEventListener("click", flipItem)
   }
}


function flipItem(){
    const itemId = this.getAttribute("data-id")
    chosenItem.push(img[itemId].name)
    chosenItemsIDs.push(itemId)
    this.setAttribute("src", img[itemId].img)
    if(chosenItem.length === 2){
         setTimeout(checkMatch, 300)
    }
    
}

createItem()
const buttonReload = document.querySelector(".button")
buttonReload.addEventListener("click", ()=>{
    location.reload()
})