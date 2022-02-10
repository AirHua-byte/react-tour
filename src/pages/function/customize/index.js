import React from 'react'
import { useState } from 'react'
import { useTitleHook } from '../../../hook'

export default function Index() {
  const [state] = useState('自定义')
  const title = useTitleHook(state)

  return (
    <div>{ title }</div>
  )
}
