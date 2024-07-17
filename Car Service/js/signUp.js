let fname = document.getElementById("Firstname");
let lname = document.getElementById("Lastname");
let phone = document.getElementById("phone");
let email = document.getElementById("Email");
let password = document.getElementById("Password");
let confirmedPassword =document.getElementById("confirmedPass"); 
let submitBtn = document.getElementById("submit");


let arrayOfUsers;
if (localStorage.getItem("usersDb") == null) {
    arrayOfUsers = [];
}
else {
    arrayOfUsers = JSON.parse(localStorage.getItem("usersDb"))
}

submitBtn.addEventListener("click", function () {
    if (checkIfEmpty() == true) {
        alert("Fill All Fields Please ....");
    }
    else {
        addNewUser();
    }

})

function addNewUser() {
    let user =
    {
        firstName: fname.value,
        lastName: lname.value,
        phone: phone.value,
        eMail: email.value,
        password: password.value
    }
    arrayOfUsers.push(user);
    localStorage.setItem("usersDb", JSON.stringify(arrayOfUsers));
}

function checkIfEmpty() {
    if (fname.value == "" || lname.value == "" || phone.value || email.value == "" || password.value == "") {
        return true;
    }
    else return false;
}

//Validate First Name

function validateFirstName() {
    let regex = /^[a-z]{3,15}$/;
    if (regex.test(fname.value) == true) {
        fname.classList.add("is-valid");
        fname.classList.remove("is-invalid");
    }
    else {
        fname.classList.remove("is-valid");
        fname.classList.add("is-invalid");
    }
}

fname.addEventListener("keyup", validateFirstName);

//Validate Last Name 

function validateLastName() {
    let regex = /^[a-z]{3,15}$/;
    if (regex.test(lname.value) == true) {
        lname.classList.add("is-valid");
        lname.classList.remove("is-invalid");
    }
    else {

        lname.classList.add("is-invalid");
        lname.classList.remove("is-valid");
    }
}

lname.addEventListener("keyup", validateLastName);

//Validate Phone Number . 

function validatePhoneNumber() {
    let regex = /^01[0125][0-9]{8}$/;
    if (regex.test(phone.value) == true) {
        phone.classList.add("is-valid");
        phone.classList.remove("is-invalid");
    }
    else {
        phone.classList.remove("is-valid");
        phone.classList.add("is-invalid");
    }
}

phone.addEventListener("keyup", validatePhoneNumber);

//Validate Email ...

function validateEmail() {

    let regex = /^[a-zA-Z0-9]{3,20}@gmail\.com$/;
    if (regex.test(email.value) == true) {
        email.classList.add("is-valid");
        email.classList.remove("is-invalid");
    }
    else {
        email.classList.remove("is-valid");
        email.classList.add("is-invalid");
    }

}

email.addEventListener("keyup",validateEmail); 

//Validate Password

function validatePassword()
{
    let regex =/^.{5,20}$/; //any Character From 5 to 20 times .
    if(regex.test(password.value)==true)
    {
        password.classList.add("is-valid");
        password.classList.remove("is-invalid");
    }
    else {
        password.classList.remove("is-valid");
        password.classList.add("is-invalid");
    }
}

password.addEventListener("keyup",validatePassword); 

//Validate And Check Confirmed Password

function validateConfirmedPassword()
{
    let regex = /^.{5,20}$/;
    if(regex.test(password.value)==true&&confirmedPassword.value==password.value)
    {
        confirmedPassword.classList.add("is-valid");
        confirmedPassword.classList.remove("is-invalid");
    }
    else {
        confirmedPassword.classList.remove("is-valid");
        confirmedPassword.classList.add("is-invalid");
    }
}

confirmedPassword.addEventListener("keyup",validateConfirmedPassword); 