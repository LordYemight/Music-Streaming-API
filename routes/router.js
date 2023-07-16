const express = require('express');
const upload = require('../utils/fileUpload');
const artist = require('../controllers/artist');
const getAllUser = require('../controllers/getAllArtist');
const getUser = require('../controllers/getArtist');
const updateArtist = require('../controllers/updateArtist');
const deleteArtist = require('../controllers/deleteArtist');
const album = require('../controllers/album');
const uploadTwo = require('../utils/fileUpload2');
const getAllAlbum = require('../controllers/getAllAlbum');
const getAlbum = require('../controllers/getAlbum');
const deleteAlbum = require('../controllers/deleteAlbum');
const updateAlbum = require('../controllers/updateAlbum');
const router = express.Router();







router.post ('/api/artists', upload.single('imageURL'), artist);
router.get ('/api/artists', getAllUser);
router.get ('/api/artists/:id', getUser);
router.put ('/api/artists/:id', updateArtist);
router.delete ('/api/artists/:id', deleteArtist);
router.post ('/api/albums', uploadTwo.single('albumCoverURL'), album);
router.get ('/api/albums', getAllAlbum);
router.get ('/api/albums/:id', getAlbum);
router.delete ('/api/albums/:id', deleteAlbum);
router.put ('/api/albums/:id', updateAlbum);


module.exports = router;
