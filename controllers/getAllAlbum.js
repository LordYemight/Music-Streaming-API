const Album = require("../models/albumSchema")

const getAllAlbum = async (req, res) => {
  try {
    const albums = await Album.find({})
    res.status(201).json({ albums })
  } catch (error) {
    console.log('error fectching all albums', error)
    res.status(500).json({ message: 'internal server error'})
  }
}

module.exports = getAllAlbum;