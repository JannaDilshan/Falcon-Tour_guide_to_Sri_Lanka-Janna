import React from 'react'
import './booking.css'
import NavBar from '../Components/NavBar'
import Header from '../Header/Header'
import Featured from '../Components/featured'
import Part from '../Components/part'
import FeaturedProperty from '../Components/featuredProperty'

function booking() {
  return (
    <div>
      <Header />
      <NavBar />
      <div className="homeContainer">
      <Part />
  
        <Featured />
        <FeaturedProperty />
        
      </div>
    </div>
  )
}

export default booking
