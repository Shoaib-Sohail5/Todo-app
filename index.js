const express = require('express')
const { createTodo, updateTodo } = require('./types');
const todo = require('./db');
const app = express()

app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsePayload =  createTodo.safeParse(createPayload)

    if(!parsePayload.success) {
        res.status(411).json({
            msg: "you sent wrong inputs"
        })
        return
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "todo created"
    })
})

app.put('/completed', async (req, res) => {
    const updatePayload = updateTodo
    const parsePayload = updateTodo.safeParse(updatePayload)

    if(!parsePayload.success) {
        res.status(411).json({
            msg: "you sent wrong inputs"
        })
        return
    }

    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })

    res.json({
        completed: true
    })

})

app.get('/todos', async (req, res) => {
    const todos = await todo.find({})

    res.json({todos})
})

app.use(express.json())