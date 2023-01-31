import React from 'react'
import { useSelector } from 'react-redux'

function User() {
    const users = useSelector((state) => state.users)
    console.log(users)
  return (
    <div></div>
  )
}

export default User