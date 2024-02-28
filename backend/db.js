const mongoose = require('mongoose')

// mongodb+srv://puru_code:bzGRIFvv8d6HhgkZ@cluster0.ilgpyni.mongodb.net/

mongoose.connect('mongodb+srv://puru_code:bzGRIFvv8d6HhgkZ@cluster0.ilgpyni.mongodb.net/todos')
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)
module.exports = {
    todo
}