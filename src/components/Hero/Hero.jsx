import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import Videos from '../Video/Videos'
//import the scsss
import './Hero.scss'

const Hero = () => {
  return (
    <section className="hero">
        <Sidebar/>
        <Videos/>
    </section>
  )
}

export default Hero