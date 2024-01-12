'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Switch } from '@nextui-org/react'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    setTheme('dark')
  }, [])

  if (!mounted) return null

  const handleThemeSwitch = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <Switch
      size="sm"
      defaultSelected
      onClick={handleThemeSwitch}
      startContent={<FaSun />}
      endContent={<FaMoon />}
    />
  )
}
