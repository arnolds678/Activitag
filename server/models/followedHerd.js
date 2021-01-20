const mongoose = require('mongoose');

const herdSchema = new mongoose.Schema({
    userId: String,
    creator_id: String,
    creator_name: String,
    content: String,
});

module.exports = mongoose.model('followedHerd', herdSchema);