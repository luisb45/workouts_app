import React from 'react'
import { useSelector } from 'react-redux'

import { Grid, LinearProgress } from '@mui/material';

import User1 from './User1';

function User({ setUserCurrentId }) {
    const users = useSelector((state) => state.users)
  
  return (
    !users.length ? <LinearProgress /> : (
      <Grid>
      {users.map((user) => (
        <User1 user={user} setUserCurrentId={setUserCurrentId}/>
      ))}
    </Grid>
    )
  );
}

export default User