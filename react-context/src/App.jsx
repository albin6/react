import './App.css'
import React from 'react'
import LayerOne from './components/LayerOne'
import { ThemeProvider } from './store/Context'

function App() {
  return (
    <>
      <ThemeProvider>
        <LayerOne />
      </ThemeProvider>
    </>
  )
}

export default App