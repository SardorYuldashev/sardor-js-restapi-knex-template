/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.string('first_name', 50).notNullable();
    table.string('last_name', 50).notNullable();
    table.string('username', 15).unique().notNullable();
    table.string('password', 350).notNullable();
    table.boolean('is_deleted').defaultTo(false);
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
