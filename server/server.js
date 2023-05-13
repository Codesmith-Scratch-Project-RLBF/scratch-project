const path = require('path');
const express = require('express');

const usersController = require('./controllers/usersController');
const authController = require('./controllers/authController');

const app = express();
const PORT = 3000;

// body parser
app.use(express.json());

// get user who signed in
app.get('/auth/', (req, res) => {
  return res.status(200).json(res.locals.storage);
});
// get other user
app.get('/users/:username', usersController.find, (req, res) => {
    if (res.locals.storage){
        return res.status(200).json(res.locals.storage);
    }
    else {
        return res.status(204).send('No users found')
    }
    
    
});
//create user
app.post('/auth/', (req, res) => {
  return res.status(200).json(res.locals.storage);
});
//update users free time
app.patch('/users/:username', (req, res) => {
  return res.status(200).json(res.locals.storage);
});
//delete user
app.delete('/users/:username', (req, res) => {
  return res.status(200).json(res.locals.storage);
});

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);

  return res.status(errorObj.status).json(errorObj.message);
});

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
