document.addEventListener('DOMContentLoaded', () => {
  getAllTrails()
  createNewUser({
    email: "sara@gmail.com",
    password: "123"
  })

  loginUser({
    email: "jamie@gmail.com",
    password: "123"
  })



})
