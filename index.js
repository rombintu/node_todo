// INCLUDE MODULES
const express = require('express')
const mongodb = require('mongoose')
const exphbs = require('express-handlebars')

// INCLUDE LOCALS
const todoRoutes = require('./routes/main')

// CONSTANTS
const PORT = process.env.PORT || 3001
const PASSWORD = process.env.PASSWORD
const uri = `mongodb+srv://nick:${PASSWORD}@cluster0.zvqcc.mongodb.net/test`
// CREATE APP
const App = express()
const hbs = exphbs.create({
    defaultLayout: 'Main',
    extname: 'hbs'
})

// APP CONFIG
App.engine('hbs', hbs.engine)
App.set('view engine', 'hbs')
App.set('views', 'views')
App.use(todoRoutes)
App.use(express.urlencoded({extended: true}))
// BODY PROGRAMM
async function start(){
    try {
        await mongodb.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } catch (e) {
        console.log(e)
    }
}

// LISTEN
App.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`)
})

// MAIN
start()