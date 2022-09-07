import request from 'superagent'

export async function getAllChores () {
  const resp = await request.get('/api/v1/chores')
  return resp.body
}

// export function getAllChores () {
//   return request.get('/api/vi/chores')
//   .then((resp) => {
//     return resp.body
//   })
// }