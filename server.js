const express = require("express")
const mongoose = require('mongoose')
const articleRouter = require('./Routes/articles')
const app = express()
const methodOverride = require('method-override')
const Article = require('./models/article')
require("dotenv").config();
const port =  process.env.PORT ||100

//Mongo Setup
const connectDB = require('./db/connect')
const password = encodeURIComponent("@rn@v03mongo");
const URI = `mongodb+srv://ArnavO3:${password}@cluster0.zzfydod.mongodb.net/?retryWrites=true&w=majority`

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/', async (req, res) => {
    const articles = await Article.find().sort({ createdAt: 'desc' })
    res.render('articles/index', { articles: articles })
})
app.use('/articles', articleRouter)

const start = async () => {
    try {
        await connectDB(URI)
        app.listen(port)
        console.log("Server started at port 100",)
    } catch (error) {
        console.log(error)
    }
}


start()
