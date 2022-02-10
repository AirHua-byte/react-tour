import { useEffect, useState } from 'react'

export default function useTitleHook(title) {
  const [state, setState] = useState()

  useEffect(() => {
    document.title = title
    setState(title)
  }, [title])

  return state
}