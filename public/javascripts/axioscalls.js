// Trails


//get all trails in db
const getAllTrails = () => {
  return axios.get('/trails')
    .then(data => {
      return data.data
    })
}

// get one trail by id
const getOneTrail = id => {
  return axios.get(`/trails/${id}`)
    .then(data => {
      return data.data
    })
}

// POST /api/signup Create a new user
// user = {
// email:
// password:
// }
const createNewUser = newUser => {
  return axios.post('/users', newUser)
    .then(data => {
      return data.data
    })
}

// POST /api/login User login
// user = {
// email:
// password:
// }
const loginUser = user => {
  return axios.post('/token', user)
    .then(data => {
      return data.data
    })
}

// GET /api/favorites Retrieve all favorites
// only favorites for user based on cookie
const getFavorites = () => {
  return axios.get('/favorites')
    .then(data => {
      return data.data
    })
}

//POST /api/favorites add a new favorite
// to user based on cookie
const addFavorite = (favorite) => {
  return axios.post('/favorites',favorite)
    .then(data => {
      return data.data
    })
}

//GET /api/favorites/:id Retrieve a single favorit
// id is pkey id in favorites table. will fail if favorite with
// id is not assigned to current user
const getAFavorite = (id) => {
  return axios.get(`/favorites/${id}`)
    .then(data => {
      return data.data
    })
}

//DELETE /api/favorites/:id Delete an favorite
// id is favorites.id pkey
// will fail if user does not have proper auth to delete
const deleteFavorite = id => {
  axios.delete(`/favorites/${id}`)
  .then(data => {
    return data.data
  })
}


const putOnPage = (data) => {
  let p = document.createElement('p')
  p.innerText = JSON.stringify(data)
  document.querySelector('body').appendChild(p)
}
