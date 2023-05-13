const Users = require('../models/usersModel');

const authController = {};

authController.validateuser = (req, res, next) => {
  console.log('-----> Attempting to Validate User!');
  const { username, password } = req.query;

  Users.findOne({ username, password })
    .then((response) => {
      if (response) {
        console.log('-----> User Validated');
        res.locals.storage = response;
      }

      return next();
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
  const { username, password } = req.body;

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

module.exports = authController;
