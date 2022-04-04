const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const spotsSchema = new Schema({
  explorers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
  ],
  description: {
    type: String,
    
  },
  // coordinates id from GoogleMaps Api
  coordinates: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Spots = model('Spots', spotsSchema);

module.exports = Spots;