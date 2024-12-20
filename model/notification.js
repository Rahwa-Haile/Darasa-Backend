const mongoose = require('mongoose')

const notificationSchema = new mongoose.Schema({
    notifImage: {
        type: String,
    },
    notifTitle: {
        type: String,
        required: [true, 'Please provide notification title']
    },
    notifContent: {
        type: String
    }

}, {timestamps: true})

module.exports = mongoose.model('Notification', notificationSchema)