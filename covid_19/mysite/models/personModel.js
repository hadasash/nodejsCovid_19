const mongoose = require ('mongoose')
const Schema = mongoose.Schema;
const PersonsSchema = new Schema({
    id:  Number,
    address: { city: String, street:String , number:Number},
    birthday: String,
    phone: Number,
    cellphone: Number,
    vaccine1: String,
    vaccine2: String,
    vaccine3: String,
    vaccine4: String,
    company: String,
    covid19: {start: String, finish: String},
    FirstName: String, 
    LastName: String
  });

 module.exports= mongoose.model('persons',PersonsSchema)