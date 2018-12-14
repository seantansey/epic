

function getAllTrails () {
  axios.get('/trails').then(data =>{
    putOnPage(data.data)
  })
}

function putOnPage (data) {
  document.querySelector('body').innerText = JSON.stringify(data)
}
