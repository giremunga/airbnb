import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Card from './components/card'
import data from './data.js'

function App() {
  const cards = data.map(item => {
    return (
        <Card 
            key={item.id}
            item={item}
        />
    )
})        
  return (
    <div>
      <Nav/>
      <Hero/>
      
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}

export default App
