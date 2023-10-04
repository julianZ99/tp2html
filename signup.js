
function validateForm() {
    let ageRe = /^([0-9]){1,2}$/;
    let nameRe = /^([a-zA-Z ]){1,20}$/;
    let emailRe = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;
    let passRe=   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{9,20}$/;

    let name = document.forms["myForm"]["firstName"].value;
    let lastName = document.forms["myForm"]["lastName"].value;
    let email = document.forms["myForm"]["email"].value;
    let age = document.forms["myForm"]["age"].value;
    let password = document.forms["myForm"]["password"].value;

    if (!nameRe.test(name)) {
        alert("Name must be filled out, and needs to be less than 20 characters long.");
        return false;
    } else if (!nameRe.test(lastName)) {
        alert("Last Name must be filled out, and needs to be less than 20 characters long.");
        return false;
    } else if (!ageRe.test(age)) {
        alert("Incorrect age");
        return false;
    } else if (!passRe.test(password)){
        alert("Password must contain at least one uppercase character, one number, one special character and must be 9 or more characters long (maximum 20).");
        return false;
    } else if (!emailRe.test(email)) {
        alert("Incorrect email address");
        return false;
    }
}

