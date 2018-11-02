var mongoose          = require("mongoose");
var { Schema }        = mongoose;
var { polygonSchema } = require('./schema_types/GeoSchemas_SchemaType')


const LostZoneSchema = new mongoose.Schema({
  name: String,
  location: {
    type: polygonSchema,
    required: true
  }
});

LostZoneSchema.options.autoIndex = true;

// LocationSchema.index({ location: "2dsphere" });

var LostZone = mongoose.model("LostZone", LostZoneSchema);

module.exports = LostZone;
