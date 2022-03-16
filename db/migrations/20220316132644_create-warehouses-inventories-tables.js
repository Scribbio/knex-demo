exports.up = function (knex) {
  return knex.schema
    .createTable("warehouses", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("position", 30).notNullable().defaultTo("Store Manager");
      table.string("manager").notNullable();
      table.string("address").notNullable();
      table.string("phone").notNullable();
      table.string("email").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").notNullable().defaultTo(knex.fn.now());
    })
    .createTable("inventories", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("description").notNullable();
      table
        .integer("warehouse_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("warehouses")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.integer("quantity").notNullable().defaultTo(0);
      table.string("status").notNullable();
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("inventories").dropTable("warehouses");
};
