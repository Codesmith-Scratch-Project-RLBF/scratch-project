const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://jvtran48:codesmith@codesmith.ubdnkip.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'scratchproject',
  })
  .then(() => console.log('Connected to Mongo DB.!!!'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  monday: Array,
  tuesday: Array,
  wednesday: Array,
  thursday: Array,
  friday: Array,
  saturday: Array,
  sunday: Array,
});

const Users = mongoose.model('users', usersSchema);

module.exports = Users;
