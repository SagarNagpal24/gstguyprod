const express = require("express");

//const LoginModel = require("../Models/Login_Data");
const GSTformModel = require("../Models/GstForm-data");

const router = express.Router();

router.post("/Gstforminsert", async (req, res) => {
  const Constitution = req.body.constitution;
  const Cin = req.body.cin;
  const ProposedName = req.body.proposedname;
  const NumberofDirectors = req.body.numberofdirectors;
  const BusinessAddress = req.body.businessaddress;
  const PhoneNumber = req.body.phonenumber;
  const EmailID = req.body.emailid;


  


  const GstFormData = new GSTformModel({
    Constitution: Constitution,
    Cin: Cin,
    ProposedName:ProposedName,
    NumberofDirectors:NumberofDirectors,
    BusinessAddress:BusinessAddress,
    PhoneNumber:PhoneNumber,
    EmailID:EmailID,

  });

  try {
    await GstFormData.save();
    res.send("data inserted");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
