var express = require('express')
var knex = require('../knex.js')
const bcrypt = require('bcrypt')
var router = express.Router()

// post new user
router.post('/', (req, res, next) => {
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

// get all users
router.get('/', (req, res, next) => {
  return knex('users')
    .then((users) => {
      res.status(200).send(users)
    })
    .catch((err) => {
      next(err)
    })
})

//get one user
router.get('/:id', (req, res, next) => {
  return knex('users')
    .where('id', req.params.id)
    .then((user) => {
      res.status(200).send(user[0])
    })
    .catch((err) => {
      next(err)
    })
})





module.exports = router;
