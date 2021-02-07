document.addEventListener('DOMContentLoaded', () => {
  axios.get('/favorites')
  .then(data => {
    console.log(data)
    for (let x = 0; x < data.data.length; x++) {
      console.log(data.data[x])
      $('#carddiv').append(
        `<div class="card">
          <img class="card-img-top" src="${data.data[x].img_medium}">
          <div class="card-body">
            <h5 class="card-title"><span>${data.data[x].name}<span></h5>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-${x}">
              More Info
            </button>
            <!-- Modal -->
            <div class="modal fade" id="modal-${x}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title pl-3 pr-3 pt-2 pb-2" id="exampleModalLabel"><span>${data.data[x].name}<span></h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <h6>Difficulty:<span> ${data.data[x].difficulty}<span></h6>
                    <h6>Summary:<span> ${data.data[x].summary}<span></h6>
                    <h6>Stars:<span> ${data.data[x].stars}<span></h6>
                    <h6>URL: <span><a href="${data.data[x].url}" target='_blank'>Click Here</a><span></h6>
                    <h6>Location:<span> ${data.data[x].location}<span></h6>
                    <h6>Length:<span> ${data.data[x].length}<span></h6>
                    <h6>Ascent:<span> ${data.data[x].ascent}<span></h6>
                    <h6>Descent:<span> ${data.data[x].descent}<span></h6>
                    <h6>High:<span> ${data.data[x].high}<span></h6>
                    <h6>Low:<span> ${data.data[x].low}<span></h6>
                    <h6>Longitude:<span> ${data.data[x].longitude}<span></h6>
                    <h6>Latitude:<span> ${data.data[x].latitude}<span></h6>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`
      )
    }
  })
})
