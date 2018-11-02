const mongoose                         = require('mongoose');
const { MONGOURI, MONGO_DATABASE  }    = require('./config/keys.js')

const mongoOptions = {
  useNewUrlParser: true,
  autoIndex: false,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  poolSize: 10,
  bufferMaxEntries: 0
};

mongoose.connect(MONGOURI, mongoOptions);
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log(`Connected to DataBase: ${MONGO_DATABASE.NAME}\nWith user: ${MONGO_DATABASE.USER}`);
});
