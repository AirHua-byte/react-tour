import React, { useContext } from 'react'
import { UserContext } from './userContext'

export default function User(props) {
  const {state} = useContext(UserContext)

  return (
    <div>
      <h1>User</h1>
      <h1>id: {state.user.id}</h1>
      <h1>name: { state.user.name }</h1>
    </div>
  )
}
