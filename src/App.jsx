import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import PopularFood from './components/PopularFood'
import BookNow from './components/BookNow'
import Reveiw from './components/Review'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='overflow-x-hidden'>
        <Hero/>
        <About/>
        <PopularFood/>
        <BookNow/>
        <Reveiw/>
        <Footer/>
    </div>
  )
}

export default App
