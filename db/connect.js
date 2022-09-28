const mongoose = require('mongoose')
const URL = 'mongodb+srv://ArnavO3:@rn@v03mongo@cluster0.zzfydod.mongodb.net/?retryWrites=true&w=majority'
const connectDB = (URL) => {
    return mongoose.connect(URL)
}

module.exports = connectDB
