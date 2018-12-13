var express = require('express')
var router = express.Router()
const knex = require('../knex')
// - Trails

router.get('/', (req, res, next)=>{
  return knex('trails')
  .then((trail)=>{
    res.send(trail)
  })
  .catch((err) => {
    next(err)
  })
})

router.get('/:id', (req, res, next)=>{
  return knex('trails')
  .where('id',req.params.id)
  .then((trail)=>{
    res.send(trail[0])
  })
  .catch((err) => {
    next(err)
  })
})

module.exports = router
