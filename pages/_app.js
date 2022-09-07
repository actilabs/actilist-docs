import '../styles/global.css'
import Layout from '../layout'
import { useState, useEffect, createContext } from 'react'
import { getItemFromLS } from '../utils'

export const AppContext = createContext()

function MyApp({ Component, pageProps }) {
  const [settings, setSettings] = useState({
    theme: 'light',
    lang: '',
    dir: '',
  })

  useEffect(() => {
    let theme = getItemFromLS('theme')
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme)
      setSettings({ ...settings, theme })
    } else {
      document.documentElement.setAttribute('data-theme', settings.theme)
    }
  }, [])

  /*  useEffect(() => {
    const theme = getItemFromLS('theme')
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme)
    } else {
      document.documentElement.setAttribute('data-theme', settings.theme)
    }
    console.log(settings.theme)
  }, [settings.theme]) */

  return (
    <AppContext.Provider value={{ settings, setSettings }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  )
}

export default MyApp
