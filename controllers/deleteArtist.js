const Artist = require("../models/artistSchema");


const deleteArtist = async (req, res) => {
  
  try {
    const artistId = req.params.id
    const artist = await Artist.findById(artistId);
    await Artist.findByIdAndDelete(artistId);
    if (!artist) {
      return res.status(404).json({ error: 'Artist not found' });
    }

    res.json({ message: 'Artist deleted successfully' });

  } catch (error) {
    console.log('error deleting artist', error);
    res.status(500).json({ error: 'Internal server error' })
  }
};

module.exports = deleteArtist;