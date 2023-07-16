const Album = require("../models/albumSchema");


const deleteAlbum = async (req, res) => {
  try {
    const deleteId = req.params.id;
    const deleteAlbum = await Album.findByIdAndDelete(deleteId);
    if (!deleteAlbum) {
      res.status(404).json({ error: 'Invalid Album ID' })
    }
    res.status(200).json({ message: 'Album deleted successfully' })
  } catch (error) {
    console.error('Error deleting album:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = deleteAlbum;