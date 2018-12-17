use strict'

const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const knex = require('../knex')
const secretToken = process.env.JWT_KEY

const verify = function(req, res, next) {
  jwt.verify(req.cookies.token, secretToken,
    (err, decoded) => {
      if (err) {
        next({
          status: 401,
          error: err,
          message: 'Unauthorized'
        })
      } else {
        req.userCredentials = decoded
        next()
      }
    })
}

router.get('/', verify, (req, res, next) => {
  knex('favorites')
    .innerJoin('users', 'favorites.user_id', 'users.id')
    .innerJoin('trails', 'favorites.trail_id', 'trails.id')
    .where({
      'users.email': req.userCredentials.email
    })
    .select('user.id', 'trails.id)
    .then((favorite) => {
      res.status(200).send(favorite)
    })
    .catch((err) => {
      next(err)
    })
})
router.get('/:id', verify, (req, res, next) => {
  knex('users')
  .where({ email: req.userCredentials.email})
  .first()
  .then( user => {
    knex('favorites')
    .where({ 'user_id': user.id, 'trail_id': req.params.id  })
    .then(favorite =>{
      res.send(favorite)
    })
  })
})
router.post('/', verify, (req, res, next) => {
knex('users')
  .where({
    email: req.userCredentials.email
  })
  .first()
  .then(user => {
    knex('favorites')
      .insert({
        trail_id: req.body.trailId,
        user_id: user.id
      }, ['trail_id','user_id'])
      .then(favorite => {
        res.send(favorite)
      })
  })
})
router.delete('/', verify, (req, res, next) => {
  knex('users')
  .where({ email: req.userCredentials.email })
  .first()
  .then(user => {
      knex('favorites')
      .where({ 'user_id': user.id, 'trail_id':req.body.trailId  })
      .del()
      .returning('*')
      .then(trail => {
        res.send(trail)
      })
  })
})
module.exports = router
