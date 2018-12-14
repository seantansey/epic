document.addEventListener('DOMContentLoaded', () => {
  axios.get('/trails')
  .then(data => {
    for (let x = 0; x < data.data.length; x++) {
      console.log(data.data[x])
      $('#carddiv').append(
        `<div class="card">
          <img class="card-img-top" src="${data.data[x].img_medium}">
          <div class="card-body">
            <h4 class="card-title"><span>${data.data[x].name}<span></h4>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-${x}">
              More Info
            </button>
            <!-- Modal -->
            <div class="modal fade" id="modal-${x}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Trail Info: <span>${data.data[x].name}<span></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <h6>Name:<span> ${data.data[x].name}<span></h6>
                    <h6>Difficulty:<span> ${data.data[x].difficulty}<span></h6>
                    <h6>Summary:<span> ${data.data[x].summary}<span></h6>
                    <h6>Stars:<span> ${data.data[x].stars}<span></h6>
                    <h6>URL:<span> ${data.data[x].url}<span></h6>
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
    // data.data.forEach((trailcard) => {
    //   console.log(trailcard)
    //   $('#carddiv').append(
    //     `<div class="card">
    //       <img class="card-img-top" src="https://mthoodterritory.objects.liquidweb.services/photos/mountain-biking-sandy-ridge-trail-Square-400x400.png" alt="Card image">
    //       <div class="card-body">
    //         <h4 class="card-title">Trail Name</h4>
    //         <!-- Button trigger modal -->
    //         <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
    //           More Info
    //         </button>
    //         <!-- Modal -->
    //         <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    //           <div class="modal-dialog" role="document">
    //             <div class="modal-content">
    //               <div class="modal-header">
    //                 <h5 class="modal-title" id="exampleModalLabel">Trail Info:</h5>
    //                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    //                   <span aria-hidden="true">&times;</span>
    //                 </button>
    //               </div>
    //               <div class="modal-body">
    //                 <h6>Name:<span> ${trailcard.name}<span></h6>
    //                 <h6>Difficulty:<span> ${trailcard.difficulty}<span></h6>
    //                 <h6>Summary:<span> ${trailcard.summary}<span></h6>
    //                 <h6>Stars:<span> ${trailcard.stars}<span></h6>
    //                 <h6>URL:<span> ${trailcard.url}<span></h6>
    //                 <h6>Location:<span> ${trailcard.location}<span></h6>
    //                 <h6>Length:<span> ${trailcard.length}<span></h6>
    //                 <h6>Ascent:<span> ${trailcard.ascent}<span></h6>
    //                 <h6>Descent:<span> ${trailcard.descent}<span></h6>
    //                 <h6>High:<span> ${trailcard.high}<span></h6>
    //                 <h6>Low:<span> ${trailcard.low}<span></h6>
    //                 <h6>Longitude:<span> ${trailcard.longitude}<span></h6>
    //                 <h6>Latitude:<span> ${trailcard.latitude}<span></h6>
    //               </div>
    //               <div class="modal-footer">
    //                 <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>`
    //   )
    //
    // })

  })

  //getOneTrail(4)

  // createNewUser({
  //   email: "sara@gmail.com",
  //   password: "123"
  // })
  //
  // loginUser({
  //   email: "jamie@gmail.com",
  //   password: "123"
  // })



})
