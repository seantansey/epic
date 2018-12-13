var express = require('express')
const jwt = require('jsonwebtoken')
var knex = require('../knex.js')
const bcrypt = require('bcrypt')
var router = express.Router()

const key = process.env.JWT_KEY

//get route, checks for cookie
router.get('/', (req, res, next) => {
  jwt.verify(req.cookies.token, key, (err) => {
    if(err) {
      res.send(false)
    }
    else {
      res.send(true)
    }
  })
})

// post route, log in
router.post('/', (req, res, next) => {
  return knex('users')
    .where('email', req.body.email)
    .first()
    .then((user) => {
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (result) {
          delete user.password
          delete user.created_at
          delete user.updated_at
          const token = jwt.sign(JSON.stringify(user), key)
          res.cookie('token', token, { httpOnly: true })
          .send({
            id: user.id,
            email: user.email
          })
        }
        else {
          next({
            status: 400,
            error: err,
            message: 'Bad email or password'
          })
        }
      })
    })
    .catch(() => {
      next({
        status: 400,
        message: 'Bad email or password'
      })
    })
})

// delete cookie
router.delete('/', (req, res, next) => {
  res.cookie('token', '', { httpOnly: true }).send('logged out')
})

module.exports = router
