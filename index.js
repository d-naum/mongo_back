const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
require("dotenv").config();
const app = express();
const dataTypeSetRouter = require("./routes/dataTypeSet");

app.use(express.json());
app.use("/", dataTypeSetRouter);

mongoose
  .connect(process.env.DB_CONNECTION_STRING, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(port, () => {
  console.log("Runnning @ 3000");
});
