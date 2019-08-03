const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = 3001

app.use(cors())
app.use(bodyParser.json())

mongoose.connect('mongodb://127.0.0.1:27017/a2_web', {
  useNewUrlParser: true
})

connection = mongoose.connection

connection.once('open', function(){
  console.log('MongoDB opened!')
}) 

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT)
})