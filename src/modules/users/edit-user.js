const db = require('../../db');
const bcrypt = require('bcryptjs');
const { NotFoundError } = require('../../shared/errors');

const editUser = async (body, params) => {
  const { id } = params;

  const existing = await db('users').where({ id }).first();

  if (!existing) {
    throw new NotFoundError("User topilmadi");
  };

  const { ...values } = body;

  if (values.password) {
    values.password = await bcrypt.hash(values.password, 10);
  };

  values.updated_at = db.fn.now();

  const updated = await db('users')
    .where({ id })
    .update({ ...values })
    .returning(['id', 'first_name', 'last_name', 'username', 'updated_at', 'created_at']);

  return { updated: updated[0] };
};

module.exports = editUser;