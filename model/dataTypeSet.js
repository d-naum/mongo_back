const mongoose = require("mongoose");
const DataTypeSet = new mongoose.Schema({
  data_set_name: String,
  utterance: String,
  single: Boolean,
  active: Boolean,
  type: String,
  type2: String,
  word_count: Number,
  starting_word: String,
  starting_combinations: [],
});
module.exports = mongoose.model("DataTypeSet", DataTypeSet);
