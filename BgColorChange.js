const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ['blue' , 'red' , 'pink' , 'yellow' , 'voilet' , 'orange']

button.addEventListener('click',change)

function change(){
    const ci = parseInt(Math.random()*color.length)
    body.style.backgroundColor= color[ci]
}