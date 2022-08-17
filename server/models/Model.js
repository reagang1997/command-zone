const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const modelSchema = new Schema({
    name: String,
})

const Model = mongoose.model("Model", modelSchema);
module.exports = Model;