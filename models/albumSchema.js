const mongoose = require("mongoose");
const moment = require('moment-timezone');
const Artist = require('../models/artistSchema');

const albumSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  releaseYear: {
    type: Number,
    required: true,
    min: 1900,
    max: new Date().getFullYear(),
  },
  genre: {
    type: String,
    required: true,
  },
  artist: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Artist'
    },
    name: {
      type: String
    },
  },
  albumCoverURL: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: moment().tz('Your_Timezone').add(1, 'hours').toDate(),
  }
})



const Album = mongoose.model('Album', albumSchema);

module.exports = Album;

