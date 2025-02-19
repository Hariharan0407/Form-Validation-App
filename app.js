const form = document.getElementById('myform');
const password = document.getElementById('mypassword')
const confirmPassword = document.getElementById('confirmpassword')
const hurryup = document.getElementById('hurryup')
form.addEventListener('submit', function (event) {
    event.preventDefault()
    //this prevents the page from refreshing every tiem the submit button is pressed
    let passwordsMatch = false
    if (password.value == confirmPassword.value) {
        passwordsMatch = true
        hurryup.innerText = 'Passwords Match'
        const data = {
            fullname: event.target[0].value,
            phonenumber: event.target[1].value,
            email: event.target[2].value,
            url: event.target[3].value,
            password: event.target[4].value,
            confirmpassword: event.target[5].value,
        }

        console.log(data)
    }
    else {
        passwordsMatch = false
        hurryup.innerText = 'Passwords Do not Match'
    }
})