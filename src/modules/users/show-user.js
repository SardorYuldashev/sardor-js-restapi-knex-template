const db = require('../../db');
const { NotFoundError } = require('../../shared/errors');

const showUser = async ({ id }) => {
  const user = await db('users')
    .where({ id, is_deleted: false })
    .select(
      'id',
      'first_name',
      'last_name',
      'username',
      'updated_at',
      'created_at'
    )
    .first();

  if (!user) {
    throw new NotFoundError(`Foydalanuvchi topilmadi`);
  };

  return {
    data: user
  };
};

module.exports = showUser;