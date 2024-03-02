const express = require('express')
const app = express()

app.post('/todo', (req, res) => {
    res.send('Hello World')
})

app.put('/completed', (req, res) => {
    res.send('Hello World')
})

app.get('/todos', (req, res) => {
    res.send('Hello World')
})

app.use(express.json())