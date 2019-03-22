
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredient', table => {
    table.increments();
    table.string('ingredient_name')
        .unique()
        .notNullable()
    table.integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipe')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

  })
};

exports.down = function(knex, Promise) {

};
