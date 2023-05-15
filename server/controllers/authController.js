const Users = require('../models/usersModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const authController = {};

authController.validateuser = (req, res, next) => {
  console.log('-----> Attempting to Validate User!');
  const { username, password } = req.query;

  Users.findOne({ username })
    .then((response) => {
      if (response) {
        console.log('-----> Comparing Password to Hash!');
        const hash = response.password;
        bcrypt.compare(password, hash).then((result) => {
          if (result) {
            console.log('-----> User Validated!');
            res.locals.storage = response;
          } else {
            console.log('-----> Wrong password!');
          }
          return next();
        });
      }
    })
    .catch((error) => {
      return next({
        log: 'Express error handler caught! authController.validateuser middleware error',
        status: 400,
        message: error,
      });
    });
};

authController.createuser = (req, res, next) => {
  console.log('-----> Attempting to Create User!');
  const monday = new Array(48).fill(false);
  const tuesday = new Array(48).fill(false);
  const wednesday = new Array(48).fill(false);
  const thursday = new Array(48).fill(false);
  const friday = new Array(48).fill(false);
  const saturday = new Array(48).fill(false);
  const sunday = new Array(48).fill(false);
  const { username } = req.body;
  const password = res.locals.hash;

  Users.create({
    username,
    password,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday,
  })
    .then((response) => {
      console.log('-----> User Created!');
      res.locals.storage = response;
      return next();
    })
    .catch((error) => {
      return next({
        log: 'Express error handler caught! authController.createuser middleware error',
        message: error,
        status: 400,
      });
    });
};

authController.hashpassword = (req, res, next) => {
  console.log('Hashing password!');
  const { password } = req.body;
  bcrypt
    .hash(password, saltRounds)
    .then((hash) => {
      console.log(hash);
      res.locals.hash = hash;
      return next();
    })
    .catch((error) => {
      return next({
        log: 'Express error handler caught! authController.hashpassword middleware error',
        message: error,
        status: 400,
      });
    });
};

module.exports = authController;
