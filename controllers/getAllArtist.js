const Artist = require("../models/artistSchema")


const getAllArtist = async (req, res) => {
  try {
    const artists = await Artist.find({})
    res.json({ artists })
  } catch (error) {
    console.error('Error fetching all artists:', error);
    res.status(500).json({ error: 'Internal server error' });
  }

};

module.exports = getAllArtist;