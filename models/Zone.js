const mongoose = require('mongoose');

const ZoneSchema = new mongoose.Schema({
  name: {type: String, default: ''},
  zipCodes: {type: Array, default: []},
  timestamp: {type: Date, default: Date.now},
  numComments: {type: Number, default: 0}
});

module.exports = mongoose.model('Zone', ZoneSchema);