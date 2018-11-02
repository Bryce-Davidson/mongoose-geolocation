const express = require('express');
const router = express.Router();

// MODELS
const Location = require('../models/Location')

// ROUTER - '/points/'

router.get('/', (req, res, next) => {
  Location.find({}).then(data => res.send(data))
    .catch(err => console.log(err))
});

router.post('/findnear', (req, res, next) => {
  var { coordinates, maxDistance } = req.body;

  Location.find({})
    .where('location')
    .near({ center: { coordinates: coordinates, type: 'Point' }, maxDistance: maxDistance, spherical: true })
    .then(data => res.send(data))
    .catch(err => console.log(err))
});

router.post('/newlocation', (req, res, next) => {
  const {coordinates, name } = req.body
  Location.create({
    "name": name,
    "location": {
      "type": "Point",
      "coordinates": coordinates
    }
  })
  .then(location => res.send(location))
  .catch(err => console.log(err))
});

module.exports = router;
