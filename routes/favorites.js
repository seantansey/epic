'use strict'

var express = require('express')
const jwt = require('jsonwebtoken')
var router = express.Router()
const knex = require('../knex')
const key = process.env.JWT_KEY

const verify = function(req, res, next) {
  jwt.verify(req.cookies.token, key, (err, decoded) => {
    if (err) {
      next({
        status: 401,
        message: 'Unauthorized'
      })
    }
    else {
      req.userCredentials = decoded

      // console.log(req.userCredentials);
      next()
    }
  })
}

router.get('/', verify, (req, res, next) => {
  return knex('favorites')
    .innerJoin('users', 'favorites.user_id', 'users.id')
    .innerJoin('trails', 'favorites.trail_id', 'trails.id')
    .then((favorite) => {
      res.status(200).send(favorite[0])
    })
    .catch((err) => {
      next(err)
    })
})

router.get('/:id', verify, (req, res, next) => {
  return knex('favorites')
    .innerJoin('users', 'favorites.user_id', 'users.id')
    .innerJoin('trails', 'favorites.trail_id', 'trails.id')
    .where('favorites.id', req.params.id)
    .then((result) => {
      res.status(200).send(result[0])
    })
    .catch((err) => {
      next(err)
    })
})

router.post('/', verify, (req, res, next) => {
  return knex('favorites')
  .insert({
    trail_id: req.body.trailId,
    user_id: 1
  })
  .returning(['id','trail_id','user_id'])
  .then((result) => {
    res.status(200).send(result[0])
  })
  .catch((err) => {
    next(err)
  })
})

router.delete('/:id', verify, (req, res, next) => {
  return knex('favorites')
    .where('favorites.id', req.params.id)
    .del()
    .returning('*')
    .then((result) => {
      res.status(200).send(result[0])
    })
    .catch((err) => {
      next(err)
    })
})


module.exports = router
