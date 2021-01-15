const mongoose = require('mongoose');

const herdSchema = new mongoose.Schema({
    creator_id: String,
    creator_name: String,
    name: String,
    tags: Array,
});

module.exports = mongoose.model('story', herdSchema);