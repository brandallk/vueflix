var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId
var schemaName = "Movie"

var schema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    createdAt: {
        type: Number,
        required: true,
        default: Date.now()
    },
    imgUrl: {
        type: String,
        required: true,
        default: 'http://placehold.it/200X200'
    },
    userId: { // ID of the user who creates a Movie
        type: ObjectId,
        required: true,
        ref: 'User'
    }
})

module.exports = mongoose.model(schemaName, schema)
