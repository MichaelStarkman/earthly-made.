import React from 'react'
import { useState } from 'react'



const Email = () => {
    const [msg, setMsg] = useState('Join our newsletter!')
    const [temp, setTemp] = useState('')

    const handleSubmit = e => {
        setMsg(temp)
    }
    
    const handleChange = e => {
        let value = e.target.value
        setTemp(`Welcome, ${value}!`)
    }
  return (
    <form>
        <label htmlFor='email'>{msg}</label>
        <input type='email' placeholder='Enter email' onChange={handleChange}/>
        <button type='submit' onClick={handleSubmit}>Join Now</button>
    </form>
  )
}

export default Email