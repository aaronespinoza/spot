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

  tag: [
    {
      privateProperty: {
        type: Boolean,
        default: false,
      },
      snow: {
        type: Boolean,
        default: false,
      },
      offTrail: {
        type: Boolean,
        default: false,
      },
      urban: {
        type: Boolean,
        default: false,
      },
      rural: {
        type: Boolean,
        default: false,
      },
      highClearence: {
        type: Boolean,
        default: false,
      },
      scramble: {
        type: Boolean,
        default: false,
      },
      restaurant: {
        type: Boolean,
        default: false,
      },
      bar: {
        type: Boolean,
        default: false,
      },
      hotSpring: {
        type: Boolean,
        default: false,
      },
      cliffJumping: {
        type: Boolean,
        default: false,
      },
      scenicOverlook: {
        type: Boolean,
        default: false,
      },
      wildLife: {
        type: Boolean,
        default: false,
      },
      venue: {
        type: Boolean,
        default: false,
      },
      rave: {
        type: Boolean,
        default: false,
      },
      muddy: {
        type: Boolean,
        default: false,
      },
      waterCrossing: {
        type: Boolean,
        default: false,
      },
    },
  ],

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