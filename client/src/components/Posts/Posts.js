import React from 'react'
import {useSelector} from 'react-redux'
import { Grid, LinearProgress} from '@mui/material'

import {gridStyle} from './styles'
import Post from './Post/Post';

function Posts({ setCurrentId }) {
  const posts = useSelector((state) => state.posts)

  return (
    !posts.length ? <LinearProgress /> : (
      <Grid style={gridStyle} container alignItems='stretch'>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6}>
              <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  )
}

export default Posts