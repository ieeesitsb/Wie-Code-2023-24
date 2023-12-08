import React from 'react'
import HeroSection from '../homeSections/hero/heroSection'
import Header from '../components/header/header'
import Domains from '../homeSections/domains/domains'
function HomePage() {
  return (
    <div>
        <Header/>
        <HeroSection/>
        <Domains />
    </div>
  )
}

export default HomePage