import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Menu from './components/Menu/Menu'
import Banner1 from './components/Banners/Banner1'
import Banner2 from './components/Banners/Banner2'
import Banner3 from './components/Banners/Banner3'

const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <Navbar/>
      <Hero />
      <Menu />
      <Banner1 />
      <Banner2/>
      <Banner3 />

    </main>
  )
}

export default App