document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById("Login")
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(loginForm.inputEmail.value)
    let user = {}
    user.email = loginForm.inputEmail.value
    user.password = loginForm.inputPassword.value
    createNewUser(user).then(data => {
      console.log(data)
    })
  })

  const goToLoginBtn = document.getElementById('login-page-btn')

  goToLoginBtn.addEventListener('click', () => {
    console.log('hello')
    window.location.href='HomePage.html'
  })
})
