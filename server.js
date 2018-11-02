const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

var PORT = process.env.PORT || 4000;

// MONGO DATABASE
require('./database.js');

// MIDDLE WEAR
app.use(morgan('dev'));
app.use(bodyParser.json());

// ROUTERS
app.use('/points', require('./routes/locations'))
app.use('/zones', require('./routes/LostZones'))

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
