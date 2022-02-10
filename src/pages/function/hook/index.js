import React, { useEffect, useMemo, useState } from 'react'

export default function Index(props) {
  //  React 函数组件中添加 state 的 Hook
  const [count, setCount] = useState(0)
  const [text] = useState('test')

  // // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log('first')
  })

  const handleCount = () => {
    setCount(count + 1)
  }

  const memoText = useMemo(() => {
    console.log('emit')
    return text
  }, [text])

  // const testText = () => {
  //   console.log('emit')
  //   return text
  // }

  return (
    <div>
      <h1 onClick={handleCount}>count {count}</h1>
      <h1>{ memoText }</h1>
    </div>
  )
}
