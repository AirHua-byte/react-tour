import React, { useContext, useEffect } from 'react'
import { UserContext } from './userContext'
import User from './user'
import { Button } from 'antd-mobile'

export default function App(props) {
  const { state, dispatch } = useContext(UserContext)
  
  useEffect(() => { }, [])
  
  const handleLogin = () => {
    dispatch({
      type: 'LOGIN',
      payload: true
    })
  }

  return (
    <div>
      {
        state.isLogin ? <User></User> : <Button type='primary' onClick={handleLogin}>登录</Button>
      }
    </div>
  )
}
