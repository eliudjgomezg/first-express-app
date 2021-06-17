const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Todos = new Schema({
  name: { type: String, required: true },
  task: { type: String, required: true },
  isDone: {type: Boolean, default: false}
})

module.exports = mongoose.model('Todos', Todos)
