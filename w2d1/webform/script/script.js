function showLoginFields(event) {
    event.preventDefault();
    console.log("Website URL: " + document.getElementById("website-url").value);
    console.log("Email Id: " + document.getElementById("exampleInputEmail1").value);
    console.log("Password: " + document.getElementById("exampleInputPassword1").value);   
    return false; 
}