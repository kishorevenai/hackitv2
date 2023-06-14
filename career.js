// const moon = document.querySelector('.darkmode')
// // const sun = document.querySelector('.darkmode')

const ShowDesc = document.querySelectorAll('.btn_2')
const Description = document.querySelectorAll('.Description')
console.log(Description)

// ShowDesc = document.addEventListener('click',()=> {

// })


ShowDesc.forEach(item => item.addEventListener('click',()=> {   
   Description.forEach(items => {
      if(item.id === items.id) {
         if(item.getAttribute("data-status") === "true") {
            items.style.height = "100px"
            item.setAttribute("data-status","false")      
         }
         else {
            items.style.height = "0px"
            item.setAttribute("data-status","true")            
         }
      }
   })
}))


// --------------------Slider---------------------------


const leftArrow = document.querySelector('.leftArrow')
const rightArrow = document.querySelector('.rightArrow')
const slider_arrow = document.querySelector('.slider_arrow')

let value = 0;
let changer = 180
leftArrow.addEventListener('click', () => {   
   if(value < 0){
      value += changer;
      slider_arrow.style.transform = `translateX(${value}px)`
   }
   console.log(value)
})
rightArrow.addEventListener('click', () => {   
   if(value > -540) {      
      value -= changer
      slider_arrow.style.transform = `translateX(${value}px )`
   }
})

// ---------------------------Dark mode------------------------------------

function changeMode() {
   const body = document.body;
   
   // toggle the theme
   body.classList.toggle("dark-theme");
   let img = document.getElementById('img');
   
   // change the button text
   if (img.innerHTML == "Dark Mode") {
      img.innerHTML = "Normal Mode";
   } else {
      img.innerHTML = "Dark Mode"
   }
}