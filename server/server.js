const path = require('path')
const express = require('express')

const app = express();
const PORT = 3000;

// body parser 
app.use(express.json());

// get user who signed in ONLY USING USER NAME FOR QUERY
app.get('/auth/', (req,res) => {
    return res.status(200).json(res.locals./*SOMETHING*/);
})


// get other user
app.get('/users/:username', (req,res) => {
    return res.status(200).json(res.locals./*SOMETHING*/)

})
app.post('/auth/', (req,res) => {
    return res.status(200).json(res.locals./*SOMETHING*/)

})
app.patch('/users/:username', (req,res) => {
    return res.status(200).json(res.locals./*SOMETHING*/)

})
app.delete('/users/:username', (req,res) => {
    return res.status(200).json(res.locals./*SOMETHING*/)

})





//global error handler
app.use((err,req,res,next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 400,
        message: {err: 'An error occurred'}
    }
    const errorObj = Object.assign(defaultErr,err)
    console.log(errorObj.log)

    return res.status(errorObj.status).json(errorObj.message)
})

// start server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})

module.exports = app;