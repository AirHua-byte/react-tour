import React, { useEffect } from 'react'
import { UserContextProvider } from './userContext'
import App from './app'

export default function Index(props) {
  useEffect(() => {

  }, [])

  return (
    <UserContextProvider>
      <App {...props}></App>
    </UserContextProvider>
  )
}
