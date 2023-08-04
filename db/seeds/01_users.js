const bcrypt = require('bcryptjs');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('users').del()
  await knex('users').insert([
    {
      // id: 1,
      first_name: 'Sardor',
      last_name: 'Yuldashev',
      username: 'sardorbek',
      password: bcrypt.hashSync('12345678', 10),
      is_deleted: false
    },
    {
      // id: 2,
      first_name: 'Imron',
      last_name: 'Abdusalimov',
      username: 'imron',
      password: bcrypt.hashSync('123456', 10),
      is_deleted: false
    },
    {
      // id: 3,
      first_name: 'Aziz',
      last_name: 'Nabiyev',
      username: 'aziz',
      password: bcrypt.hashSync('123456', 10),
      is_deleted: false
    },
    {
      // id: 4,
      first_name: 'Sherzod',
      last_name: 'Arziyev',
      username: 'sherzod',
      password: bcrypt.hashSync('123456', 10),
      is_deleted: false
    },
    {
      // id: 5,
      first_name: 'Nigina',
      last_name: 'Mannonova',
      username: 'nigina',
      password: bcrypt.hashSync('123456', 10),
      is_deleted: false
    },
    {
      // id: 6,
      first_name: 'Shoxida',
      last_name: 'Mannonova',
      username: 'shoxida',
      password: bcrypt.hashSync('123456', 10),
      is_deleted: false
    },
    {
      // id: 7,
      first_name: 'Oybek',
      last_name: 'Xasanov',
      username: 'oybek',
      password: bcrypt.hashSync('123456', 10),
      is_deleted: false
    },
    {
      // id: 8,
      first_name: 'Toxir',
      last_name: 'Sodiqov',
      username: 'toxir',
      password: bcrypt.hashSync('123456', 10),
      is_deleted: false
    },
    {
      // id: 9,
      first_name: 'Jahongir',
      last_name: 'Otajonov',
      username: 'jahongir',
      password: bcrypt.hashSync('123456', 10),
      is_deleted: false
    },
    {
      // id: 10,
      first_name: 'Munisa',
      last_name: 'Rizayeva',
      username: 'munisa',
      password: bcrypt.hashSync('123456', 10),
      is_deleted: false
    }
  ]);
};
