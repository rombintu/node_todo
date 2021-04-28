const { urlencoded } = require("body-parser")
const { Router } = require("express")
// const model_ToDo = require('../models/todo')
const router = Router()
const api = require('../dbfunc/api')
// const alert = require('alert')

router.get('/', async (req, res) => {
    // const todos = await model_ToDo.find({})
    todos = api.select()
    res.render('index', {
        title: 'ToDo List',
        isIndex: true,
        todos
    })
})

router.get('/create', (req, res) => {
    res.render('create', {
        error: '',
        isCreate: true
    })
})

router.post('/create', urlencoded({extended: false}), async(req, res) => {
    let title = req.body.title
    if (title) {
        await api.save(title)
        res.redirect('/')
    } else {
        res.render('create', {
            error: 'Напишите что-нибудь...',
            isCreate: true
        })
    }
    
})

router.post('/completed', urlencoded({extended: false}), async(req, res) => {
    let id = req.body.id
    let status = true
    await api.completed(status, id)

    res.redirect('/')
})

module.exports = router
