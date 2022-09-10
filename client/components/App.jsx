import React, { useState } from 'react'
import { getAllChores, deleteChore } from '../api'
import AddChore from './AddChore'

function App() {
  const [chores, setChores] = useState([])
  const [toggle, setToggle] = useState(false)
  const [form, setForm] = useState(false)

  
  // useEffect(async () => {
  //   const arr = await getAllChores()
  //   setChores(arr)
  // }, [])

  async function eventHandler() {
    const arr = await getAllChores()
    setChores(arr)
    setToggle(!toggle)
    setForm( form ? false : false)
    
  }

  const deleteHandler = (id) => {
    deleteChore(id)
    eventHandler()
    setForm( form ? false : false)
  }

  const viewForm = () => {
    setForm(form ? false : true)
  }

  return (
    <>
      <h1 className='header'>Matt's To Do List!</h1>
      <h2 className='subheading'>List of Chores:</h2>
      <button className= {toggle ? 'btnClose' : 'btnOn'} onClick={eventHandler}>{toggle ? 'Close Chores' : 'Open Chores'}</button>
      <div className='row'>
        
        {toggle ? chores.map(chore => 
        <div className='column'>
          <a href = '#'>
            <p className='card' key={chore.id}>To Do:</p>
            <p className='chore'> {chore.name}<br></br><br></br>Complete on: <em>{chore.instruction}</em></p>
          </a>
         <button onClick={() => deleteHandler(chore.id)}>Delete Chore</button>
        </div>) : null}
            
      </div>
      <div className='form'>
        {form ? <AddChore /> : null}
        {toggle ? <button onClick={viewForm}>{form ? 'Close Form' : 'Add Chore'}</button> : null}
      </div>
      
    </>
  )
}

export default App
