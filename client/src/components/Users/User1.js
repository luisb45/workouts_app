import React from 'react'

import { Button, Typography, Card, CardContent } from '@mui/material';
import {cardStyle, cardTitle, styleButton, styleEdit, userButtons } from './styles'
import EditIcon from '@mui/icons-material/Edit';


function User1({ user, setUserCurrentId}) {
  return (
    <Card style={cardStyle} elevation={5}>
      <Typography style={cardTitle} variant='h6'>User</Typography>
      <CardContent>
        <Typography>Username: {user.username}</Typography>
        <Typography>Email: {user.email}</Typography>
        <Button style={styleEdit} onClick={() => setUserCurrentId(user._id)}>
            <EditIcon /> 
          </Button>
          <div style={userButtons}>
        <Button variant='outlined' style={styleButton} disabled='true'>Likes</Button>
        <Button variant='outlined' style={styleButton} disabled='true'>Posts</Button>
        </div>
      </CardContent>
     
     </Card>
  )
}

export default User1