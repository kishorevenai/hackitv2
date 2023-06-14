
const footerSubmit = document.querySelectorAll('.footerSubmit')
const FooterEmail = document.querySelector('.FooterEmail')
const F2 = document.querySelector('.F2')
const box3 = document.querySelectorAll('.Why_Hackit_boxe3 div .desc')


// box3.forEach(item => item.addEventListener('mouseenter', () => {
//     item.style.display = "block"    
// }))
// box3.forEach(item => item.addEventListener('mouseleave', () => {
//     item.style.display = "none"
// }))





const handleSubmit = async(e) => {    
    console.log(e);
    e.preventDefault()        
    const email = FooterEmail.value
    if(email === '') {
        alert('please enter your email')
        return;
    }
    try {
        const final = await axios.post(`${BASE_URL}/email`,{email})           
        console.log(final.data)             
    } catch (error) {
        console.log(error.message)
        alert(error.message)
    }   
      
}

footerSubmit.forEach(item => item.addEventListener('click',handleSubmit))