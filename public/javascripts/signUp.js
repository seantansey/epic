document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById("Login")
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault()
    let user = {}
    user.email = loginForm.inputEmail.value
    user.password = loginForm.inputPassword.value
    createNewUser(user).then(data => {
      window.location.href = 'login.html'
    })
  })

  const goToLoginBtn = document.getElementById('login-page-btn')

  goToLoginBtn.addEventListener('click', () => {
    window.location.href='login.html'
  })
})
