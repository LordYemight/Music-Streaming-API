const Album = require("../models/albumSchema");


const getAlbum = async (req, res) => {
  try {
    const AlbumId = req.params.id;
    const album = await Album.findById(AlbumId);
    if (!album) {
      res.status(404).json({error: "Invalid Album ID"})
    }
    res.status(201).json({ album })
  } catch (error) {
    console.log('error fectching album', error)
    res.status(500).json({ message: 'internal server error'})
  }
}

module.exports = getAlbum;