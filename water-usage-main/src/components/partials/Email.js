import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'



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
        <input className='email' type='email' placeholder='Enter email' onChange={handleChange}/>
        <Button variant='dark' onClick={handleSubmit}>Join Now</Button>
    </form>
  )
}

export default Email