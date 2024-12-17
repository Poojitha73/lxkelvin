document.getElementById("email").addEventListener("focus", function () {
    const nameField = document.getElementById("name").value;
    const emailField = document.getElementById("email");
    const errorField=document.getElementById("para");

    if (nameField.trim() === "") {
        
        document.getElementById("name").focus(); 
        para.textContent="Please fill the Name field first " 
        para.style.color="red"                            
    }
     else {
        
        para.textContent=""
        
    }
});

document.getElementById("form").addEventListener("submit",function(event){
    event.preventDefault();
    const passwordField=document.getElementById("password").value;
    const reenterField=document.getElementById("reenter").value;

    if(passwordField !== reenterField){
        
     alert(" Passwords Doesn't match");
    }
    else{
        alert("regsiter successfully");
    }
});


