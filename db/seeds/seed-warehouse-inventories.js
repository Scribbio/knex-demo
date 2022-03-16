const warehouseData = require("../seed_data/warehouses");
const inventoriesData = require("../seed_data/inventories");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("warehouses").del();
  await knex("warehouses").insert(warehouseData);
  await knex("inventories").del();
  await knex("inventories").insert(inventoriesData);
};
