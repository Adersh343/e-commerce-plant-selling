import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ShopPage from './pages/ShopPage'
import About from './pages/About'

const App = () => {
  return (
    <div>
      
      
      <Navbar/>

      <Home/>

      <ShopPage/>

      <About/>
    </div>
  )
}

export default App