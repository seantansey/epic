//Users
//
//POST /api/signup Create a new user
//POST /api/login User login
//POST /api/logout logout user
//GET /api/users/:id Retrieve user information
//Favorites
//
//POST /api/favorites add a new favorite
//GET /api/favorites Retrieve all favorites
//GET /api/favorites/:id Retrieve a single favorite
//DELETE /api/favorites/:id Delete an favorite
//Trails
//
//GET /api/trails/:id get a single trail
//GET /api/trails get all trails


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

const putOnPage = data => {
  console.log('hi');
  let p = document.createElement('p')
  p.innerText = JSON.stringify(data)
  document.querySelector('body').appendChild(p)
}
