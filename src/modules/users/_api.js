const { isLoggedIn } = require('../../shared/auth');
const { getUsers, getUser, loginUser, postUser, patchUser, deleteUser } = require('./_controllers');

const router = require('express').Router();

const mGetUsers = [isLoggedIn];
const mGetUser = [isLoggedIn];
const mPatchUser = [isLoggedIn];
const mDeleteUser = [isLoggedIn];

router.post('/users/login', loginUser);
router.post('/users', postUser);
router.get('/users', mGetUsers, getUsers);
router.get('/users/:id', mGetUser, getUser);
router.patch('/users/:id', mPatchUser, patchUser);
router.delete('/users/:id', mDeleteUser, deleteUser);

module.exports = router;