const { Schema, model } = require('mongoose')

const schema = new Schema({
    id: {
        type: Number
    },
    title:  {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = model('ToDo', schema)