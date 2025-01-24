function validateEmail(email) {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return emailPattern.test(email);
    
    }


document.getElementById("newsletter-btn").onclick = function(){
    const email = document.getElementById("email-input").value

    if (!validateEmail(email)){
        document.getElementById("error-message").style.display = "block"
        document.getElementById("email-input").id = "test"
    }
}


