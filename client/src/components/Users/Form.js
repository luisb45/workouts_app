import React, {useState, useEffect} from 'react';
import { TextField, Button, Typography, Card } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';


import {cardStyle, cardTitle, styleForm, styleButton } from './styles'
import { createUser, updateUser } from '../../actions/users';
import User from './User';


function UserForm({ userCurrentId, setUserCurrentId}) {
  const [userData, setUserData] = useState({username: '', password: '', email: ''});
  const user = useSelector((state) => userCurrentId ? state.users.find((u) => u._id === userCurrentId): null);
  const dispatch = useDispatch();

  useEffect(() => {
    if(user) setUserData(user)
  }, [user])

  const handleSubmit = (e) => {
    e.preventDefault();

    if(userCurrentId) {
      dispatch(updateUser(userCurrentId, userData));
    } else {
      dispatch(createUser(userData))
    }
    clear();
  }

  const clear = () => {
    setUserCurrentId(null);
    setUserData({username: '', password: '', email: ''})
  };
  

  return (
    <Card style={cardStyle} elevation={5}>
        <form onSubmit={handleSubmit}>
            <Typography style={cardTitle} variant='h6'>{userCurrentId ? 'Edit User' : 'SignUp / LogIn'}</Typography>
            <TextField variant='standard' style={styleForm} fullWidth name='username' label='UserName' value={userData.username} onChange={(e) => setUserData({ ...userData, username: e.target.value })}/> <br />
            <TextField variant='standard' style={styleForm} fullWidth name='password' label='Password' value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })}/> <br />
            <TextField variant='standard' style={styleForm} fullWidth name='email' label='Email' value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })}/> <br />
            <br />
            <Button type="submit" variant='outlined' style={styleButton}>{userCurrentId ? 'Submit edit' : 'SignUp'}</Button>
            <Button  variant='outlined' style={styleButton} disabled='true'>Log In</Button> <br />
            
            
        </form>
        
    </Card> 
  )
}

export default UserForm;