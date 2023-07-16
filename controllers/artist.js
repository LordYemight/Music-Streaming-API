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
      res.status(201).json({ message: 'Artist successfully added' });


  } catch (error) {
    console.error ('error adding artist', error);
    res.status(500).json({ error: 'Internal server error' })
  }
}

module.exports = artist;