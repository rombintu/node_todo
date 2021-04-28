// INCLUDE MODULES
const express = require('express')
const path = require('path')
// const mongodb = require('mongoose')
const exphbs = require('express-handlebars')

// INCLUDE LOCALS
const todoRoutes = require('./routes/todo')

// CONSTANTS
const PORT = process.env.PORT || 5000
// const PASSWORD = process.env.MONGO_PASS
// const uri = `mongodb+srv://nick:${PASSWORD}@cluster0.zvqcc.mongodb.net/test`


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
App.use(express.static(path.join(__dirname, '/public')))
// App.use(express.urlencoded({extended: true}))

// BODY PROGRAMM
// async function start(){
//     try {
//         await mongodb.connect(uri, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         })
//     } catch (e) {
//         console.log(e)
//     }
// }

// LISTEN
App.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`)
})

// MAIN
// start()