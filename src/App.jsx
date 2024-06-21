import React from 'react'
import Opener from './components/Opener'
import Streaming from './components/Streaming'
import Downloads from './components/Downloads'
import Everywhere from './components/Everywhere'
import Kids from './components/Kids'
import Faq from './components/Faq'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Opener/>
      <Streaming/>
      <Downloads/>
      <Everywhere/>
      <Kids/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default App
