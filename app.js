const form = document.getElementById('myform');
const password = document.getElementById('mypassword')
const confirmPassword = document.getElementById('confirmpassword')
const hurryup = document.getElementById('hurryup')
form.addEventListener('submit',function(event){
    event.preventDefault()
    //this prevents the page from refreshing every tiem the submit button is pressed
    let passwordsMatch = false
    if(password.value == confirmPassword.value){
        passwordsMatch = true
        hurryup.innerText = 'Passwords Match'
    }
    else{
        passwordsMatch = false
        hurryup.innerText = 'Passwords Do not Match'      
    }
})