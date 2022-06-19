const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reviewsSchema = new Schema({

  spot: {
    type: Schema.Types.ObjectId,
    ref: 'Spots'
  },

  description: {
    type: String,
    maxlength: 280,
  },

  rating: {
    type: Number,
    required: true,
    default:1,
  },

  tag: {
    type: String,
    required: true,
    maxlength: 25,
  },

  image: {
    type: String,
  },
  
  difficulty: {
    type: Number,
    required: true,
    default:1,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

const Reviews = model('Reviews', reviewsSchema);

module.exports = Reviews;