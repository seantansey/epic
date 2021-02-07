document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById("Login")
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault()
    let user = {}
    user.email = loginForm.inputEmail.value
    user.password = loginForm.inputPassword.value
    createNewUser(user).then(data => {
      console.log(data)
      //window.location.href = 'login.html'
      if (data.status === 200) {
        loginUser(user).then(login => {
          if (login.status === 200) {
            window.location.href = 'trails.html'
          }
        })
      }
      else {
        console.log('server error, please try again')
      }
    })
  })

  const goToLoginBtn = document.getElementById('login-page-btn')

  goToLoginBtn.addEventListener('click', () => {
    window.location.href='login.html'
  })
})
