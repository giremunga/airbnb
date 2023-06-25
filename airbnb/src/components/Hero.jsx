import React from 'react'
import grid from '../assets/photo grid.png'

const Hero = () => {
  return (
    <section className='hero'>
      <img src={grid} className='hero--photo' />
      <h1 className='hero--h'>Online Experiences</h1>
      <p className='hero--t'>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home</p>
    </section>
  )
}

export default Hero
