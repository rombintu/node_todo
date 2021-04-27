const { urlencoded } = require("body-parser")
const { Router } = require("express")
const model_ToDo = require('../models/todo')
const router = Router()


router.get('/', async (req, res) => {
    const todos = await model_ToDo.find({})

    res.render('index', {
        title: 'ToDo List',
        isIndex: true,
        todos
    })
})

router.get('/create', (req, res) => {
    res.render('create', {
        title: 'ToDo Create',
        isCreate: true
    })
})

router.post('/create', urlencoded({extended: false}), async (req, res) => {
    const todo = new model_ToDo({
       title: req.body.title
    })
    await todo.save()
    res.redirect('/')
})

module.exports = router