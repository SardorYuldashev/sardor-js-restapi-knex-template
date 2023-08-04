const db = require('../../db');
const { NotFoundError } = require('../../shared/errors');

const removeUser = async ({ id }) => {
  const existing = await db('users').where({ id }).first();

  if (!existing) {
    throw new NotFoundError('User topilmadi');
  };

  const deleted = await db('users')
    .where({ id })
    .update({ is_deleted: true })
    .returning(['id', 'first_name', 'last_name', 'username']);

  return {
    deleted: deleted[0]
  };
};

module.exports = removeUser;