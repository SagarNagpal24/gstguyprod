const mongoose = require("mongoose");



const GSTformNewSchema = new mongoose.Schema({
  Constitution: {
    type: String,
    required: false,
  },
  Cin: {
    type: String,
    required: false,
  },
  ProposedName: {
    type: String,
    required: false,
  },
  NumberofDirectors: {
    type: String,
    required: false,
  },
  BusinessAddress: {
    type: String,
    required: false,
  },
  PhoneNumber: {
    type: String,
    required: false,
  },
  EmailID: {
    type: String,
    required: false,
  }

  

  
  


});

const myDB = mongoose.connection.useDb('Gstformdata');


const Gstform_data = myDB.model("Gstform_data", GSTformNewSchema);
module.exports = Gstform_data;