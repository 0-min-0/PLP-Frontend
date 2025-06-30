import { useEffect } from 'react'

export const useDarkMode = () => {
  useEffect(() => {
    const root = document.documentElement
    root.classList.add('dark')
    return () => root.classList.remove('dark')
  }, [])
}