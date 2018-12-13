'use strict'
exports.up = function(knex) {
  return knex.schema.createTable('favorites', (table) => {
    table.increments()
    table.integer('user_id').notNullable()
    table.integer('trail_id').notNullable()
    table.foreign('user_id').references('users.id').onDelete('CASCADE')
    table.foreign('trail_id').references('trail_id').onDelete('CASCADE')
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('favorites')
}
