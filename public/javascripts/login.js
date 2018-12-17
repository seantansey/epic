document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById("Login")
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(loginForm.inputEmail.value)
    let user = {}
    user.email = loginForm.inputEmail.value
    user.password = loginForm.inputPassword.value
    loginUser(user).then(data => {
      window.location.href = 'trails.html'
    })
  })


})
