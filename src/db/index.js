const knex = require('knex');
const config = require('../shared/config');

/**
 * @type {knex.Knex}
 */
const db = knex({
  client: 'postgresql',
    connection: {
      host: config.db.host,
      port: config.db.port,
      database: config.db.name,
      user:     config.db.user,
      password: config.db.password
    },
    pool: {
      min: 2,
      max: 10
    }
});

module.exports = db;