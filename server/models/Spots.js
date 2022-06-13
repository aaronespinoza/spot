const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
//Import schema form Reviews.js
//const Reviews = require('./Reviews');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js

const spotsSchema = new Schema({
  explorers: 
    {
      type: Array,
      default: [],
    },
  
  description: {
    type: String,
    maxlength: 280,
  },
  // coordinates id from GoogleMaps Api
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },

  title: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },

  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Reviews',
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Spots = model('Spots', spotsSchema);

module.exports = Spots;