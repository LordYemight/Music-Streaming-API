const express = require('express');
const upload = require('../utils/fileUpload');
const {artist, getAllArtist, getArtist, updateArtist, deleteArtist} = require('../controllers/artist');
const {album, getAlbum, getAllAlbum, deleteAlbum, updateAlbum} = require('../controllers/album');
const uploadTwo = require('../utils/fileUpload2');
const router = express.Router();



router.post ('/api/artists', upload.single('imageURL'), artist);
router.get ('/api/artists', getAllArtist);
router.get ('/api/artists/:id', getArtist);
router.put ('/api/artists/:id', upload.single('imageURL'), updateArtist);
router.delete ('/api/artists/:id', deleteArtist);
router.post ('/api/albums', uploadTwo.single('albumCoverURL'), album);
router.get ('/api/albums', getAllAlbum);
router.get ('/api/albums/:id', getAlbum);
router.delete ('/api/albums/:id', deleteAlbum);
router.put ('/api/albums/:id', uploadTwo.single('albumCoverURL'), updateAlbum);


module.exports = router;
