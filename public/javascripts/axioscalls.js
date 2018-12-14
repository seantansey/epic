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

function getAllTrails () {
  axios.get('/trails').then(data =>{
    putOnPage(data.data)
  })
}

function putOnPage (data) {
  document.querySelector('body').innerText = JSON.stringify(data)
}
