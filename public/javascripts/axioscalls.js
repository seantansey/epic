

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



  function putOnPage(data) {
    document.querySelector('body').innerText = JSON.stringify(data)
  }
