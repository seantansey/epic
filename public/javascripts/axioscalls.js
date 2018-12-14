document.addEventListener('DOMContentLoaded', event => {

  const createNewUser = (user) => {
    return axios.post ('/users', user)
    putOnPage(data)
  }

  const putOnPage = (data) =>{
    document.querySelector('body').innerText = data
    //
    // DELETE /api/logout logout user
    // const deleteUser = (userId) => {
    //   return axios.delete(`/users/${userId}`)
    // }

  })
  }

// Users
//
// POST /api/signup Create a new user
// POST /api/login User login
// POST /api/logout logout user
// GET /api/users/:id Retrieve user information
//
// Favorites
//
// POST /api/favorites add a new favorite
// GET /api/favorites Retrieve all favorites
// GET /api/favorites/:id Retrieve a single favorite
// DELETE /api/favorites/:id Delete an favorite
//
// Trails
//
// GET /api/trails get all trails
// GET /api/trails/:id get a single trail

// users:

// function createNewUser(user){
//   return axios.post('/users', user)
// }
//
// function deleteUser(userId){
//   return axios.delete(`/users/${userId}`)
// }
//
// //trails
// function getAllUsers(){
//   return axios.get('/users')
// }
//
//
// function getOneUser(userId){
//   return axios.get(`/users/${userId}`)
// }
//
// //favorites
// function updateUser(user){
//   return axios.patch(`/users/${user.id}`, user)
// }
