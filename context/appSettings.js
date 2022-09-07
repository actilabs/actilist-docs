import App from 'next/app'
import React, { createContext, useState } from 'react'
import { useContext } from 'react'

export const AppContext = createContext()

const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    theme: 'light',
    lang: '',
    dir: '',
  })

  return (
    <AppContext.Provider value={{ settings, setSettings }}>
      {children}
    </AppContext.Provider>
  )
}

export const useSettings = () => useContext(AppContext)
export default SettingsProvider
