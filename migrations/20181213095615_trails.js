
exports.up = function(knex) {
  return knex.schema.createTable('trails', table => {
    table.increments()
    table.string('name').notNullable()
    table.string('difficulty').notNullable()
    table.string('summary').notNullable()
    table.float('stars')
    table.string('url')
    table.string('location').notNullable()
    table.integer('mtbproject_id')
    table.string('img_medium')
    table.float('length')
    table.integer('ascent')
    table.integer('descent')
<<<<<<< HEAD
    table.integer('high_point')
    table.integer('low_point')
    table.integer('longitude')
    table.integer('latitude')
=======
    table.integer('high')
    table.integer('low')
    table.float('longitude')
    table.float('latitude')
>>>>>>> 75d57549ff9e6c350f70c3010b1a4b63da95ec17
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('trails')
}
