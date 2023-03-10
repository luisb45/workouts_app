import React, {useState, useEffect} from 'react';
import { AppBar, Container, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';

import {getPosts} from './actions/posts'
import { getUsers } from './actions/users';
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import UserForm from './components/Users/Form';
import User from './components/Users/user';
import styles from './styles.css'
import { styleBar, styleContainer } from './styles';

function App() {
  const [currentId, setCurrentId] = useState(null);
  const [userCurrentId, setUserCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Container style={styleContainer}>
    <Container>
    <AppBar style={styleBar} position='static'>
      <h1 className={styles.h1}>Share a Workout</h1>
      </AppBar>
      <Container>
        <Grid container justify='space-between' alignItems='stretch' spacing={4}>
          <Grid item xs={12} sm={5}>
                <UserForm userCurrentId={userCurrentId} setCurrentId={setCurrentId}/>
              </Grid>
          <Grid item xs={12} sm={7}>
            <Form currentId={currentId} setCurrentId={setCurrentId}/>
            {/* <h3>Arms | Chest | Back | Legs</h3>  */}
          </Grid>
              <Grid item xs={12} sm={5}>
              <User userCurrentId={userCurrentId} setUserCurrentId={setUserCurrentId}/>
              </Grid>
           <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
        </Grid>
      </Container>
      </Container>
    </Container>
  )
}

export default App;