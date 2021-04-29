// IMPORT
const { urlencoded } = require("body-parser")
const { Router } = require("express")

const api = require('../dbfunc/api')

// CONSTS
const router = Router()

// ROUTES
router.get('/', async (req, res) => {
    todos = api.select()
    await res.render('index', {
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

router.post('/create', urlencoded({extended: false}), async (req, res) => {
    let title = req.body.title
    if (title) {
        api.create(title)
        await res.redirect('/')
    } else {
        res.render('create', {
            error: 'Напишите что-нибудь...',
            isCreate: true
        })
    }
    
})

router.post('/completed', urlencoded({extended: false}), async (req, res) => {
    let id = req.body.id
    let status = true
    api.completed(status, id)

    await res.redirect('/')
})

router.post('/del_all', async (req, res) => {
    api.delete_all()
    await res.redirect('/')
})

// EXPORTS
module.exports = router
