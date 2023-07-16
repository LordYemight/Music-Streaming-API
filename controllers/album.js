const Album = require("../models/albumSchema");
const albumVal = require("../validators/albumVal");
require('dotenv/config');
const password = process.env.password;
const nodemailer = require("nodemailer");

const album = async (req, res) => {
  
  try {
    const { title, genre, releaseYear, artistId  }  = req.body;
    const { error } = albumVal.validate({ title, genre, releaseYear, artistId } );
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    const existingAlbum = await Album.findOne ({ title })
    if (existingAlbum) {
      return res.status(409).json({ message: "Artist already exists" })
    }
   
      console.log(req.file)
      const newAlbum = new Album({
        title,
        genre,
        releaseYear,
        artistId,
        albumCoverURL: req.file.path,
      })
      await newAlbum.save();

      
       const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
        user: "lordyemight@gmail.com",
        pass: `${password}`,
        },
      });
  
      const mailOptions = {
        from: 'lordyemight@gmail.com',
        to: 'yemightzi@yahoo.com',
        subject: 'New Album Notification',
        text: `Congratulations! Your new album "${title}" has been added.`,
      };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });
  

    res.status(201).json({ message: 'Album successfully added' });


  } catch (error) {
    console.error ('error adding album', error);
    res.status(500).json({ error: 'Internal server error' })
  }
}

module.exports = album;

