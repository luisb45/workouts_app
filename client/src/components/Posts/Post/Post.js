import React from 'react'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import moment from 'moment'
import { useDispatch } from 'react-redux'

import { likePost } from '../../../actions/posts';
import {cardStyle, styleActions, styleEdit, cardTitle, details} from './styles'



function Post( {post, setCurrentId} ) {
  const dispatch = useDispatch();

  return (
    
    <Card style={cardStyle}>
      <div style={cardTitle}>
        <Typography variant='h6'>{post.exerciseType}</Typography>
        </div>
      <CardContent>
        <Typography variant='h5'>{post.title}</Typography>
        {/* <Typography></Typography> username will go here */}
        <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
        <Typography style={details}>{post.exercises.map((exercises) => <li>{exercises}</li>)}</Typography>
        <div>
          <Button style={styleEdit} onClick={() => setCurrentId(post._id)}>
            <EditIcon /> 
          </Button>
        </div>
      </CardContent>

      <CardActions style={styleActions}>
      <Button style={{color: 'black'}} onClick={() => {dispatch(likePost(post._id))}}>
        <ThumbUpAltIcon/>&nbsp; Like {post.likeCount}
      </Button>

      </CardActions>

    </Card>
  )
}

export default Post