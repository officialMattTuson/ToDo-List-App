import React, { useState } from 'react'
import { addNewChore } from '../api'

function AddChore() {
  const [chores, setChores] = useState({
    name: '',
    instruction: '',
    completed: false
  })

  const formHandler = (e) => {
    setChores({
      ...chores,
      [e.target.name]: e.target.value,   
    })
  }

  const submitHandler = async () => {
    const choresObj = await addNewChore(chores)
    setChores([...chores, choresObj])
  }

  return(
    <>
    <form onSubmit={submitHandler}>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name' onChange={formHandler} />

        <label> Complete By
          <input type='text' name='instruction' placeholder='Monday' onChange={formHandler} />
        </label>


        <button>submit</button>
      </form>
    </>
    )
}
export default AddChore