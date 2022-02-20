const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true
    },
    longURL: {
        type: String,
        default: false
    }
});

module.exports = mongoose.model("urlSchema", urlSchema);
