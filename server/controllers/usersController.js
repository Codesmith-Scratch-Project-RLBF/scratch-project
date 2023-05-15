const Users = require('../models/usersModel');

const usersController = {};

usersController.find = (req, res, next) => {
  const { username } = req.params;

    if (username === '__all'){
      Users.find({ })
      .then((users) => {
        res.locals.storage = users;
        return next();
      })
      .catch((err) => {
        return next({
          log: 'Express error handler caught usersController.find middleware error',
          status: 400,
          message: { err: 'Failed to get user' },
        });
      });
  
    }
  
    else {
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

  const { updatedDay, day } = req.body;

  //note anyone can update anyone if they know the end points
  Users.findOneAndUpdate({ username }, { [day]: updatedDay }, { new: true })
    .then((user) => {
      res.locals.storage = user;
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Express error handler caught usersController.updateuser middleware error',
        status: 400,
        message: { err: 'Failed to update user' },
      });
    });
};

usersController.deleteuser = (req, res, next) => {
  const { username } = req.params;
  res.locals.storage = username;

  Users.deleteOne({ username })
    .then((user) => {
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Express error handler caught usersController.deleteuser middleware error',
        status: 400,
        message: { err: 'Failed to delete user' },
      });
    });
};

module.exports = usersController;
