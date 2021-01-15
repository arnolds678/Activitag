const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    creator_id: String,
    creator_name: String,
    content: String,
    completed: Boolean,
});

module.exports = mongoose.model('comment', tagSchema);