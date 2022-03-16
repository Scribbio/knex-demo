exports.up = function (knex) {
  knex.schema.alterTable("warehouses", function (table) {
    table.dropColumn("manager");
    table.string("manager_first_name", 30);
    table.string("manager_last_name", 30);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
