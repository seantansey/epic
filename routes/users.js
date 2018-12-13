var express = require('express')
var knex = require('../knex.js')
const bcrypt = require('bcrypt')
var router = express.Router()

/* GET users listing. */
router.post('/', function(req, res, next) {
  bcrypt.hash(req.body.password, 10).then((hashpass) => {
    return knex('users')
      .insert({
        email: req.body.email,
        password: hashpass
      })
      .returning(['id', 'email'])
      .then((user) => {
        res.status(200).send(user[0])
      })
      .catch((err) => {
        next(err)
      })
  })
})



module.exports = router;
