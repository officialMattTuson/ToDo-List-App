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

module.exports = router
