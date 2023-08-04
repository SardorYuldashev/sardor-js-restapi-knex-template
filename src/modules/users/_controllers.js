const express = require('express');
const httpValidator = require('../../shared/http-validator');
const {
  showUserSchema,
  getUsersSchema,
  loginUserSchema,
  postUserSchema,
  patchtUserSchema,
  deleteUserSchema } = require('./_schemas');
const listUsers = require('./list-users');
const showUser = require('./show-user');
const login = require('./login-user');
const registration = require('./post-user');
const editUser = require('./edit-user');
const removeUser = require('./delete-user');

/**
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 */
const loginUser = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, loginUserSchema);

    const result = await login(req.body);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  };
};

/**
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 */
const postUser = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postUserSchema);

    const result = await registration(req.body);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  };
};

/**
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 */
const patchUser = async (req, res, next) => {
  try {
    httpValidator({ body: req.body, params: req.params }, patchtUserSchema);

    const result = await editUser(req.body, req.params);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  };
};

/**
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 */
const getUsers = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, getUsersSchema);

    const result = await listUsers(req.query);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  };
};

/**
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 */
const getUser = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showUserSchema);

    const result = await showUser({ id: req.params.id });

    res.status(200).json(result);
  } catch (error) {
    next(error);
  };
};

/**
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 */
const deleteUser = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteUserSchema);

    const result = await removeUser({ id: req.params.id });

    res.status(200).json(result);
  } catch (error) {
    next(error);
  };
};

module.exports = {
  loginUser,
  postUser,
  patchUser,
  getUsers,
  getUser,
  deleteUser
};