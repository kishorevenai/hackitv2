const sliderOuter = document.querySelector('.SliderOuter')
let screenWidth = window.innerWidth




if(screenWidth >= 1600 && screenWidth <= 1919) {    
    sliderOuter.style.width = `78.5%`    
    if(screenWidth === 1600) {        
        sliderOuter.style.width = `74%`
    }    
}

if(screenWidth >= 1440 && screenWidth <= 1599) {    
    sliderOuter.style.width = `69%`
    if(screenWidth === 1440) {        
        sliderOuter.style.width = `60%`        
    }    
}