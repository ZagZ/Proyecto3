const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const interestSchema = new Schema({
  from: String,
  work: String,
  favfood: String,
  favmovie: String,
  favsong: String,
  //epicphoto: String,
  //user owner
})

const Interest = mongoose.model('Interest', interestSchema)

module.exports = Interest;
