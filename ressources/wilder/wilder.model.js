const mongoose = require('mongoose')

const wilderSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 30
    },
    city: String,
    skills: [{label: String, votes: Number}],
    completed: {
        type: String,
        enum: ['in progress', 'failed', 'congrats'],
        default: 'in progress'
    }
})

module.exports = mongoose.model('Wilder', wilderSchema)