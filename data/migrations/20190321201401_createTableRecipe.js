
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe', table => {
        table.increments()
        table.string('recipe_name')
            .unique()
            .notNullable()
        table.integer('dish_id')
            .unique()
            .unsigned()
            .references('id')
            .inTable('dish')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        table.integer('ingredient_id')
            .unsigned()
            .references('id')
            .inTable('ingredient')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipe')
};
