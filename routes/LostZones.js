const express = require('express');
const router = express.Router();

// MODELS
const Location = require('../models/Location')
const LostZone = require('../models/LostZone')


// ROUTER - '/zones/'

router.get('/', (req, res, next) => {
  LostZone.find({})
    .then(data => {
      res.status(200).send(data)
    })
});

router.post('/findpointsinzone', async (req, res, next) => {
  var { name } = req.body;
  await LostZone.findOne({name})
    .then(zone => {
      var shapedZone = {
        type        : zone.location.type,
        coordinates : zone.location.coordinates
      }
      Location.find({}).where('location').within(shapedZone)
      .then(docs => res.send(docs))
      .catch(err => console.log(err))
    }).catch(err => console.log(err))
});

router.post('/newzone', (req, res, next) => {
  const {name, coordinates } = req.body;
  console.log(coordinates);
  LostZone.create({
    "name": name,
    "location": {
      "type": "Polygon",
      "coordinates": coordinates
  }})
    .then(zone => {
      res.send(zone)
    })
    .catch(err => console.log(err))
});

module.exports = router;
