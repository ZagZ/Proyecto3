const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const plm = requiere('passport-local-mongoose');

//const Interese = require ('../models/intereses')

const userSchema = new Schema ({
  name: String,
  email:{
    String,
    unique:true
  },
  photoProfile: String,
  photoWall: String,
  friends: [],
  
})
