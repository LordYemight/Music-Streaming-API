const Album = require("../models/albumSchema");
const albumVal = require("../validators/albumVal");
require('dotenv/config');
const nodemailer = require("nodemailer");
const Artist = require("../models/artistSchema");

const album = async (req, res) => {
  try {
    const { title, genre, releaseYear, artistId, albumCoverURL } = req.body;
    const { error } = albumVal.validate({ title, genre, releaseYear, artistId, albumCoverURL});
    if (error) {
      return res.status(400).json({ error: error.details[0].message  });
    }
    const existingAlbum = await Album.findOne({ title });
    if (existingAlbum) {
      return res.status(409).json({ message: "Album already exists" });
    }
    
    const artist = await Artist.findById(artistId).populate('name');
    if (!artist) {
      return res.status(404).json({ message: "Artist not found" });
    }
    

    const newAlbum = new Album({
      title,
      genre,
      releaseYear,
      artist: artist,
      albumCoverURL: req.file.path,
    });
    await newAlbum.save();


     if (artist) {
      artist.albums.push({ albumId: album._id, title: title });
      await artist.save();
    }

    // const  existing =  artist.albums 
    // existing.reduce( async (x, albums)=> {
    //   if (albums === title) {
    //     res.json ({message: 'album name is already in use'})
    //     x.push({ albumId: album._id, title: title })
    //     await artist.save();
    //   } 

    // },{})
    const transporter = nodemailer.createTransport({
      service: "yahoo",
      auth: {
        user: "yemightzi@yahoo.com",
        pass: process.env.password,
      },
    });

    const mailOptions = {
      from: "yemightzi@yahoo.com",
      to: "lordyemight@gmail.com",
      subject: "New Album Notification",
      text: `Congratulations! Your new album "${title}" has been added.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });

    res.status(201).json({ message: "Album successfully added", album: newAlbum });
  } catch (error) {
    console.error("Error adding album", error);
    res.status(500).json({ error: "Internal server error" });
  }
};



const updateAlbum = async (req, res) => {
  try {
    const albumId = req.params.id;
    const { title, genre, releaseYear, artistId, albumCoverURL } = req.body;
    if (!title && !genre && !releaseYear && !artistId && !albumCoverURL ) {
      return res.status(400).json({ message: 'Provide at least one field to update.' });
    }
    const album = await Album.findById(albumId);
    if (!album) {
      return res.status(404).json({ error: "Album not found" });
    }
    const artist = await Artist.findById(artistId).populate('name');
    if (!artist) {
      return res.status(404).json({ message: "Artist not found" });
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
      album.artist = artist;
    }
    if (req.file && req.file.path) {
      album.albumCoverURL = req.file.path;
    }

    if (artist) {
      artist.albums.push({ albumId: album._id, title: title });
      await artist.save();
    }

    await album.save();

    res.json({ message: "Album successfully updated", album });
  } catch (error) {
    console.error("Error updating album:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


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


const getAllAlbum = async (req, res) => {
  try {
    const albums = await Album.find({})
    res.status(201).json({ albums })
  } catch (error) {
    console.log('error fectching all albums', error)
    res.status(500).json({ message: 'internal server error'})
  }
}

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

module.exports = {
  album, updateAlbum, getAlbum, getAllAlbum, deleteAlbum
}
