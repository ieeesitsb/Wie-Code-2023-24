import React from 'react'
import HeroSection from '../homeSections/hero/heroSection'
import Header from '../components/header/header'
import Domains from '../homeSections/domains/domains'
import Footer from '../components/footer/footer'

function HomePage() {
  return (
    <div>
        <Header/>
        <HeroSection/>
        <Domains />
        <Footer/>
    </div>
  )
}

export default HomePage