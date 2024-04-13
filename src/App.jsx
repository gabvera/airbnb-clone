import react, { useState } from 'react'
import './css/App.css'
import './css/queries.css'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import LiveAnywhere from './Components/LiveAnywhere'
import BecomeAHost from './Components/BecomeAHost'
import DiscoverPlaces from './Components/DiscoverPlaces'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <LiveAnywhere />
      <BecomeAHost />
      <DiscoverPlaces />
      <Footer />
    </>
  )
}

export default App
