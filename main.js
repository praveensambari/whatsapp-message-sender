function sendMessage() {
    const phone = document.getElementById('phoneNumber').value
    const countrycode = document.getElementById('countryCode').value
    const error = document.getElementById('errorMessage')

    if(phone==="") {
        error.innerHTML = "Please enter phone number."
    } 
    else if(phone.length==10){
        
        window.location = "https://wa.me/" + countrycode +phone 
    }
    else  {
        error.innerHTML = "Please enter valid phone number."
    } 
}

