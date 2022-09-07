import React, { useState, useEffect } from 'react'
import { getAllChores } from '../api'

function App() {
  const [chores, setChores] = useState([])
  const [toggle, setToggle] = useState(false)

  
  // useEffect(async () => {
  //   const arr = await getAllChores()
  //   setChores(arr)
  // }, [])

  async function eventHandler() {
    const arr = await getAllChores()
    setChores(arr)
    setToggle(!toggle)
  }

  return (
    <>
      <h1 className='header'>Matt's To Do List!</h1>
      <h2 className='subheading'>List of Chores:</h2>
      <button className='btn' onClick={eventHandler}>{toggle ? 'Close Chores' : 'Open Chores'}</button>
      <ul>
        {toggle ? chores.map(chore => <p> <a href = '#'key={chore.id}>To Do: {chore.name}<br></br>Complete on: <em>{chore.instruction}</em><br></br><br></br></a></p>): null}
      </ul>
    </>
  )
}

export default App
