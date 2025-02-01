function validateEmail(email) {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return emailPattern.test(email);
    
    }

    function emailReturn(){
        document.getElementById("error-state").id = "email-input"
        document.getElementById("error-message").style.display = "none"
    }


document.getElementById("newsletter-btn").onclick = function(){
    const email = document.getElementById("email-input").value
    

    if (!validateEmail(email)){
        document.getElementById("error-message").style.display = "block"
        document.getElementById("email-input").id = "error-state"
    } 
    else {
        document.getElementById("main-block").style.display = "none"
        document.getElementById("main-block-success").style.display = "flex"
        document.getElementById("confirmation-email").textContent = email
    }

    if (document.getElementById("error-state")){
        setTimeout(emailReturn, 5000);
    }
}


document.getElementById("dismiss-message-btn").onclick = function(){
    document.getElementById("main-block-success").style.display = "none"
    document.getElementById("main-block").style.display = "flex"
}


