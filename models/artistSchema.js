const mongoose = require("mongoose");
const moment = require('moment-timezone')


const artistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  genre: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  albums: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album',
      },
      title: {
        type: String
      }
    }
  ],
  createdAt: {
    type: Date,
    default: moment().tz('Your_Timezone').add(1, 'hours').toDate(),
  }
});  

const Artist = mongoose.model('Artist', artistSchema);
module.exports = Artist;