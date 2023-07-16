const Album = require("../models/albumSchema");
const albumVal = require("../validators/albumVal");

const updateAlbum = async (req, res) => {
  try {
    const albumId = req.params.id;
    const { title, genre, releaseYear, artistId } = req.body;
    const { error } = albumVal.validate({ title, genre, releaseYear, artistId });
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    const album = await Album.findById(albumId);
    if (!album) {
      return res.status(404).json({ error: "Album not found" });
    }

    if (title) {
      album.title = title;
    }
    if (genre) {
      album.genre = genre;
    }
    if (releaseYear) {
      album.releaseYear = releaseYear;
    }
    if (artistId) {
      album.artistId = artistId;
    }

    await album.save();

    res.json({ message: "Album successfully updated", album });
  } catch (error) {
    console.error("Error updating album:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = updateAlbum;
