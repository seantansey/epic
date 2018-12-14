// Trails

//GET /api/trails get all trails
const getAllTrails = () => {
  axios.get('/trails')
    .then(data => {
      putOnPage(data.data)
    })
}

//GET /api/trails/:id get a single trail
const getOneTrail = (id) => {
  axios.get(`/trails/${id}`).then(data => {
    putOnPage(data.data)
  })
}

// Users

// POST /api/signup Create a new user
const createNewUser = (newUser) => {
  axios.post('/users', newUser)
    .then(data => {
      putOnPage(data.data)
    })
}

// POST /api/login User login
const loginUser = (user) => {
  axios.post('/token', user)
    .then(data => {
      putOnPage(data.data)
    })
}

//POST /api/logout logout user
const logoutUser = (user) => {
  axios.post('/users', user)
    .then(data => {
      putOnPage(data.data)
    })
}

//GET /api/users/:id Retrieve user information
const getOneUser = (user) => {
  axios.get('/token', user)
    .then(data => {
      putOnPage(data.data)
    })
}

// Favorites

// GET /api/favorites Retrieve all favorites
const getFavorites = () => {
  return axios.get('/favorites')
    .then(data => {
      putOnPage(data.data)
    })
}

//POST /api/favorites add a new favorite
const addFavorite = (favorite) => {
  return axios.post('/favorites',favorite)
    .then(data => {
      putOnPage(data.data)
    })
}

//GET /api/favorites/:id Retrieve a single favorite
const getAFavorite = (id) => {
  axios.get(`/favorites/${id}`)
    .then(data => {
      putOnPage(data.data)
    })
}

//DELETE /api/favorites/:id Delete an favorite


const putOnPage = (data) => {
  let p = document.createElement('p')
  p.innerText = JSON.stringify(data)
  document.querySelector('body').appendChild(p)
}
