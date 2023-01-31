import React from 'react'
import { TextField, Button, Typography, Card } from '@mui/material'


import {cardStyle, cardTitle, styleForm, styleButton } from './styles'


function UserForm() {
  


  const handleSubmit = (e) => {
  
  }

  const clear = () => {
   

  }


  return (
    <Card style={cardStyle} elevation={5}>
        <form onSubmit={handleSubmit}>
            <Typography style={cardTitle} variant='h6'>User</Typography>
            <TextField variant='standard' style={styleForm} fullWidth name='userName' label='UserName' /> <br />
            <TextField variant='standard' style={styleForm} fullWidth name='password' label='Password' /> <br />
            <TextField variant='standard' style={styleForm} fullWidth name='email' label='Email' /> <br />
            <br />
            <Button type="submit" variant='outlined' style={styleButton}>Log In</Button> <br />
            <Button variant='outlined' style={styleButton}>Sign Up</Button>
            
        </form>
        
    </Card>
  )
}

export default UserForm;