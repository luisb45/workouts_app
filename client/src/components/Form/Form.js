import React, {useState, useEffect} from 'react'
import { TextField, Select, MenuItem, InputLabel, FormControl, Button, Box, Paper, Typography, Card } from '@mui/material'
import { useDispatch, useSelector} from 'react-redux';


import {createPost , updatePost, deletePost} from '../../actions/posts'
import {cardStyle, cardTitle, styleForm, styleButton, styleDelete} from './styles'


function Form({currentId, setCurrentId}) {
  const [postData, setPostData] = useState({title: '', exercises: '', exerciseType: ''});
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
  const dispatch = useDispatch();
  

  useEffect(() => {
    if(post) setPostData(post);
  }, [post])


  const handleSubmit = (e) => {
    e.preventDefault();

    if(currentId) {
      dispatch(updatePost(currentId, postData))
    } else {
          dispatch(createPost(postData));
    }
    clear();
  }

  const clear = () => {
    setCurrentId(null);
    setPostData({title: '', exercises: '', exerciseType: ''});

  }

  const handleDelete = () => {
    dispatch(deletePost(post._id));
    clear();
  }

  return (
    <Card style={cardStyle} elevation={5}>
        <form onSubmit={handleSubmit}>
            <Typography style={cardTitle} variant='h6'>{currentId ? 'Edit' : 'Create'} a Workout</Typography>
            <TextField variant='standard' style={styleForm} fullWidth name='title' label='Workout Title' value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value})} /> <br />
            <TextField variant='standard' style={styleForm} fullWidth name='exercises' label='Exercises' value={postData.exercises} onChange={(e) => setPostData({...postData, exercises: e.target.value.split(',')})} /> <br />
            <FormControl variant='standard' fullWidth style={styleForm}>
            <InputLabel>Exercise Type</InputLabel>
            <Select name='exerciseType' label='Exercise Type' value={postData.exerciseType} onChange={(e) => setPostData({...postData, exerciseType: e.target.value})}>
              <MenuItem value='Chest'>Chest</MenuItem>
              <MenuItem value='Arms'>Arms</MenuItem>
              <MenuItem value='Back'>Back</MenuItem>
              <MenuItem value='Legs'>Legs</MenuItem>
            </Select>
            </FormControl><br />
            <Button type="submit" variant='outlined' style={styleButton}>Submit</Button>
            {currentId ? <Button variant='outlined' color='error' style={styleDelete} onClick={handleDelete}>Delete</Button> : null}
        </form>
        
    </Card>
  )
}

export default Form