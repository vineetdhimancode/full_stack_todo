const express = require('express')
const { createTodo, updateTodo } = require('./types')
const { todo } = require('./db')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

/**
 * body {
 *  title: string,
 *  description: string
 * }
 */
app.post('/todo', async(req, res) => {
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent wrong inputs"
        })
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.status(201).json({
        msg: 'Created!'
    })
})

app.get('/todos', async(req, res) => {
    const todos = await todo.find()

    res.status(200).json(todos)

    // res.status(200).json(todos)
})

app.put('/completed', async(req, res) => {
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: 'Wrong input'
        })
    }

    await todo.updateOne({ _id: req.body.id }, { completed: false })

    res.status(200).json({
        msg: 'Updated'
    })
})

app.listen(9000, function() {
    console.log('Server Started')
})