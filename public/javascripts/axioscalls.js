// Trails


const getAllTrails = () => {
  return axios.get('/trails')
    .then(data => {
      return data.data
    })
}

const getOneTrail = id => {
  return axios.get(`/trails/${id}`)
    .then(data => {
      return data.data
    })
}

const createNewUser = newUser => {
  axios.post('/users', newUser)
    .then(data => {
      return data.data
    })
}

// POST /api/signup Create a new user


// POST /api/login User login
const loginUser = user => {
  return axios.post('/token', user)
    .then(data => {
      return data.data
    })
}

// GET /api/favorites Retrieve all favorites
const getFavorites = () => {
  return axios.get('/favorites')
    .then(data => {
      return data.data
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
