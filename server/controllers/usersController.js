const Users = require('../models/usersModel');

const usersController = {};

usersController.find = (req, res, next) => {
  const { username } = req.params;

  Users.findOne({ username })
    .then((user) => {
      res.locals.storage = user;
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Express error handler caught usersController.find middleware error',
        status: 400,
        message: { err: 'Failed to get user' },
      });
    });
};

usersController.updateuser = (req, res, next) => {
  const { username } = req.params;
  const {
    /* NEEDS UPDATES */
  } = req.body;

  //note anyone can update anyone if they know the end points
  Users.findOneAndUpdate({ username }, { username: newName }, { new: true })
    .then((user) => {
      if (!user) {
        return next({
          log: 'Express error handler caught usersController.update middleware error',
          status: 400,
          message: { err: 'Failed to update user' },
        });
      }

      res.locals.storage = user;
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Express error handler caught usersController.update middleware error',
        status: 400,
        message: { err: 'Failed to update user' },
      });
    });
};

usersController.deleteuser = (req, res, next) => {};

module.exports = usersController;
