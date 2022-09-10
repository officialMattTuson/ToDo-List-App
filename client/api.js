import request from 'superagent'

export async function getAllChores () {
  const resp = await request.get('/api/v1/chores')
  return resp.body
}

export async function addNewChore (newChore) {
  const resp = await request.post('/api/v1/chores').send(newChore)
  return resp.body
}

export async function deleteChore(id){
  const resp = await request.delete(`/api/v1/chores/${id}`)
  return resp
} 

// export function getAllChores () {
//   return request.get('/api/vi/chores')
//   .then((resp) => {
//     return resp.body
//   })
// }