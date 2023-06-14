const emailSubmit = document.querySelector('.Submit')
const FullName = document.querySelector('.FullName')
const Email = document.querySelector('.Email')
const PhoneNumber = document.querySelector('.PhoneNumber')
const Description = document.querySelector('.Description')
console.log(FullName,Email,PhoneNumber,Description)

const URL = "http://localhost:5000"


emailSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    handleMailer();
})

const handleMailer = async() => {    
    if(FullName.value === '' || Email.value === '' || PhoneNumber.value === '' || Description.value === '') {
        alert('Please enter the required field')
        return;
    }
    try {
        
        const result = await axios.post(`${URL}/emailBody/emailBodyContent`,{FullName:FullName.value,Email:Email.value,PhoneNumber:PhoneNumber.value,Description:Description.value})       
        if(result.status === 200) {
            alert('The mail has been sent')
        }
        else {
            alert('The mail has faced with problem,Try again later')
        }
    } catch (error) {
        console.log(error.message)
    }
    
}