const mongoose = require("mongoose");
const StatusTable = new mongoose.Schema({
  data_set_name: String,
  status: String,
  num_single_active: Number,
  num_single_inActive: Number,
  num_multi: Number,
});
module.exports = mongoose.model("status_table", StatusTable);
