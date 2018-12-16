document.addEventListener('DOMContentLoaded', () => {
  getAllTrails().then(data => {
    putOnPage(data)
  })

  getOneTrail(2).then(data =>{
    putOnPage(data)
  })
  //getAllTrails()
  //getOneTrail(4)
  //createNewUser({
  //  email: "sara@gmail.com",
  //  password: "123"
  //})
//
  //loginUser({
  //  email: "jamie@gmail.com",
  //  password: "123"
  //})
})
