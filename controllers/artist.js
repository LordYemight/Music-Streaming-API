const Artist = require("../models/artistSchema");
const artistVal = require("../validators/artistVal");

const artist = async (req, res) => {
  
  try {
    const { name, genre, imageURL }  = req.body;
    const { error } = artistVal.validate({ name, genre, imageURL } );
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    const existingUSer = await Artist.findOne ({ name })
    if (existingUSer) {
      return res.status(409).json({ message: "Artist already exists" })
    }
   
      console.log(req.file)
      const newArtist = new Artist({
        name,
        genre,
        imageURL: req.file.path,
      })
      await newArtist.save();
      res.status(201).json({ message: 'Artist successfully added', newArtist });


  } catch (error) {
    console.error ('error adding artist', error);
    res.status(500).json({ error: 'Internal server error' })
  }
}


const getAllArtist = async (req, res) => {
  try {
    const artists = await Artist.find({})
    res.json({ artists })
  } catch (error) {
    console.error('Error fetching all artists:', error);
    res.status(500).json({ error: 'Internal server error' });
  }

};


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



const updateArtist = async (req, res) => {
  try {
    const artistId = req.params.id;

    const { name, genre, imageURL } = req.body;
    if (!name && !genre && !imageURL ) {
      return res.status(400).json({ message: 'provide name, genre or imageURL'})
    }

    const artist = await Artist.findById(artistId);

    if (!artist) {
      return res.status(404).json({ error: 'Artist not found' });
    }

    
    if (name) {
      artist.name = name;
    }
    if (genre) {
      artist.genre = genre;
    }
    if (req.file && req.file.path) {
      artist.imageURL = req.file.path;
    }

    await artist.save();


    res.json({ message: "Artist profile successfully updated", artist });
  } catch (error) {
    console.error('Error updating artist profile:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


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

module.exports = {
  artist, getAllArtist, getArtist, updateArtist, deleteArtist
};