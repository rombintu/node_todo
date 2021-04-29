// INCLUDE MODULES
const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')

// INCLUDE LOCALS
const todoRoutes = require('./routes/todo')

// CONSTANTS
const PORT = process.env.PORT || 5000

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

// LISTEN
App.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`)
})
