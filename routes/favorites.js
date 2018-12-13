var express = require('express')
var router = express.Router()
const knex = require('../knex')

router.get('/favorites',(req, res) => {
  // console.log(req.userCredentials);
  return knex('favorites')
    .innerJoin('users', 'favorites.users_id', 'users.id')
    .innerJoin('trails', 'favorites.trails_id', 'trails.id')
    .then((result) => {
      res.status(200).send(result)
    })
})

router.get('/', ())
// - Favorites
//   - POST /api/favorites add a new favorite
//   - GET /api/favorites Retrieve all favorites
//   - GET /api/favorites/:id Retrieve a single favorite
//   - DELETE /api/favorites/:id Delete an favorite
//


module.exports = router
