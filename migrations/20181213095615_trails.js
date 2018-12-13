
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
    table.integer('high')
    table.integer('low')
    table.float('longitude')
    table.float('latitude')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('trails')
}
