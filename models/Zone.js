const mongoose = require('mongoose');

const ZoneSchema = new mongoose.Schema({
  title: {type: String, default: ''},
  zipCodes: {type: Array, default: []},
  timestamp: {type: Date, default: Date.now},
  numComments: {type: Number, default: 0},
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

module.exports = mongoose.model('Zone', ZoneSchema);