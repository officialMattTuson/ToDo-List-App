const config = require('./knexfile').development
const conn = require('knex')(config)

function getChores(db = conn) {
  return db('Chores')
}

module.exports = {
  getChores
}
