const config = require('./knexfile').development
const conn = require('knex')(config)

function getChores(db = conn) {
  return db('Chores')
}

function addChore(data, db = conn) {
  return db('Chores').insert(data).select()
} 

function deleteChore(id, db = conn) {
  return db('Chores').where('id', id).del()
}

module.exports = {
  getChores,
  addChore,
  deleteChore,
}
