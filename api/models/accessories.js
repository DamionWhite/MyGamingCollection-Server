const mongoose = require('mongoose');

const accessorySchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String
});

module.exports = mongoose.model('Accessory', accessorySchema);