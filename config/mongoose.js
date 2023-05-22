const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://doxx:822eB6x7yq2aPzX@cluster0.ht4cn.mongodb.net/Facebook?retryWrites=true&w=majority");

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', function() {
    console.log('Connected to MongoDB')
})

module.exports = db