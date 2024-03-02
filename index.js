const express = require('express')
const { createTodo, updateTodo } = require('./types')
const app = express()

app.post('/todo', (req, res) => {
    const createPayload = req.body;
    const parsePayload =  createTodo.safeParse(createPayload)

    if(!parsePayload.success) {
        res.status(411).json({
            msg: "you sent wrong inputs"
        })
        return
    }

})

app.put('/completed', (req, res) => {
    const updatePayload = updateTodo
    const parsePayload = updateTodo.safeParse(updatePayload)

    if(!parsePayload.success) {
        res.status(411).json({
            msg: "you sent wrong inputs"
        })
        return
    }

})

app.get('/todos', (req, res) => {
    res.send('Hello World')
})

app.use(express.json())