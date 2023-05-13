const Users = '../models/usersModel';

const usersController = {};

usersController.find = (req, res, next) => {
  const { username } = req.params;

  Users.findOne({ username })
    .then((user) => {
      if (!user) {
        return next({
          log: 'Express error handler caught usersController.findOne middleware error',
          status: 400,
          message: { err: 'Failed to get user' },
        });
      }

      res.locals.storage = user;
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Express error handler caught usersController.findOne middleware error',
        status: 400,
        message: { err: 'Failed to get user' },
      });
    });
};

usersController.updateuser = (req, res, next) => {};

usersController.deleteuser = (req, res, next) => {};

module.exports = usersController;
