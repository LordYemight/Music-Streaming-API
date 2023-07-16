const Joi = require('joi')

const artistVal = Joi.object({
  name: Joi.string().required(),
  genre: Joi.string().required(),
  imageURL: Joi.string().uri(),
});


module.exports = artistVal;