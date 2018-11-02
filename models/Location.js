var mongoose        = require("mongoose");
var { Schema }      = mongoose;
var { pointSchema } = require('./schema_types/GeoSchemas_SchemaType')


const LocationSchema = new mongoose.Schema({
  name: String,
  location: {
    type: pointSchema,
    required: true
  }
});

LocationSchema.options.autoIndex = true;

LocationSchema.index({ location: "2dsphere" });

var Location = mongoose.model("Location", LocationSchema);

module.exports = Location;
