const Users = '../models/usersModel';

const authController = {};

authController.validateuser = (req, res, next) => {
  console.log('-----> Attempting to Validate User!');
  const { username, password } = req.query;

  Users.find({ username, password })
    .then((response) => {
      console.log('-----> User Validated');
      res.locals.storage = response;
      return next();
    })
    .catch((error) => {
      return next({
        log: 'Express error handler caught! authController.validateuser middleware error',
        message: error,
      });
    });
};

module.exports = authController;
