document.addEventListener('DOMContentLoaded', () => {

  getAllTrails()
  getOneTrail(4)

  createNewUser({
    email: "sara@gmail.com",
    password: "123"
  })

  loginUser({
    email: "jamie@gmail.com",
    password: "123"
  })


  logoutUser({
    email: "jamie@gmail.com",
    password: "123"
  })

  getOneUser({
    email: "kyle@gmail.com",
    password: "123"
  })

  addFavorite({
    trailId: 1,
    userId: 1
  })

  getFavorites()

  getAFavorite(4)

})
