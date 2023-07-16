const Artist = require("../models/artistSchema")


const getArtist = async (req, res) => {
  try {
    const artistId = req.params.id
    const artist = await Artist.findById(artistId)
    if (!artist) {
      res.status(404).json({ error: "Invalid artist ID"})
    }
    res.json({ artist })
  } catch (error) {
    console.log('error fetching artist', error)
    res.status(500).json({ error: 'Internal server error' })
  }
};


module.exports = getArtist;