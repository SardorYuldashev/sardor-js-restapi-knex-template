const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config');
const { UnauthorizedError } = require('../errors');

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 */
const isLoggedIn = (req, res, next) => {
  try {
    const { authorization: token } = req.headers;

    console.log(token);

    if (!token) {
      throw new UnauthorizedError('Login qilmagansiz');
    };

    const decoded = jwt.verify(token, config.jwt.secret);

    req.user = { id: decoded.id };

    next();
  } catch (error) {
    err = new UnauthorizedError('Login qilmagansiz');
    next(err);
  };
};

module.exports = isLoggedIn;