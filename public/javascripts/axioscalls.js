<<<<<<< HEAD
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


function getAllTrails () {
  axios.get('/trails')
  .then(data => {
    console.log(data.data)
=======
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
  axios.post('/users', newUser)
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
>>>>>>> 75d57549ff9e6c350f70c3010b1a4b63da95ec17
    return data.data
  })
}

<<<<<<< HEAD
function getOneTrail (id) {
  axios.get(`/trails/${id}`).then(data => {
    putOnPage(data.data)
  })
}

function putOnPage (data) {
  console.log('hi');
=======

const putOnPage = (data) => {
>>>>>>> 75d57549ff9e6c350f70c3010b1a4b63da95ec17
  let p = document.createElement('p')
  p.innerText = JSON.stringify(data)
  document.querySelector('body').appendChild(p)
}
<<<<<<< HEAD
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

  // GET /api/favorites Retrieve all favorites
  const getFavoirtes = () => {
    return axios.get('/favorites')
      .then(data => {
        putOnPage(data.data)
      })
  }
=======
>>>>>>> 75d57549ff9e6c350f70c3010b1a4b63da95ec17
