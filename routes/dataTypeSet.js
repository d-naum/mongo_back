const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const DataTypeSet = require("../model/dataTypeSet");
router.post("/create", (req, res) => {
  const myDataTypeSet = DataTypeSet(req.body);
  myDataTypeSet
    .save()
    .then(() => {
      console.log(myDataTypeSet);
      res.send(myDataTypeSet);
    })
    .catch((err) => {
      res.send(err);
    });
});
router.delete("/delete", (req, res) => {
  mongoose.connection
    .collection("datatypesets")
    .drop()
    .then(() => {
      console.log("successfully deleted");
      res.json({
        message: "successfully deleted",
      });
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

module.exports = router;
