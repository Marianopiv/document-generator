import './App.css'
import Rutas from './routes/Rutas'
import React from "react"
import DocumentsProvider from './provider/DocumentsProvider'

function App() {
  return (
      <DocumentsProvider>
      <Rutas/>
      </DocumentsProvider>
  )
}

export default App
