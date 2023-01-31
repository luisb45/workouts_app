import React, {useState} from 'react';
import { TextField, Button, Typography, Card } from '@mui/material';
import { useDispatch } from 'react-redux';


import {cardStyle, cardTitle, styleForm, styleButton } from './styles'
import { createUser } from '../../actions/users';


function UserForm() {
  const [userData, setUserData] = useState({username: '', password: '', email: ''});
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createUser(userData));
  }

  

  return (
    <Card style={cardStyle} elevation={5}>
        <form onSubmit={handleSubmit}>
            <Typography style={cardTitle} variant='h6'>User</Typography>
            <TextField variant='standard' style={styleForm} fullWidth name='username' label='UserName' value={userData.username} onChange={(e) => setUserData({ ...userData, username: e.target.value })}/> <br />
            <TextField variant='standard' style={styleForm} fullWidth name='password' label='Password' value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })}/> <br />
            <TextField variant='standard' style={styleForm} fullWidth name='email' label='Email' value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })}/> <br />
            <br />
            <Button type="submit" variant='outlined' style={styleButton}>Sign Up</Button>
            <Button  variant='outlined' style={styleButton}>Log In</Button> <br />
            
            
        </form>
        
    </Card>
  )
}

export default UserForm;