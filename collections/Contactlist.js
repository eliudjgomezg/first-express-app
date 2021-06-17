const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ContactList = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
})

module.exports = mongoose.model('ContactList', ContactList)