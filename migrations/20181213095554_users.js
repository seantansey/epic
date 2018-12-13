'use strict'
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.string('email').notNullable().defaultTo('')
    table.string('password').notNullable().defaultTo('')
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())
  } )
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
