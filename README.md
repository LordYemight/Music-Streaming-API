# Music-Streaming-API

```json
create an Artist (localhost:6500/api/artists) - `POST`
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



create an Album (localhost:6500/api/albums) - `POST`
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
  "artistId": 64b42c3e89cbed7533518f4f
}




Get all albums - `GET` (localhost:6500/api/albums)

Get a particular album - `GET` (localhost:6500/api/albums/:id)

Delete an album - `Delete (localhost:6500/api/albums/:id)

