'use strict'

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
    .then((favorites) => {
      favorites.forEach(favorite => {
        delete favorite.password
        delete favorite.email
        delete favorite.user_id
      })
      res.status(200).send(favorites)
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

// working here

router.post('/', verify, (req, res, next) => {
knex('users')
  .where({
    email: req.userCredentials.email
  })
  .first()
  .then(user => {

    knex('favorites')
      .where({
        'favorites.user_id': user.id
      })
      .then(favorites =>{
        let favoriteArr = favorites.filter(elem=>{
          return elem.trail_id === req.body.trailId
        })
        if (favoriteArr.length === 0){
          knex('favorites')
          .insert({
            trail_id: req.body.trailId,
            user_id: user.id
          }, ['trail_id','user_id'])
          .then(favorite => {
            res.send(favorite)
          })
        } else {
          res.send("favorite already exist")
        }
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
