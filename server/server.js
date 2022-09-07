const path = require('path')
const express = require('express')
const choresRoutes = require('./routes/chores')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))
server.use(express.json())

server.use('/api/v1/chores', choresRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
