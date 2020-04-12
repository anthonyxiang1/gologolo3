var mongoose = require('mongoose');

var LogoSchema = new mongoose.Schema({
  id: String,
  text: String,
  color: String,
  fontSize: { type: Number, min: 2, max: 100 },
  bgColor: String,
  borderColor: String,
  borderRadius: {type: Number, min:0, max:100},
  borderThickness: {type: Number, min:0, max: 200},
  padding: {type: Number, min:0, max:100},
  margin: {type: Number, min:0, max:100},
  lastUpdate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Logo', LogoSchema);