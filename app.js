const Todo = require('./collections/To-dos')
const ContacList = require('./collections/Contactlist')

const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://15141731:15141731@cluster0.k0b60.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

app.use(express.json())

app.use(cors())

app.get('/get-todos', async (req, res) => {
  try {
    const todoList = await Todo.find({})

    res.send(todoList)
  } catch (error) {
    res.send(error)
  }
})

app.get('/get-todo/:id', async (req, res) => {
  try {
    const id = req.params.id
    const todoList = await Todo.findOne({_id: id})

    res.send(todoList)
  } catch (error) {
    res.send(error)
  }
})

app.post('/post-todo', async (req, res) => {
  try {
    const todo = req.body
    const newTodo = await Todo.create(todo)

    res.send(newTodo)
  } catch (error) {
    res.send(error)
  }
})

app.put('/put-todo/:id', async (req, res) => {
  try {
    const dataToEdit = req.body
    const id = req.params.id
    const todoEdited = await Todo.findByIdAndUpdate({ _id: id }, { $set: dataToEdit}, {new: true})

    res.send(todoEdited)
  } catch (error) {
    res.send(error)
  }
})

app.delete('/delete-todo/:id', async (req, res) => {
  try {
    const id = req.params.id
    const taskDeleted = await Todo.findByIdAndDelete({ _id: id})

    res.send(taskDeleted)
  } catch (error) {
    res.send(error)
  }
})

app.get('/get-contactLists', async (req, res) => {
  try {
    const todoList = await ContacList.find({})

    res.send(todoList)
  } catch (error) {
    res.send(error)
  }
})

app.post('/post-contactList', async (req, res) => {
  try {
    const todo = req.body
    const newTodo = await ContacList.create(todo)

    res.send(newTodo)
  } catch (error) {
    res.send(error)
  }
})

app.put('/put-contactList/:id', async (req, res) => {
  try {
    const dataToEdit = req.body
    const id = req.params.id
    const todoEdited = await ContacList.findByIdAndUpdate({ _id: id }, { $set: dataToEdit }, { new: true })

    res.send(todoEdited)
  } catch (error) {
    res.send(error)
  }
})

app.delete('/delete-contactList/:id', async (req, res) => {
  try {
    const id = req.params.id
    const taskDeleted = await ContacList.findByIdAndDelete({ _id: id })

    res.send(taskDeleted)
  } catch (error) {
    res.send(error)
  }
})

app.listen(5000, () => {
  console.log('Servidor funcionando en puerto 5000')
})

//Express.js
//Nodemon
//Cors
//Mongoose
