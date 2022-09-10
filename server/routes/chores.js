const express = require('express')
const router = express.Router()

const db = require('../db/db')

// router.get('/', async (req, res) => {
//   try {
//     const users = await db.getAllUsers()
//     res.json(users)
//   } catch(err) {
//     res.status(500).send(err.message)
//   }
// })

router.get('/' , (req, res) => {
    db.getChores()
    .then((choresArray) => {
        res.json(choresArray)
    })
    .catch((err) => {
        console.log("Error in Chores.js: " + err.message)
    })
})

router.post('/', (req, res) => {
    const data = req.body   
    data.name = req.body.name
    data.instruction = req.body.instruction
    db.addChore(data)
    .then(() => {
        res.json(data) //works fine but doesn't add text inputs 
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    db.deleteChore(id)
    .then(() => {
      res.json(id)}) // potential problem to address, debug with console logs
  })

module.exports = router
