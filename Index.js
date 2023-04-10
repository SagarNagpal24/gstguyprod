const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

//const GSTformModel = require("./Models/GstForm-data");
const GstFormdatarouter = require("./Routes/Gstform-route");


const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(
   "mongodb+srv://sagar:S%40gar1234@cluster0.nikbgvn.mongodb.net/GSTformData?retryWrites=true&w=majority",

   {
    useNewUrlParser: true,
  }
);

app.use("/static", express.static(path.join(__dirname, "build/static")));

app.get("/*", (req, res) => {
   res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use(GstFormdatarouter);


app.listen(3000, () => {
  console.log("connection done on 3003 port");
});
