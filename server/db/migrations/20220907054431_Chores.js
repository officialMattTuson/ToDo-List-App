exports.up = function(knex) {
  return knex.schema.createTable('Chores', (table) => {
    table.increments('id')
    table.string('name')
    table.string('instruction')
    table.boolean('completed')
  })
};


exports.down = function(knex) {
  return knex.schema.dropTable('Chores')
};
