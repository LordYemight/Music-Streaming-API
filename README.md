# Music-Streaming-API

Getting Started
Fork this repo and run the git clone <forked repo> command from your terminal/bash
Cd into the directories and npm install
Create a .env file in the root directory and store the following:
MONGO_URI=Insert the correct connection URL for your MongoDB database


npm start/yarn start
You can obtain the MONGO_URI after create a collectoin on mongodb atlas. For the GOOGLE_CLIENT_ID and the TWITTER_CONSUMER_SECRET/ID, you will need to go through the Google developer console and the Twitter developer accounts page respectively

```json
Create an Artist (localhost:6500/api/artists) - `POST`

using form-data
name(key) wizkid(value)
genre(key) Afrobeat(value)
imageURL(key) 


Update Artist (localhost:6000/api/artists/:id) - `PUT`
```json
Sample ID for artist = "64b43bc1e3dcf34cd0c2c945"
{
  "name": "My first",
  "genre": "Hip-Hop"
}

Get all artists - `GET` (localhost:6500/api/artists)

Get a particular artist - `GET` (localhost:6500/api/artists/:id)

Delete an artist - `Delete (localhost:6500/api/artists/:id)



Create an Album (localhost:6500/api/albums) - `POST`

using form-data
title(key) more love, less ego(value)
genre(key) Afrobeat(value)
albumCoverURL(key)
releaseYear(key) 2023(value)
artistID(key) 64b42c3e89cbed7533518f4f(value)


Update Album (localhost:6000/api/albums/:id) - `PUT`
```json
Sample ID for album = "64b42c3e89cbed7533518f4f"
{
  "title": "work of art",
  "genre": "Afrobeat",
  "releaseYear": 2023,
  "artistId": "64b42c3e89cbed7533518f4f"
}




Get all albums - `GET` (localhost:6500/api/albums)

Get a particular album - `GET` (localhost:6500/api/albums/:id)

Delete an album - `Delete (localhost:6500/api/albums/:id)


Technologies Used
Some of the technologies used in the development of this web application are as follow:

MongoDB Atlas: It provides a free cloud service to store MongoDB collections.
Node.js: A runtime environment to help build fast server applications using JS.
Express.js: A popular Node.js framework to build scalable server-side for web applications.
Mongoose: An ODM(Object Data Modelling)library for MongoDB and Node.js
Nodemailer: A powerful library for sending emails from your Node.js applications. After an artist uploads an album, an email is sent to the artist which entails the ablbum tracks and cover.
Multer:  It is use for handling file uploads. 
Dotenv: This library is used for managing environment variables in your Node.js applications. It stores sensitive or configuration-related information (such as API keys, database URLs, or secret keys) in a separate `.env` file. This helps keep the application's configuration secure and separate from your codebase.
Joi: Joi is a validation library for JavaScript applications, particularly useful in the context of APIs and form validation. 


