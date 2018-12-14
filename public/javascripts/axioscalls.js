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
//GET /api/users/:id Retrieve user information

// Favorites

// GET /api/favorites Retrieve all favorites
const getFavoirtes = () => {
  return axios.get('/favorites')
    .then(data => {
      putOnPage(data.data)
      console.log(datagit);
    })
}

//POST /api/favorites add a new favorite
//GET /api/favorites/:id Retrieve a single favorite
//DELETE /api/favorites/:id Delete an favorite



const putOnPage = (data) => {
  console.log('hi');
  let p = document.createElement('p')
  p.innerText = JSON.stringify(data)
  document.querySelector('body').appendChild(p)
}
