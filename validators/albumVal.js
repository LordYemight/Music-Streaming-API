const Joi = require('joi');

const albumSchema = Joi.object({
  title: Joi.string().required(),
  releaseYear: Joi.number().integer().min(1900).max(new Date().getFullYear()).required(),
  genre: Joi.string().required(),
  artistId: Joi.string().required(),
  albumCoverURL: Joi.string().optional()
});

module.exports = albumSchema;

