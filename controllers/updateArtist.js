const Artist = require("../models/artistSchema");

const updateArtist = async (req, res) => {
  try {
    const artistId = req.params.id;

    const { name, genre } = req.body;

    let updatedFields = {};
    if (name) {
      updatedFields.name = name;
    }
    if (genre) {
      updatedFields.genre = genre;
    }


    const artist = await Artist.findById(artistId);

    if (!artist) {
      return res.status(404).json({ error: 'Artist not found' });
    }

    const updatedArtist = await Artist.findByIdAndUpdate(artistId, updatedFields, { new: true });

    res.json({ artist: updatedArtist });
  } catch (error) {
    console.error('Error updating artist profile:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = updateArtist;
